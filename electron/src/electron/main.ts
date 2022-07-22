import util from 'util';
import { exec as execCallback } from 'child_process';
const exec = util.promisify(execCallback)
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import { promises as fsProm } from 'fs';

// app/index.js
import path from 'path';
import { app, BrowserWindow, ipcMain, IpcMainInvokeEvent, shell } from 'electron';
import { EVENT_CHANNEL } from './eventChannel';
import mp3Duration from 'mp3-duration'
// import squirrel from 'electron-squirrel-startup'

// // Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (squirrel()) {
//   app.quit();
// }

require('electron-reload')(__dirname);

const isDev = process.env.IS_DEV === 'true';
let mainWindow: BrowserWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    },
  });

  // Open the DevTools.

  mainWindow.loadFile(path.join(__dirname, 'public', 'index.html'));
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  ipcMain.handle(EVENT_CHANNEL.MAIN.START, downloadYoutubeVideo)
  ipcMain.on(EVENT_CHANNEL.SHOW_MERGED_FILE, () => shell.showItemInFolder(`${TMP_DIR}/merged.mp3`))

  createWindow();
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

export const TMP_DIR = "./tmp"
const PARTS_DIR = `${TMP_DIR}/parts`

async function writeBatchFile(parts: any) {
  return fsProm.writeFile(`${TMP_DIR}/batch.txt`, parts.flatMap((part: any) => part.youtube_id).join('\n'))
}

async function downloadYoutubeVideo(event: IpcMainInvokeEvent, playlist_parts: any) {
  try {
    const parts = playlist_parts.flatMap((playlist_part: any) => playlist_part.part)
    console.log()

    if (!fs.existsSync(TMP_DIR)) {
      fs.mkdirSync(TMP_DIR);
    }

    if (!fs.existsSync(PARTS_DIR)) {
      fs.mkdirSync(PARTS_DIR);
    }

    const files = await fsProm.readdir(PARTS_DIR)
    const mp3Ids = (files.length ? [] : files).flatMap((mp3: string) => parseInt(path.parse(mp3).name))
    const mp3Durations: Map<number, number> = new Map()

    const uniqueParts = parts.filter((part: any, index: number, self: any) =>
      (index === self.findIndex((p: any) => (p.id === part.id)))
    )

    console.log(mp3Ids)
    for (const mp3Id of mp3Ids) {
      const duration = await mp3Duration(`${PARTS_DIR}/${mp3Id}.mp3`)
      console.log(duration)
      mp3Durations.set(mp3Id, Math.floor(duration))
    }

    const filteredMp3Ids = mp3Ids.filter((id: number) => {
      const part = uniqueParts.find((part: any) => part.id === id)
      if (!part) return false
      console.log(mp3Durations.get(id) === (part.end_seconds - part.start_seconds))
      return mp3Durations.get(id) === (part.end_seconds - part.start_seconds)
    })

    console.log(uniqueParts)

    const filteredParts = uniqueParts.filter((part: any) => filteredMp3Ids.indexOf(part.id) === -1)

    console.log(filteredParts)

    if (filteredParts.length === 0) {
      merge(event, playlist_parts)
    } else {
      await downloadParts(filteredParts, event, playlist_parts);
    }
    return;
  } catch (err) {
    console.error(err)
  }
}

async function downloadParts(filteredParts: any, event: IpcMainInvokeEvent, playlist_parts: any) {
  let queue: any[] = []

  await writeBatchFile(filteredParts);

  const stdout = await exec(path.join(__dirname, "lib", "mac", "python/bin/python3") + " " + path.join(__dirname, "lib", "mac", "youtube-dl") + ` --get-duration -g --batch-file=${TMP_DIR}/batch.txt`);
  const stdoutArray = stdout.stdout.split("\n");
  console.log(stdout);
  for (let i = 0; i < filteredParts.length; i++) {
    const durationString = stdoutArray[i * 3 + 2];
    const durationParts = durationString.split(':');
    const duration = parseInt(durationParts[0]) * 60 + parseInt(durationParts[1]);

    ffmpeg()
      .input(stdoutArray[i * 3 + 1])
      .setStartTime(filteredParts[i].start_seconds)
      .setDuration(filteredParts[i].end_seconds - filteredParts[i].start_seconds)
      .on('start', function () {
        console.log(`Started for youtube id: ${filteredParts[i].youtube_id}`);
        mainWindow.webContents.send('ffmpeg:download-start', filteredParts[i]);
        queue.push(filteredParts[i].id);
      })
      .on('end', function () {
        console.log(`Finished for youtube id: ${filteredParts[i].youtube_id}`);
        event.sender.send('ffmpeg:download-end', filteredParts[i]);
        queue.splice(queue.indexOf(filteredParts[i].id), 1);
        if (queue.length === 0) {
          merge(event, playlist_parts);
        }
      })
      .on('progress', (progress: any) => {
        console.log(`Progress ${progress.percent}% for youtube id: ${filteredParts[i].youtube_id}`);
        event.sender.send('ffmpeg:download-progress', {
          progress: (progress.percent * (duration /
            (filteredParts[i].end_seconds - filteredParts[i].start_seconds))), part: filteredParts[i]
        });
      })
      .save(`${PARTS_DIR}/${filteredParts[i].id}.mp3`);
  }
}

async function merge(event: IpcMainInvokeEvent, playlist_parts: any) {
  console.log("merge!", playlist_parts)
  let duration = 0
  let firstDuration = playlist_parts[0].part.end_seconds - playlist_parts[0].part.start_seconds
  const merged = ffmpeg()
  merged
    .on('codecData', function (data: any) {
      const durationSplit = data.duration.split(':')
      firstDuration += (parseInt(durationSplit[1]) * 60) + parseInt(durationSplit[2])
    })
    .on('start', function () {
      console.log(`Started for merge`)
      event.sender.send(EVENT_CHANNEL.FFMPEG.MERGE.START)
    })
    .on('end', function () {
      console.log(`Finished for merge`)
      event.sender.send(EVENT_CHANNEL.FFMPEG.MERGE.END)
    })
    .on('progress', (progress: any) => {
      if (firstDuration !== 0 && duration !== 0) {
        console.log(`Progress ${progress.percent / ((duration / firstDuration) * 2)}% for merge`)
        event.sender.send(EVENT_CHANNEL.FFMPEG.MERGE.PROGRESS, progress.percent / ((duration / firstDuration) * 2))
      }
    })
  for (const playlist_part of playlist_parts) {
    duration += playlist_part.part.end_seconds - playlist_part.part.start_seconds
    console.log(`${PARTS_DIR}/${playlist_part.part.id}.mp3`)
    merged.input(`${PARTS_DIR}/${playlist_part.part.id}.mp3`)
  }
  merged.mergeToFile("./tmp/merged.mp3")
}

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { ipcMain } = require("electron");
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')
const fsProm = require('fs').promises;

// app/index.js
const path = require('path');
const { app, BrowserWindow } = require('electron');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const isDev = process.env.IS_DEV === 'true';

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  // Open the DevTools.
  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  } else {
    // mainWindow.removeMenu();
    mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  ipcMain.handle('youtube-dl', downloadYoutubeVideo)

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

const partsStatic = [{ id: 1, youtube_id: "nZmcfuvYIvU", start_seconds: 30, end_seconds: 95 }, { id: 2, youtube_id: "4n1BiYoDccc", start_seconds: 35, end_seconds: 85 }]

async function writeBatchFile(dir, parts) {
  return fsProm.writeFile(`${dir}/batch.txt`, parts.flatMap(part => part.youtube_id).join('\n'))
}

async function downloadYoutubeVideo(event, playlist_parts) {
  try {
    let queue = []
    const parts = playlist_parts.flatMap(playlist_part => playlist_part.part)

    const dir = './tmp'
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const partsDir = `${dir}/parts`
    if (!fs.existsSync(partsDir)) {
      fs.mkdirSync(partsDir);
    }

    const mp3Ids = (await fsProm.readdir(partsDir)).flatMap(mp3 => parseInt(path.parse(mp3).name))
    const filteredParts = parts.filter((value, index, self) =>
      (index === self.findIndex((t) => (t.id === value.id)))
    ).filter((part) => mp3Ids.indexOf(part.id) === -1)

    console.log(filteredParts)

    if (filteredParts.length === 0) {
      merge(partsDir, playlist_parts)
    } else {
      await writeBatchFile('./tmp', filteredParts)

      const stdout = await exec(path.join(__dirname, "lib", "mac", "python/bin/python3") + " " + path.join(__dirname, "lib", "mac", "youtube-dl") + ` --get-duration -g --batch-file=${dir}/batch.txt`);
      const stdoutArray = stdout.stdout.split("\n")
      console.log(stdout)
      for (let i = 0; i < filteredParts.length; i++) {
        const durationString = stdoutArray[i * 3 + 2]
        const durationParts = durationString.split(':')
        const duration = parseInt(durationParts[0]) * 60 + parseInt(durationParts[1])

        ffmpeg()
          .input(stdoutArray[i * 3 + 1])
          .setStartTime(filteredParts[i].start_seconds)
          .setDuration(filteredParts[i].end_seconds - filteredParts[i].start_seconds)
          .on('start', function (commandLine) {
            console.log(`Started for youtube id: ${filteredParts[i].youtube_id}`)
            event.sender.send('ffmpeg:download-start', {
              part: filteredParts[i], duration
            })
            queue.push(filteredParts[i].id)
          })
          .on('end', function () {
            console.log(`Finished for youtube id: ${filteredParts[i].youtube_id}`)
            event.sender.send('ffmpeg:download-end', filteredParts[i])
            queue.splice(queue.indexOf(filteredParts[i].id), 1)
            if (queue.length === 0) {
              merge(partsDir, playlist_parts)
            }
          })
          .on('progress', (progress) => {
            console.log(`Progress ${progress.percent}% for youtube id: ${filteredParts[i].youtube_id}`)
            event.sender.send('ffmpeg:download-progress', { progress: progress.percent, part: filteredParts[i] })
          })
          .save(`${partsDir}/${filteredParts[i].id}.mp3`);
      }
    }

    return;
  } catch (err) {
    console.error(err)
  }
}

async function merge(partsDir, playlist_parts) {
  console.log("merge!", playlist_parts)
  const merged = ffmpeg()
  merged.on('start', function (commandLine) {
    console.log(`Started for merge`)
  })
    .on('end', function () {
      console.log(`Finished for merge`)
    })
    .on('progress', (progress) => {
      console.log(`Progress ${progress.percent}% for merge`)
    })
  for (const playlist_part of playlist_parts) {
    console.log(`${partsDir}/${playlist_part.part.id}.mp3`)
    merged.input(`${partsDir}/${playlist_part.part.id}.mp3`)
  }
  merged.mergeToFile("./tmp/merged.mp3", './tmp')
}
import util from 'util';
import { exec as execCallback } from 'child_process';
const exec = util.promisify(execCallback)
import ffmpeg from 'fluent-ffmpeg';
import { promises as fsProm } from 'fs';

// app/index.js
import path from 'path';
import { BrowserWindow, IpcMainInvokeEvent } from 'electron';
import { EVENT_CHANNEL } from './eventChannel';
import { merge } from './merge';
import { PARTS_DIR, TMP_DIR } from './main';

export let queue: any[] = []

export async function downloadParts(filteredParts: any, event: IpcMainInvokeEvent, playlist_parts: any) {
  await writeBatchFile(filteredParts);

  const stdout = await exec(path.join(__dirname, "lib", "mac", "python/bin/python3") + " " + path.join(__dirname, "lib", "mac", "youtube-dl") + ` --get-duration -g --batch-file=${TMP_DIR}/batch.txt`);
  const stdoutArray = stdout.stdout.split("\n");
  console.log(stdout);
  for (let i = 0; i < filteredParts.length; i++) {
    const durationString = stdoutArray[i * 3 + 2];
    const durationParts = durationString.split(':');
    const duration = parseInt(durationParts[0]) * 60 + parseInt(durationParts[1]);

    downloadPart(stdoutArray[i * 3 + 1], filteredParts[i], duration, event, playlist_parts)
  }
}

function downloadPart(inputStream: string, part: any, duration: number, event: IpcMainInvokeEvent, playlist_parts: any) {
  ffmpeg()
    .input(inputStream)
    .setStartTime(part.start_seconds)
    .setDuration(part.end_seconds - part.start_seconds)
    .on('start', function () {
      console.log(`Started for youtube id: ${part.youtube_id}`);
      event.sender.send(EVENT_CHANNEL.FFMPEG.DOWNLOAD.START, part);
      queue.push(part.id);
    })
    .on('error', function (err: any) {
      console.log(`Error for youtube id: ${part.youtube_id} with message: ${err.message}`);
      event.sender.send(EVENT_CHANNEL.FFMPEG.DOWNLOAD.ERROR, { error: err, part: part });
    })
    .on('end', function () {
      console.log(`Finished for youtube id: ${part.youtube_id}`);
      event.sender.send(EVENT_CHANNEL.FFMPEG.DOWNLOAD.END, part);
      queue.splice(queue.indexOf(part.id), 1);
      if (queue.length === 0) {
        merge(event, playlist_parts);
      }
    })
    .on('progress', (progress: any) => {
      console.log(`Progress ${progress.percent}% for youtube id: ${part.youtube_id}`);
      event.sender.send(EVENT_CHANNEL.FFMPEG.DOWNLOAD.PROGRESS, {
        progress: (progress.percent * (duration /
          (part.end_seconds - part.start_seconds))), part: part
      });
    })
    .save(`${PARTS_DIR}/${part.id}.mp3`);
}

async function writeBatchFile(parts: any) {
  return fsProm.writeFile(`${TMP_DIR}/batch.txt`, parts.flatMap((part: any) => part.youtube_id).join('\n'))
}
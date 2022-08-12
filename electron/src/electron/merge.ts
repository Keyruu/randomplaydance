import ffmpeg from 'fluent-ffmpeg';

import { IpcMainInvokeEvent } from 'electron';
import { EVENT_CHANNEL } from './eventChannel';
import { PARTS_DIR } from './main';

export async function merge(event: IpcMainInvokeEvent, playlist_parts: any) {
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

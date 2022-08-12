// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'
import { EVENT_CHANNEL } from './eventChannel'

contextBridge.exposeInMainWorld(
  'electron',
  {
    main: {
      start: (playlist: any) => ipcRenderer.invoke(EVENT_CHANNEL.MAIN.START, playlist)
    },
    ffmpeg: {
      download: {
        onStart: (fn: (part: any) => void) => on(EVENT_CHANNEL.FFMPEG.DOWNLOAD.START, fn),
        onEnd: (fn: (part: any) => void) => on(EVENT_CHANNEL.FFMPEG.DOWNLOAD.END, fn),
        onProgress: (fn: (progressPart: any) => void) => on(EVENT_CHANNEL.FFMPEG.DOWNLOAD.PROGRESS, fn),
        onError: (fn: (progressPart: any) => void) => on(EVENT_CHANNEL.FFMPEG.DOWNLOAD.ERROR, fn),
        retry: (part: any) => ipcRenderer.send(EVENT_CHANNEL.FFMPEG.DOWNLOAD.RETRY, part)
      },
      merge: {
        onStart: (fn: () => void) => on(EVENT_CHANNEL.FFMPEG.MERGE.START, fn),
        onEnd: (fn: () => void) => on(EVENT_CHANNEL.FFMPEG.MERGE.END, fn),
        onProgress: (fn: (progress: number) => void) => on(EVENT_CHANNEL.FFMPEG.MERGE.PROGRESS, fn)
      }
    },
    showMergedFile: () => ipcRenderer.send(EVENT_CHANNEL.SHOW_MERGED_FILE)
  }
)

function on(channel: string, fn: (object: any) => void) {
  ipcRenderer.on(channel, (_: IpcRendererEvent, part: any) => fn(part))
}

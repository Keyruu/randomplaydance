export const EVENT_CHANNEL = {
  MAIN: {
    START: "main:start"
  },
  FFMPEG: {
    DOWNLOAD: {
      START: "ffmpeg:download-start",
      END: "ffmpeg:download-end",
      PROGRESS: "ffmpeg:download-progress"
    },
    MERGE: {
      START: "ffmpeg:merge-start",
      END: "ffmpeg:merge-end",
      PROGRESS: "ffmpeg:merge-progress"
    }
  },
  SHOW_MERGED_FILE: "show-merged-file"
}

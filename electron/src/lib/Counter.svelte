<script lang="ts">
  const { ipcRenderer } = require("electron");

  let parts: any[] = [];

  ipcRenderer.on("ffmpeg:download-start", (_, object) => {
    console.log(object.duration);
    parts = [
      ...parts,
      {
        part: object.part,
        progress: 0,
        finished: false,
        duration: object.duration,
      },
    ];
  });

  ipcRenderer.on("ffmpeg:download-end", (_, part) => {
    let index = parts.findIndex(
      (existingPart) => part.id === existingPart.part.id
    );
    parts[index].finished = true;
  });

  ipcRenderer.on("ffmpeg:download-progress", (_, object) => {
    let index = parts.findIndex(
      (existingPart) => object.part.id === existingPart.part.id
    );
    parts[index].progress = object.progress;
  });

  let text: string = "";
  let loading: boolean = false;

  async function invokeDownload() {
    console.log("click");
    const playlist = JSON.parse(text);
    try {
      loading = true;
      await ipcRenderer.invoke("youtube-dl", playlist.playlist_parts);
      loading = false;
    } catch (err) {
      console.error(err);
    }
  }
</script>

<div class="flex justify-center items-center flex-wrap">
  <textarea
    bind:value={text}
    class="textarea textarea-bordered w-11/12 h-3/6 m-4"
    placeholder="Bio"
  />
  <button
    class="btn btn-primary m-4"
    on:click={async () => {
      console.log(JSON.parse(text));
    }}>parse</button
  >
  <button class="btn btn-primary m-4" on:click={invokeDownload}>
    start download
  </button>
  {#if loading}
    <progress class="progress w-56 h-3" />
  {/if}
  {#each parts as part}
    <button class="btn btn-primary btn-sm m-4">
      Download: {part.part.id} Youtube-Id: {part.part.youtube_id}
    </button>
    <progress
      class="progress progress-primary h-6 w-56 m-4"
      class:progress-success={part.finished}
      value={part.finished
        ? 100
        : Math.floor(
            part.progress *
              (part.duration /
                (part.part.end_seconds - part.part.start_seconds))
          )}
      max="100"
    />
  {/each}
</div>

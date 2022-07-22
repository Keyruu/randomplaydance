<script lang="ts">
  import Download from "./lib/Download.svelte";
  import Input from "./lib/Input.svelte";
  import Merge from "./lib/Merge.svelte";

  let parts: any[] = [];
  let text: string = "";
  let loading = false;
  let mergeStarted = false;
  let mergeFinished = false;
  let mergeProgress = 0;

  downloadListener();
  mergeListener();

  function mergeListener() {
    window.electron.ffmpeg.merge.onStart(() => {
      mergeStarted = true;
    });

    window.electron.ffmpeg.merge.onProgress((progress: number) => {
      mergeProgress = progress;
    });

    window.electron.ffmpeg.merge.onEnd(() => {
      mergeFinished = true;
    });
  }

  function downloadListener() {
    window.electron.ffmpeg.download.onStart((object) => {
      console.log(object);
      parts = [
        ...parts,
        {
          part: object,
          progress: 0,
          finished: false,
        },
      ];
    });

    window.electron.ffmpeg.download.onEnd((part: any) => {
      let index = parts.findIndex(
        (existingPart) => part.id === existingPart.part.id
      );
      parts[index].finished = true;
      setTimeout(() => {
        index = parts.findIndex(
          (existingPart) => part.id === existingPart.part.id
        );
        parts.splice(index, 1);
      }, 3000);
    });

    window.electron.ffmpeg.download.onProgress((object) => {
      let index = parts.findIndex(
        (existingPart) => object.part.id === existingPart.part.id
      );
      parts[index].progress = object.progress;
    });
  }

  async function invokeDownload() {
    console.log("click");
    const playlist = JSON.parse(text);
    try {
      loading = true;
      await window.electron.main.start(playlist.playlist_parts);
      loading = false;
    } catch (err) {
      console.error(err);
    }
  }
</script>

<main>
  <div class="card">
    <Input bind:text />
    <button class="btn btn-primary m-4" on:click={invokeDownload}>
      start download
    </button>

    {#if mergeStarted}
      <Merge
        finished={mergeFinished}
        progress={mergeProgress}
        playlist={JSON.parse(text)}
      />
      {#if mergeFinished}
        <button
          class="btn btn-success m-4"
          on:click={() => window.electron.showMergedFile()}>Open File!</button
        >
      {/if}
    {:else}
      <Download {loading} {parts} />
    {/if}
  </div>
</main>

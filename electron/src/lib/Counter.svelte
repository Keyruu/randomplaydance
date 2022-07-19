<script lang="ts">
  const { ipcRenderer } = require("electron");

  let count: string = "";
</script>

<button
  on:click={async () => {
    console.log("click");
    try {
      count = (await ipcRenderer.invoke("youtube-dl", "nZmcfuvYIvU")).stdout;
      console.log(count);
    } catch (err) {
      console.error(err);
    }
  }}
>
  youtube-dl version is {count}
</button>

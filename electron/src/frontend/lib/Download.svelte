<script lang="ts">
  export let loading: boolean;
  export let parts: any[];
</script>

<div class="flex justify-center items-center flex-wrap">
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
      value={part.finished ? 100 : Math.floor(part.progress)}
      max="100"
    />
  {/each}
</div>

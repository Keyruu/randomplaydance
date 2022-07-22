<script lang="ts">
  export let finished: boolean;
  export let progress: number;
  export let playlist: any;
</script>

<div class="flex justify-center items-center flex-wrap">
  <button class="btn btn-primary btn-sm m-4">
    Merge: {playlist.name}
  </button>
  <progress
    class="progress progress-primary h-6 w-56 m-4"
    class:progress-success={finished}
    value={finished ? 100 : progress}
    max="100"
  />
</div>

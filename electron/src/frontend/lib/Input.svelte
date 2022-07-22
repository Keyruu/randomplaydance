<script lang="ts">
  export let text: string;
</script>

<div>
  <textarea
    bind:value={text}
    class="textarea textarea-bordered w-11/12 min-h-[12rem] m-4 leading-tight"
    placeholder="Paste playlist object..."
  />
</div>

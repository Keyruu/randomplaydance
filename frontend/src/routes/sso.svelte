<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		parent.postMessage(location.href, location.origin);
	});
</script>

<style>
</style>

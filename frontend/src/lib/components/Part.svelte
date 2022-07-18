<script lang="ts">
	import { getMinuteDisplay } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let track: { name: string; artist?: { name: string } | null };
	export let youtubeId: string;
	export let partId: number = -1;
	export let range: { startSeconds: number; endSeconds: number } = {
		startSeconds: -1,
		endSeconds: -1
	};
</script>

<li
	class="
    group
    flex 
    flex-row 
    items-center
    w-full
    m-2
    odd:bg-primary
    even:bg-neutral/90
    rounded-xl
    shadow-2xl 
    odd:hover:bg-primary-focus
    even:hover:bg-neutral-focus/90
    hover:cursor-pointer
    odd:text-primary-content
    even:text-neutral-content
  "
	on:click={() => dispatch('select', {})}
>
	<img
		class="w-28 rounded-xl group-hover:brightness-75"
		src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
		alt="thumbnail"
	/>
	<div class="flex flex-row justify-center w-full">
		<div class="m-4">{track.name} - {track.artist?.name}</div>
		{#if range.endSeconds !== -1 || range.startSeconds !== -1}
			<div class="m-4">
				{getMinuteDisplay(range.startSeconds)} - {getMinuteDisplay(range.endSeconds)}
			</div>
		{/if}
	</div>
</li>

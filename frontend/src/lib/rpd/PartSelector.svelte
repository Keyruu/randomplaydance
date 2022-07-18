<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import { getMinuteDisplay } from '$lib/utils';
	import { onMount } from 'svelte';

	import YouTubePlayer from 'youtube-player';

	let player: any;
	let startSeconds = 0;
	let endSeconds = 0;

	onMount(() => {
		player = YouTubePlayer('ytplayer', { playerVars: { autoplay: 0 } });
		player.cueVideoById(videoId);
	});

	async function setStartTime() {
		try {
			startSeconds = Math.round(await player.getCurrentTime());
		} catch (err) {
			console.error(err);
		}
	}

	async function setEndTime() {
		try {
			const currentTime = Math.round(await player.getCurrentTime());
			if (currentTime > startSeconds) {
				endSeconds = currentTime;
				await player.pauseVideo();
			}
		} catch (err) {
			console.error(err);
		}
	}

	export let modalId: string;

	export let videoId: string;
	export let modalOpen: boolean;

	$: {
		if (player && !modalOpen) {
			player.pauseVideo();
		}
	}
</script>

<div class="flex justify-center items-center flex-wrap">
	<div id="ytplayer" class="m-4" />
	<div class="flex flex-row items-center">
		<button class="btn btn-primary m-2" on:click={setStartTime}>Set Start</button>
		<p class="">{getMinuteDisplay(startSeconds)}</p>
		&nbsp;-&nbsp;
		<p>{getMinuteDisplay(endSeconds)}</p>
		<button class="btn btn-primary m-2" on:click={setEndTime}>Set End</button>
	</div>
	<div class="absolute right-0 bottom-0 m-4">
		<label for={modalId} class="btn btn-info">Submit</label>
	</div>
</div>

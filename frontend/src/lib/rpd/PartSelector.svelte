<script lang="ts">
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

	export let videoId: string;
	export let modalOpen: boolean;

	$: {
		if (player && !modalOpen) {
			player.pauseVideo();
		}
	}
</script>

<div id="ytplayer" />
<button class="btn" on:click={setStartTime}>Set Start Time</button>
<p>{startSeconds}</p>
<button class="btn" on:click={setEndTime}>Set End Time</button>
<p>{endSeconds}</p>

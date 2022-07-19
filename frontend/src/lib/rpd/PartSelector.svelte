<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import { AddPartToPlaylist } from '$lib/graphql/AddPart';
	import { CreatePart } from '$lib/graphql/CreatePart';
	import type {
		AddPartToPlaylistMutation,
		AddPartToPlaylistMutationVariables,
		CreatePartMutation,
		CreatePartMutationVariables
	} from '$lib/graphql/generated/graphql';
	import { getMinuteDisplay } from '$lib/utils';
	import { createEventDispatcher, onMount } from 'svelte';
	import { mutation } from 'svelte-apollo';

	import YouTubePlayer from 'youtube-player';

	let player: any;
	const dispatch = createEventDispatcher();

	const createPart = mutation<CreatePartMutation, CreatePartMutationVariables>(CreatePart);
	const addPartToPlaylist = mutation<AddPartToPlaylistMutation, AddPartToPlaylistMutationVariables>(
		AddPartToPlaylist
	);

	onMount(() => {
		player = YouTubePlayer('ytplayer', { playerVars: { autoplay: 0 } });
		if (viewOnly) {
			player.cueVideoById({ videoId, startSeconds, endSeconds });
		} else {
			player.cueVideoById(videoId);
		}
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

	async function add() {
		try {
			if (!viewOnly) {
				const part = await createPart({
					variables: { end_seconds: endSeconds, start_seconds: startSeconds, youtube_id: videoId }
				});
				partId = part.data?.insert_rpd_part?.id || -1;
			}
			await addPartToPlaylist({
				variables: { playlist_id: playlistId, part_id: partId, position }
			});
			dispatch('add', {});
		} catch (err) {
			console.error(err);
		}
	}

	export let modalId: string;
	export let videoId: string;
	export let modalOpen: boolean;
	export let playlistId: number;
	export let position: number;
	export let viewOnly = false;
	export let startSeconds = -1;
	export let endSeconds = -1;
	export let partId = -1;

	$: {
		if (player && !modalOpen) {
			player.pauseVideo();
		}
	}
</script>

<div class="flex justify-center items-center flex-wrap">
	<div id="ytplayer" class="m-4" />
	<div class="flex flex-row items-center">
		<button class="btn btn-primary m-2" class:btn-disabled={viewOnly} on:click={setStartTime}
			>Set Start</button
		>
		<p class="">
			{#if startSeconds === -1}
				{getMinuteDisplay(0)}
			{:else}
				{getMinuteDisplay(startSeconds)}
			{/if}
		</p>
		&nbsp;-&nbsp;
		<p>
			{#if endSeconds === -1}
				{getMinuteDisplay(0)}
			{:else}
				{getMinuteDisplay(endSeconds)}
			{/if}
		</p>
		<button class="btn btn-primary m-2" class:btn-disabled={viewOnly} on:click={setEndTime}
			>Set End</button
		>
	</div>
	<div class="absolute right-0 bottom-0 m-4">
		<label for={modalId} class="btn btn-info" on:click={add}>Add</label>
	</div>
</div>

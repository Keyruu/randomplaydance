<script lang="ts">
	import { page } from '$app/stores';
	import PartSelector from '$lib/rpd/PartSelector.svelte';
	import { gql } from '@apollo/client/core';
	import { query } from 'svelte-apollo';
	import dayjs from 'dayjs';
	import FaPlus from 'svelte-icons/fa/FaPlus.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import { flip } from 'svelte/animate';
	import type {
		PlaylistWithPartsQuery,
		PlaylistWithPartsQueryVariables,
		Rpd_Playlists
	} from '$lib/graphql/generated/graphql';
	import { PlaylistWithParts } from '$lib/graphql/PlaylistsWithParts';
	import PartSearch from '$lib/rpd/PartSearch.svelte';
	import Part from '$lib/components/Part.svelte';
	import { defaultFieldResolver } from 'graphql';

	const playlistWithParts = query<PlaylistWithPartsQuery, PlaylistWithPartsQueryVariables>(
		PlaylistWithParts,
		{
			variables: { id: parseInt($page.params.id) }
		}
	);

	let videoId = '';
	let partId = -1;

	let modal: boolean;
	let viewOnly = false;
	let startSeconds = -1;
	let endSeconds = -1;

	let copiedPlaylist: Rpd_Playlists;

	const partSelectorModalId = 'partSelectorModal';

	playlistWithParts.subscribe((p) => {
		if (p.data) {
			copiedPlaylist = JSON.parse(JSON.stringify(p.data?.rpd_playlist));
		}
	});

	let hovering = -1;

	const drop = (
		event: DragEvent & {
			currentTarget: EventTarget & HTMLLIElement;
		},
		target: number
	) => {
		console.log(event, target);
		event.dataTransfer!.dropEffect = 'move';
		const start = parseInt(event.dataTransfer!.getData('text/plain'));
		const newParts = copiedPlaylist.playlist_parts;

		if (start < target) {
			newParts.splice(target + 1, 0, newParts[start]);

			newParts.splice(start, 1);
		} else {
			newParts.splice(target, 0, newParts[start]);
			newParts.splice(start + 1, 1);

			// newParts[start].position = start;
			// newParts[target].position = target;
		}

		copiedPlaylist.playlist_parts = newParts;
		hovering = -1;
	};

	const dragstart = (event: DragEvent, i: number) => {
		console.log(event, i);
		event.dataTransfer!.effectAllowed = 'move';
		event.dataTransfer!.dropEffect = 'move';
		const start = i;
		event.dataTransfer!.setData('text/plain', start.toString());
	};

	async function refetch() {
		await playlistWithParts.refetch();
		copiedPlaylist = JSON.parse(JSON.stringify($playlistWithParts.data?.rpd_playlist));
	}
</script>

<div class="flex justify-center items-center">
	{#if $playlistWithParts.loading}
		<li>Loading...</li>
	{:else if $playlistWithParts.error}
		<li>ERROR: {$playlistWithParts.error.message}</li>
	{:else}
		<div class="w-full flex justify-center items-center flex-wrap">
			<div class="flex flex-row items-center w-full justify-center">
				<h1 class="flex flex-row text-xl m-4">
					Playlist:&nbsp;
					<p class="font-bold">{$playlistWithParts.data?.rpd_playlist?.name}</p>
					&nbsp; | Created by:&nbsp;
					<p class="font-bold">{$playlistWithParts.data?.rpd_playlist?.created_by.username}</p>
					&nbsp; | Created at:&nbsp;
					<p class="font-bold">
						{dayjs($playlistWithParts.data?.rpd_playlist?.created_at).toString()}
					</p>
				</h1>
				<!-- The button to open modal -->
				<label on:click={() => (videoId = '')} for={partSelectorModalId} class="btn modal-button"
					><div class="w-4 h-4"><FaPlus /></div>
					&nbsp; Add Part</label
				>
				<button
					class="btn btn-primary m-4"
					on:click={() =>
						navigator.clipboard.writeText(JSON.stringify($playlistWithParts.data?.rpd_playlist))}
					>Copy Playlist</button
				>

				<!-- Put this part before </body> tag -->
				<input bind:checked={modal} type="checkbox" id={partSelectorModalId} class="modal-toggle" />
				<Modal modalId={partSelectorModalId}>
					<h3 class="text-lg font-bold">
						Add Part to Playlist "{$playlistWithParts.data?.rpd_playlist?.name}"!
					</h3>
					{#if videoId !== ''}
						{#if viewOnly}
							<PartSelector
								{viewOnly}
								playlistId={$playlistWithParts.data?.rpd_playlist?.id || -1}
								{partId}
								position={$playlistWithParts.data?.rpd_playlist?.playlist_parts.length || -1}
								modalId={partSelectorModalId}
								modalOpen={modal}
								{startSeconds}
								{endSeconds}
								{videoId}
								on:add={refetch}
							/>
						{:else}
							<PartSelector
								playlistId={$playlistWithParts.data?.rpd_playlist?.id || -1}
								position={$playlistWithParts.data?.rpd_playlist?.playlist_parts.length || -1}
								modalId={partSelectorModalId}
								modalOpen={modal}
								{videoId}
								on:add={refetch}
							/>
						{/if}
					{:else}
						<PartSearch
							on:selectNew={(event) =>
								setTimeout(() => {
									viewOnly = false;
									videoId = event.detail.vlink;
								}, 10)}
							on:selectPart={(event) =>
								setTimeout(() => {
									viewOnly = true;
									startSeconds = event.detail.start_seconds;
									endSeconds = event.detail.end_seconds;
									partId = event.detail.id;
									videoId = event.detail.youtube_id;
								}, 10)}
						/>
					{/if}
				</Modal>
			</div>
			<div class="w-6/12 bg-neutral-focus rounded-lg shadow-lg m-4">
				<ol>
					{#each copiedPlaylist.playlist_parts || [] as playlist_part, i (playlist_part.id)}
						<li
							class="
								flex
								flex-row
								items-center
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
							animate:flip
							draggable={true}
							on:dragstart={(event) => dragstart(event, i)}
							on:drop|preventDefault={(event) => drop(event, i)}
							ondragover="return false"
							on:dragenter={() => (hovering = i)}
							class:bg-success={hovering === i}
						>
							<p class="my-1 mx-4 w-1/12">{playlist_part.position}</p>
							<p class="">
								{playlist_part.part.track[0].name}&nbsp;-&nbsp;
								{playlist_part.part.track[0].artist?.name}
							</p>
						</li>
						<!--
							<Part
							range={{
								startSeconds: playlist_part.part.start_seconds,
								endSeconds: playlist_part.part.end_seconds
							}}
							track={playlist_part.part.track[0]}
							youtubeId={playlist_part.part.youtube_id}
						/>
						-->
					{/each}
				</ol>
			</div>
		</div>
	{/if}
</div>

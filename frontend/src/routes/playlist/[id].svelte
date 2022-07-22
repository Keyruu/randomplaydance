<script lang="ts">
	import { page } from '$app/stores';
	import PartSelector from '$lib/rpd/PartSelector.svelte';
	import { gql } from '@apollo/client/core';
	import { query } from 'svelte-apollo';
	import dayjs from 'dayjs';
	import FaPlus from 'svelte-icons/fa/FaPlus.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import type {
		PlaylistWithPartsQuery,
		PlaylistWithPartsQueryVariables
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

	const partSelectorModalId = 'partSelectorModal';

	function refetch() {
		playlistWithParts.refetch();
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
			<div class="w-6/12">
				{#each $playlistWithParts.data?.rpd_playlist?.playlist_parts || [] as playlist_part, i}
					<Part
						range={{
							startSeconds: playlist_part.part.start_seconds,
							endSeconds: playlist_part.part.end_seconds
						}}
						track={playlist_part.part.track[0]}
						youtubeId={playlist_part.part.youtube_id}
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>

<script lang="ts">
	import { gql } from '@apollo/client/core';
	import { query } from 'svelte-apollo';
	import dayjs from 'dayjs';
	import PlaylistEntry from './PlaylistEntry.svelte';

	const PLAYLISTS = gql`
		query Playlists {
			rpd_playlists {
				id
				created_at
				name
				public
				updated_at
				created_by {
					id
					username
				}
			}
		}
	`;

	const playlists = query<any, any>(PLAYLISTS);
</script>

<section class="flex-wrap ">
	{#if $playlists.loading}
		<li>Loading...</li>
	{:else if $playlists.error}
		<li>ERROR: {$playlists.error.message}</li>
	{:else}
		<ul class="flex justify-center flex-wrap items-center">
			<li class="flex w-2/3 justify-center flex-nowrap">
				<div class="m-4 w-1/3">Name:</div>
				<div class="m-4 w-1/3">Created by:</div>
				<div class="m-4 w-1/3">Created at:</div>
			</li>
			{#each $playlists.data.rpd_playlists as playlist, i}
				<PlaylistEntry {playlist} index={i} />
			{/each}
		</ul>
	{/if}
</section>

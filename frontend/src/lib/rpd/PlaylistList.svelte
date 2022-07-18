<script lang="ts">
	import type { PlaylistsQuery } from '$lib/graphql/generated/graphql';
	import { Playlists } from '$lib/graphql/Playlists';
	import { query } from 'svelte-apollo';
	import PlaylistEntry from './PlaylistEntry.svelte';

	const playlists = query<PlaylistsQuery, any>(Playlists);
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
			{#each $playlists.data?.rpd_playlists || [] as playlist, i}
				<PlaylistEntry {playlist} index={i} />
			{/each}
		</ul>
	{/if}
</section>

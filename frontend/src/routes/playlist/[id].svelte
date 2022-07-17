<script lang="ts">
	import { page } from '$app/stores';
	import PartSelector from '$lib/rpd/PartSelector.svelte';
	import { gql } from '@apollo/client/core';
	import { onMount } from 'svelte';
	import { query } from 'svelte-apollo';

	const GET_PLAYLIST = gql`
		query GetPlaylistWithParts($id: Int!) {
			rpd_playlist(id: $id) {
				id
				created_at
				name
				public
				updated_at
				playlist_parts {
					part {
						id
						start_seconds
						end_seconds
						youtube_id
						created_at
						updated_at
						track {
							name
							artist {
								name
							}
						}
					}
				}
				created_by {
					id
					username
				}
			}
		}
	`;

	const playlistWithParts = query<any, any>(GET_PLAYLIST, { variables: { id: $page.params.id } });

	let partSelector: any;
	let modal: boolean;
</script>

<div class="flex justify-center items-center">
	{#if $playlistWithParts.loading}
		<li>Loading...</li>
	{:else if $playlistWithParts.error}
		<li>ERROR: {$playlistWithParts.error.message}</li>
	{:else}
		<div>
			<p>
				{$playlistWithParts.data.rpd_playlist.name}
			</p>
			<!-- The button to open modal -->
			<label for="my-modal-3" class="btn modal-button">open modal</label>

			<!-- Put this part before </body> tag -->
			<input bind:checked={modal} type="checkbox" id="my-modal-3" class="modal-toggle" />
			<label for="my-modal-3" class="modal">
				<label for="" class="modal-box max-w-5xl w-11/12">
					<label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
					<PartSelector
						modalOpen={modal}
						videoId={$playlistWithParts.data.rpd_playlist.playlist_parts[0].part.youtube_id}
					/>
				</label></label
			>
			<img
				src={`https://img.youtube.com/vi/${$playlistWithParts.data.rpd_playlist.playlist_parts[0].part.youtube_id}/hqdefault.jpg`}
				alt="thumbnail"
			/>
		</div>
	{/if}
</div>

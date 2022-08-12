<script lang="ts">
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import { query } from 'svelte-apollo';
	import type {
		DaisukiSearchQuery,
		DaisukiSearchQueryVariables,
		Kpop_Tracks_Bool_Exp,
		PartSearchQuery,
		PartSearchQueryVariables
	} from '$lib/graphql/generated/graphql';
	import { DaisukiSearch, PartSearch } from '$lib/graphql/PartSearch';
	import { getMinuteDisplay } from '$lib/utils';
	import Part from '$lib/components/Part.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let youtubeSearchActive = false;
	let activeSearchTab = 'parts';
	let search = '';
	let searchExp: Kpop_Tracks_Bool_Exp = { _or: [] };

	const partSearch = query<PartSearchQuery, PartSearchQueryVariables>(PartSearch, {
		variables: { search: `%${search}%` }
	});

	const daisukiSearch = query<DaisukiSearchQuery, DaisukiSearchQueryVariables>(DaisukiSearch, {
		variables: { search_exp: {} }
	});

	function orFilter(searchTerm: string): Kpop_Tracks_Bool_Exp {
		return {
			_or: [
				{ name: { _ilike: `%${searchTerm}%` } },
				{ artist: { name: { _ilike: `%${searchTerm}%` } } }
			]
		};
	}

	$: {
		if (activeSearchTab === 'parts') {
			partSearch.refetch({ search: `%${search}%` });
		} else if (activeSearchTab === 'new') {
			const orFilters: Kpop_Tracks_Bool_Exp[] = [];
			const searchTerms = search.split(' ');
			for (const searchTerm of searchTerms) {
				orFilters.push(orFilter(searchTerm));
			}
			daisukiSearch.refetch({ search_exp: { _and: orFilters } });
		} else if (activeSearchTab === 'youtube') {
			console.log('How did you get here?');
		}
	}
</script>

<div class="form-control w-full">
	<div class="input-group justify-center mt-4">
		<input
			type="text"
			placeholder="Search…"
			class="input input-bordered w-full max-w-md"
			bind:value={search}
		/>
		<button class="btn btn-square">
			<div class="w-6 h-6">
				<FaSearch />
			</div>
		</button>
	</div>
</div>
<div class="tabs flex justify-center m-4">
	<div
		class="tab tab-bordered"
		class:tab-active={activeSearchTab === 'parts'}
		on:click={() => (activeSearchTab = 'parts')}
	>
		Parts
	</div>
	<div
		class="tab tab-bordered"
		class:tab-active={activeSearchTab === 'new'}
		on:click={() => (activeSearchTab = 'new')}
	>
		New
	</div>
	{#if youtubeSearchActive}
		<div
			class="tab tab-bordered"
			class:tab-active={activeSearchTab === 'youtube'}
			on:click={() => (activeSearchTab = 'youtube')}
		>
			Youtube
		</div>
	{/if}
</div>
<div class="h-[60vh]">
	{#if $partSearch.loading}
		<li>Loading...</li>
	{:else if $partSearch.error}
		<li>ERROR: {$partSearch.error?.message}</li>
	{:else}
		<ul>
			{#if activeSearchTab === 'parts'}
				{#each $partSearch.data?.rpd_parts.filter((part) => part.track.length !== 0) || [] as part, i}
					<Part
						range={{ startSeconds: part.start_seconds, endSeconds: part.end_seconds }}
						track={part.track[0]}
						youtubeId={part.youtube_id}
						on:select={() => {
							dispatch('selectPart', part);
						}}
					/>
				{/each}
			{:else if activeSearchTab === 'new'}
				{#each $daisukiSearch.data?.kpop_tracks || [] as track, i}
					<Part
						{track}
						youtubeId={track.vlink}
						on:select={() => {
							dispatch('selectNew', track);
						}}
					/>
				{/each}
			{:else if activeSearchTab === 'youtube'}
				<div>TODO</div>
			{/if}
		</ul>
	{/if}
</div>

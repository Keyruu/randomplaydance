<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import { isAuthenticated } from '$lib/store/auth';
	import PlaylistList from '$lib/rpd/PlaylistList.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="flex justify-center items-center mb-4 flex-wrap">
		<div class="form-control w-full">
			<div class="input-group justify-center">
				<input type="text" placeholder="Search…" class="input input-bordered" />
				<button class="btn btn-square">
					<div class="w-6 h-6">
						<FaSearch />
					</div>
				</button>
			</div>
		</div>
		<div class="w-full">
			{#if $isAuthenticated}
				<PlaylistList />
			{:else}
				<div>You need to login first</div>
			{/if}
		</div>
	</div>
</section>

<style>
</style>

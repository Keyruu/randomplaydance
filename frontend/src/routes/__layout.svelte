<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import '../app.css';

	import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
	import { setContext } from '@apollo/client/link/context';
	import { setClient } from 'svelte-apollo';
	import { idToken, isAuthenticated } from '$lib/store/auth';
	import { checkSso, createKeycloak } from '$lib/auth';
	import { onMount } from 'svelte';

	onMount(() => {
		createKeycloak();
		checkSso(window.location.origin);
	});

	const cache = new InMemoryCache();

	const httpLink = new HttpLink({
		uri: 'http://localhost:1337/v1/graphql'
	});

	const setAuthorizationLink = setContext((_, previousContext) => ({
		headers: {
			...previousContext.headers,
			authorization: `Bearer ${localStorage.getItem('idToken')}`
		}
	}));

	const client = new ApolloClient({
		link: setAuthorizationLink.concat(httpLink),
		cache
	});
	setClient(client);
</script>

<div class="h-screen flex flex-col">
	<Header />

	<main class="mb-auto">
		<slot />
	</main>

	<footer class="footer items-center p-4 bg-neutral text-neutral-content">
		<div class="items-center grid-flow-col">
			<p>Copyright © 2022 - All right reserved</p>
		</div>
		<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<a class="w-6 h-6" target="_blank" href="https://discord.gg/9TupBNzUGx"><FaDiscord /> </a>
		</div>
	</footer>
</div>

<style>
</style>

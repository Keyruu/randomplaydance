<script lang="ts">
	import { login } from '$lib/auth';
	import { isAuthenticated, user } from '$lib/store/auth';
</script>

<header>
	<div class="navbar bg-base-100 container mx-auto flex p-5 flex-col md:flex-row items-center">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</label>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a>Item 1</a></li>
					<li tabindex="0">
						<a class="justify-between">
							Parent
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
							>
						</a>
						<ul class="p-2">
							<li><a>Submenu 1</a></li>
							<li><a>Submenu 2</a></li>
						</ul>
					</li>
					<li><a>Item 3</a></li>
				</ul>
			</div>
			<a class="btn bg-neutral normal-case" href="/"
				><p
					class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary"
				>
					menuki
				</p></a
			>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal p-0">
				<li><a>Item 1</a></li>
				<li tabindex="0">
					<a>
						Parent
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</li>
				<li><a>Item 3</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			{#if !$isAuthenticated}
				<button on:click={() => login()} class="btn normal-case">Login ➔</button>
			{:else}
				<div class="avatar placeholder w-16">
					<div class="bg-neutral-content text-neutral-focus rounded-full w-24">
						<span class="text-3xl"
							>{$user.given_name?.charAt(0).toUpperCase()}{$user.family_name
								?.charAt(0)
								.toUpperCase()}</span
						>
					</div>
				</div>
			{/if}
		</div>
	</div>
</header>

<style>
</style>

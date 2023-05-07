<script>
	import { beforeUpdate, onMount } from "svelte";
	import Footer2 from "$lib/Footer2.svelte";
	import "@unocss/reset/antfu.css";
	import { browser } from "$app/environment";
	let currentRoute = "";
	beforeUpdate(() => {
		// if (browser) {
		currentRoute = window.location.pathname;
		console.log(currentRoute);
		// }
	});
	const routes = { Home: "/", Members: "/members", "Add member": "/add-member" };
</script>

<div class="min-h-screen bg-[url(/timothy-dykes-woE5Fc1HF1o-unsplash.jpg)] bg-cover">
	<header>
		<nav class="font-inknut p-2">
			{#each Object.entries(routes) as [name, link]}
				<a
					class:!decoration-amber-500={currentRoute === link}
					class="decoration-offset-6 p-4 pb-0 md:text-2xl text-yellow-500 underline decoration-transparent hover:text-yellow-400"
					href={link}>{name}</a>
			{/each}
		</nav>
	</header>

	<slot />

	<Footer2 />
</div>

<style uno:preflights uno:safelist global>
	[un-cloak] {
		display: none;
	}
</style>

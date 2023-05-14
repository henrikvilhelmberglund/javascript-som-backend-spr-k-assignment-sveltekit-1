<script>
	import "@unocss/reset/tailwind.css";
  import "@fontsource/almendra"
  import "@fontsource/inknut-antiqua"
	import { beforeUpdate } from "svelte";
	import Footer2 from "$lib/Footer2.svelte";
	import { onMount } from "svelte";

	let show = false;
	let loadingText = "Loading...";
	onMount(() => {
		show = true;
	});
	let currentRoute = "";
	beforeUpdate(() => {
		currentRoute = window.location.pathname;
		// console.log(currentRoute);
	});
	const routes = { Home: "/", Members: "/members", "Add member": "/add-member" };
</script>

{#if show}
	<div class="flex flex-col min-h-screen bg-[url(/timothy-dykes-woE5Fc1HF1o-unsplash.jpg)] bg-cover">
		<header>
			<nav class="font-inknut p-2">
				{#each Object.entries(routes) as [name, link]}
					<a
						class:!decoration-amber-500={currentRoute === link}
						class="decoration-offset-6 p-4 pb-0 text-yellow-500 underline decoration-transparent hover:text-yellow-400 md:text-2xl"
						href={link}>{name}</a>
				{/each}
			</nav>
		</header>

		<slot />

		<Footer2 />
	</div>
{:else}
	<div class="flex h-screen w-screen flex-col items-center justify-center">
		<div
			class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
			role="status">
			<span
				class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
				>Loading...</span>
		</div>
		<h1 class="text-3xl">{loadingText}</h1>
	</div>
{/if}

<style uno:preflights uno:safelist global>
	.test {
		font-family: Inknut Antiqua;
	}
	.test2 {
		font-family: Almendra;
	}
</style>

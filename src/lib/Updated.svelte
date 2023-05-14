<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	export let input;
	export let text;

	let show = false;
	onMount(() => {
		show = true;
		setTimeout(() => {
			show = false;
		}, 2000);
	});
</script>

{#if show}
	<!-- -translate-x-1/2 messes up fly transition positioning -->
	<div in:fly={{ y: -20 }} class="fixed top-0 md:left-[40%]">
		<p class="font-inknut m-4 text-yellow-500">
			{text}
			{input}!
		</p>
	</div>
{/if}

<style>
</style>

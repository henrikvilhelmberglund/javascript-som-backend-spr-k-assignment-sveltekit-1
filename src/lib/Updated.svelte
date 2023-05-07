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
	<div
		class="absolute left-[50%] top-4 w-full translate-x-[-50%] md:top-0 md:w-fit"
		in:fly={{ y: -20 }}>
		<p class=" font-inknut m-4 text-yellow-500">
			{text}
			{input}!
		</p>
	</div>
{/if}

<style>
</style>

<script>
	import Footer2 from "$lib/Footer2.svelte";
	import "@unocss/reset/antfu.css";
</script>

<header>
	<nav class="bg-slate-300 p-2">
		<a class="p-4 text-2xl text-blue-700 hover:text-blue-500" href="/">Home</a>
		<a class="p-4 text-2xl text-blue-700 hover:text-blue-500" href="/members">Members</a>
		<a class="p-4 text-2xl text-blue-700 hover:text-blue-500" href="/add-member"> Add member</a>
	</nav>
</header>

<slot />

<Footer2 />

<style uno:preflights uno:safelist global></style>

<script>
	import { page } from "$app/stores";
</script>

<h1 class="text-3xl">{$page.error.message}</h1>
<img src="https://http.cat/{$page.status}" alt="cute cat" />

<style>
</style>

<script>
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";

	export let data;
	export let form;
</script>

<form action="?/sort" method="post">
	{#each data.sortAlternatives as alternative}
		<button class="mx-2 rounded bg-blue-400 p-2 hover:bg-blue-300" name={alternative}
			>{alternative}</button>
	{/each}
</form>

<main class="[&>*]:m-4">
	{#if data.members.length}
		{#each data.members as member}
			<div class="flex flex-row gap-10">
				<a
					class="flex h-16 w-64 flex-col items-center justify-center rounded-lg text-2xl shadow-xl hover:outline hover:outline-1 hover:outline-black"
					href="/member/{member._id}">
					{member.name}
				</a>
				<div class="flex">
					<form action="?/delete" method="POST">
						<button
							name="id"
							value={member._id}
							class="rounded bg-red-500 p-4 text-2xl hover:bg-red-400">❌</button>
					</form>
				</div>
			</div>
		{/each}
	{:else}
		No members :(
	{/if}

	{#if form?.added}
		<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->
		<p>Successfully added {form.addedMember}</p>
	{/if}

	{#if form?.delete}
		<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->
		<p>Successfully deleted {form.deletedMember}</p>
	{/if}
</main>

<Footer />

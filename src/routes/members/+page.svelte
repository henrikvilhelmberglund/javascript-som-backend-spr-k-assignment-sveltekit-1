<script>
	import Updated from "$lib/Updated.svelte";

	export let data;
	export let form;
</script>

<svelte:head>
	<title>Fellowship: List of members</title>
</svelte:head>

<main class="flex-1 [&>*]:m-4">
	<!-- <form action="?/sort" method="post"> -->
	<div class="flex">
		{#each data.sortAlternatives as alternative}
			<a
				class="font-inknut mx-2 rounded bg-emerald-700 p-2 hover:bg-emerald-500"
				name="sortType"
				value={alternative}
				href={`?sort=${alternative}`}>{alternative}</a>
		{/each}
	</div>
	<!-- </form> -->
	{#if data.members.length}
		{#each data.members as member}
			<div class="flex flex-row gap-10">
				<a
					class="font-inknut flex h-16 w-64 flex-col items-center justify-center rounded-lg bg-yellow-400 text-2xl shadow-xl hover:bg-yellow-300 hover:outline hover:outline-1 hover:outline-black"
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
		<p class="font-inknut text-lg text-yellow-500">There are currently no members.</p>
	{/if}

	{#if form?.added}
		<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->
		<Updated input={form.addedMember} text="Successfully added" />
		<!-- <p>Successfully added {form.addedMember}</p> -->
	{/if}

	{#if form?.delete}
		<!-- this message is ephemeral; it exists because the page was rendered in
            response to a form submission. it will vanish if the user reloads -->
		<Updated input={form.deletedMember} text="Successfully deleted" />
		<!-- <p>Successfully deleted {form.deletedMember}</p> -->
	{/if}
</main>

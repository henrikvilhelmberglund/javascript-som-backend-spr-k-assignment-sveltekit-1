<script>
	import Updated from "$lib/Updated.svelte";
	import { fly } from "svelte/transition";
	export let data;
	export let form;
	const { name, email, phone, date, character } = data.member;
</script>

<main class="flex flex-1 flex-col justify-center pb-44 md:flex-row [&>*]:m-4">
	<div
		in:fly={{ y: -100 }}
		class="flex flex-col items-start justify-between gap-4 rounded-sm bg-[url('/paper.jpg')] p-12">
		<h2 class="font-almendra text-5xl">{name ?? "unknown name"}</h2>
		<div class="font-inknut flex flex-wrap gap-4 text-xl">
			<a class="text-blue-700 w-fit" href="mailto:{email}">{email ?? "unknown email"}</a>
			<p class="">Phone: {phone ?? "unknown phone"}</p>
			<p class="">DOB: {date ?? "unknown date"}</p>
			<p class="pt-8">Character introduction:</p>
			<p class="w-96 overflow-x-auto overflow-y-hidden whitespace-normal italic">
				{character ?? "unknown character"}
			</p>
		</div>
		<div>
			<!-- empty -->
		</div>
	</div>
	<form action="?/updateMember" method="POST">
		<div class="font-inknut flex flex-col gap-4 md:w-96">
			<input
				required
				type="text"
				value={name}
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="Name"
				id="name"
				name="name" />
			<input
				required
				type="email"
				value={email}
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="Email"
				id="email"
				name="email" />
			<input
				required
				type="number"
				value={phone}
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="Phone"
				id="phone"
				name="phone" />
			<input
				required
				type="date"
				value={date}
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="Date"
				id="date"
				name="date" />
			<textarea
				required
				type="text"
				rows="5"
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="A short introduction to your character"
				id="character"
				name="character">{character}</textarea>
			<button name="id" value={data.member._id} class="rounded-lg bg-blue-500 p-4"
				>Update info</button>
		</div>
	</form>
	<form action="/members?/delete" method="POST">
		<p class="text-red-500">Delete user</p>
		<button
			name="id"
			value={data.member._id}
			id="deleteButton"
			class="rounded bg-red-500 p-4 text-2xl hover:bg-red-400">❌</button>
	</form>
</main>

{#if form?.updated}
	<!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
	<Updated input={form.updatedMember} text="Successfully updated" />
	<!-- <p>Successfully updated {form.updatedMember}</p> -->
{/if}

<style>
</style>

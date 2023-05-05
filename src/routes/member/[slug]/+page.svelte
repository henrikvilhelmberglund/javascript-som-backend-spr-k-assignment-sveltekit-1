<script>
	export let data;
	const { name, email, phone, date, character } = data.member;
	export let form;
</script>

<div class="flex flex-row justify-between">
	<form action="?/updateMember" method="POST">
		<div class="flex w-96 flex-col gap-4">
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

	<div class="flex flex-col items-start justify-center gap-4 rounded-2xl bg-amber-100 p-12">
		<h2 class="text-5xl">{name ?? "unknown name"}</h2>
		<p class="text-2xl text-blue-700">{email ?? "unknown email"}</p>
		<p class="text-2xl">{phone ?? "unknown phone"}</p>
		<p class="text-2xl">{date ?? "unknown date"}</p>
		<p class="text-2xl">{character ?? "unknown character"}</p>
	</div>
	<form action="/members?/delete" method="POST">
		<p>Delete user</p>
		<button
			name="id"
			value={data.member._id}
			id="deleteButton"
			class="rounded bg-red-500 p-4 text-2xl hover:bg-red-400">❌</button>
	</form>
</div>

{#if form?.updated}
	<!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
	<p>Successfully updated {form.updatedMember}</p>
{/if}

<style>
</style>

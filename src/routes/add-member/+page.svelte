<script>
	let debug = true;
	let name;
	let email;
	let phone;
	let date;
	let character;

	if (debug) {
		name = "Superman";
		email = "super@man.com";
		phone = 123123;
		character = "This is a text";
	}
</script>

<svelte:head>
	<title>Fellowship: Add member</title>
</svelte:head>

<main class="flex-1 [&>*]:m-4">
	<form action="members?/addMember" method="POST">
		<div class="font-inknut flex flex-col gap-4 md:w-96">
			<input
				required
				type="text"
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="Name"
				id="name"
				name="name"
				bind:value={name} />
			<input
				required
				type="email"
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="Email"
				id="email"
				bind:value={email}
				name="email" />
			<input
				required
				type="number"
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="Phone"
				id="phone"
				bind:value={phone}
				name="phone" />
			<input
				required
				type="date"
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="Registered on"
				id="date"
				bind:value={date}
				name="date" />
			<textarea
				required
				type="text"
				rows="5"
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="A short introduction of your character"
				id="character"
				bind:value={character}
				name="character" />
			<button
				class="hover:bg-white/15 rounded-lg border border-gray-200 bg-white/5 bg-clip-padding p-8 backdrop-blur-lg backdrop-filter"
				>Add member</button>
		</div>
	</form>
</main>

<style>
</style>

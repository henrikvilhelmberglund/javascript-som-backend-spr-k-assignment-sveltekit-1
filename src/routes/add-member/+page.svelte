<script>
	let debug = false;
	let name;
	let email;
	let phone;
	let date;
	let character;

	if (debug) {
		name = "Superman";
		email = "super@man.com";
		phone = 123123;
		date = "2023-05-05";
		character = "This is a text";
	}
</script>

<main class="[&>*]:m-4 flex-1">
	<form action="members?/addMember" method="POST">
		<div class="flex flex-col gap-4 md:w-96 font-inknut">
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
				placeholder="Date"
				id="date"
				bind:value={date}
				name="date" />
			<textarea
				required
				type="text"
				rows="5"
				class="outline-solid rounded p-2 outline-1 outline-black"
				placeholder="A short introduction to your character"
				id="character"
				bind:value={character}
				name="character" />
			<button class="rounded-lg bg-blue-500 p-4">Add member</button>
		</div>
	</form>
</main>

<style>
</style>

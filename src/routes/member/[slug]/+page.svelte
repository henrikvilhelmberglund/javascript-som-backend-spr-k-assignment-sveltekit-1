<script>
	export let data;
	const { name, email, phone, date, character } = data.member;
</script>

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

<style>
</style>

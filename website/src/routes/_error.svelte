<script>
	export let status;
	export let error;
</script>

<style></style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

<script>
	import Nav from '../components/Nav.svelte';

	export let segment;

	import {goto} from "@sapper/app";
	import { firestore } from "../firebase";
	import { categories } from "../stores";

	import { onMount } from "svelte";

	let categoriesFetch = fetchCategories();

	async function fetchCategories() {
		await firestore.collection("categories")
        .get()
        .then(data => {
			categories.set(data.docs.map(doc => doc.data()));
        }).catch(err => {
			console.log("Categories could not be fetched!");
			goto("unavailable");
		});

		return;
	}
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: black;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	{#await categoriesFetch}
		<p>Loading...</p>
	{:then number}
		<slot></slot>
	{/await}
</main>
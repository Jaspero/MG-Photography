<script>
	import { goto, stores } from "@sapper/app";
	import { derived } from "svelte/store";
	import { categories } from "../stores";

	let photoViewerActive = false;
	let activePhoto = "";
	
	// Object containing whole site data
	let site = null;
	let error = null;

	const refreshData = derived([stores().page, categories], ([page, category]) => {
		if (!page || !category) {
			return false;
		}

		return category.find(it => it.name.toLowerCase() === page.params.slug);
	});

	refreshData.subscribe(siteData => {
		if (siteData) {
			site = siteData;
			error = false;
		} else {
			error = true;
		}
	})
</script>

<style>
  img {
    min-width: 150px;

    width: 25vw;
  }

  /* Three image containers (use 25% for four, and 50% for two, etc) */
  .column {
    float: left;
    width: calc(50% - 10px);
    padding: 5px;
  }

  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }

  .photo:hover {
    cursor: pointer;
  }

  .photoViewerOverlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    opacity: 0.7;
    background-color: #000;

  }

  .activePhoto {
    position: fixed;
    height: 90%;
    width: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

  }
</style>

{#if site}
	<h1>{site.name}</h1>
{/if}

{#if error}
	<h1>Error 404</h1>
{/if}
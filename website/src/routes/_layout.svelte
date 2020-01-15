<script>
  export let segment;

  import Footer from '../components/Footer.svelte'
  import {firestore} from '../firebase';
  import {categories} from '../stores';
  import {onMount} from 'svelte';

  let categoriesFetch = fetchCategories();

  async function fetchCategories() {
    await firestore
      .collection('categories')
      .get()
      .then(data => {
        categories.set(data.docs.map(doc => doc.data()));
      });

    return;
  }
</script>

<style>
  header {
    position: relative;
    z-index: 2;
    text-transform: uppercase;
    display: flex;
  }
  header.home {
	  color: white;
  }
  header a {
    display: inline-block;
    padding: 1em;
  }
  header nav {
    margin-left: auto;
  }
  main {
    position: relative;
    z-index: 1;
  }
</style>

<header class="{segment === undefined ? 'home' : ''}">
  <a class="logo" href=".">Mislav Gelenčir</a>
  <nav>
    <a href="portraits">Portraits</a>
    <a href="events">Events</a>
    <a href="music">Music</a>
    <a href="real-estate">Real-estate</a>
    <a href="videos">Videos</a>
  </nav>
</header>

<main>
  {#await categoriesFetch}
    <p>Loading...</p>
  {:then number}
    <slot></slot>
  {/await}
</main>

<Footer segment={segment}/>

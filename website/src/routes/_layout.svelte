<script>
    import Nav from '../components/Nav.svelte';
    import {goto} from '@sapper/app';
    import { firestore } from '../firebase';
    import { categories } from '../stores';
    import Footer from '../components/Footer.svelte'

    export let segment;

    async function fetchCategories() {
        await firestore.collection('categories')
            .get()
            .then(data => {
                categories.set(data.docs.map(doc => doc.data()));
            })
            .catch(err => {
                console.log('Categories could not be fetched!');
                goto('unavailable');
            });
    }
</script>

<style>

    header {
        position: absolute;
        z-index: 2;
        text-transform: uppercase;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
    }
    header.home {
        color: white;
    }
    header a {
        display: inline-block;
        padding: 1em;
        font-size: 0.8em;
    }
    header nav {
        margin-left: auto;
    }
    main {
        position: relative;
        z-index: 1;
    }

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
    {#await fetchCategories()}
    {:then number}
        <slot></slot>
    {/await}
</main>

<Footer segment={segment}/>


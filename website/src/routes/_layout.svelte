<script>
    import { goto } from '@sapper/app';
    import { firestore } from '../firebase';
    import { categories } from '../stores';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte'

    export let segment;

    let categoriesFetch = fetchCategories();

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
    main {
        position: relative;
        z-index: 1;
    }
</style>

<Header segment={segment}/>

<main>
    {#await categoriesFetch}
        <p>Loading...</p>
    {:then number}
        <slot></slot>
    {/await}
</main>

{#if (segment !== 'undefined' && segment)}
    <Footer/>
{/if}


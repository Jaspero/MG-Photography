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

    .loader {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;

        background-color: black;
        color: whitesmoke;
        z-index: 99;

        opacity: 1;

        padding-top: 40vh;
        text-align: center;

        font-size: 150%;
    }
</style>

<Header segment={segment}/>

<main>
    {#await categoriesFetch}

        <div class="loader">
            <h1>Loading...</h1>
        </div>

    {:then number}
        <slot></slot>
    {/await}
</main>

{#if (segment !== 'undefined' && segment)}
    <Footer/>
{/if}


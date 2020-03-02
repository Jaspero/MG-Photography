<script>
    import { goto } from '@sapper/app';
    import { firestore } from '../firebase';
    import { categories, refresh } from '../stores';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';

    let dots = '...';

    setInterval(() => {
      if (dots.length < 3) {
        dots += '.';
      } else {
        dots = '.';
      }
    }, 800);

    export let segment;

    let categoriesFetch = fetchCategories();

    async function fetchCategories() {
        await firestore.collection('categories')
                .get()
                .then(data => {
                    const cat = data.docs.map(doc => doc.data());
                    cat.sort((a, b) => a.order < b.order ? -1 : 1);
                    categories.set(cat);
                })
                .catch(err => {
                    console.log('Categories could not be fetched!');
                    goto('unavailable');
                });
    }

    if (segment) {
        refresh.set(segment.charAt(0).toUpperCase() + segment.slice(1));
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
            <h1>Loading{dots}</h1>
        </div>
    {:then number}
        <slot></slot>
    {/await}
</main>

{#if (segment !== 'undefined' && segment)}
    <Footer/>
{/if}

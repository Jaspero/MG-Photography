<script>
    import {afterUpdate} from 'svelte';
    import {categories, refresh, loading} from '../stores';

    export let segment;

    let expanded = false;
    let page = '';
    afterUpdate(() => {
        page = window.location.pathname.slice(1).toLowerCase().replace('%20', '-');
    });

    function go(name) {
        expanded = false;
        document.body.classList.remove('overflow-hidden');
        refresh.set(name);
        loading.set(true);
    }

    function toggleMenu() {
        expanded = !expanded;
        document.body.classList.toggle('overflow-hidden');
    }


</script>

<style>
    .header {
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: calc(var(--container) + 2em);
        margin: 0 auto;
        height: 60px;
        font-family: 'Simplo', sans-serif;
    }

    .header.undefined,
    .header.contact {
        color: white;
        text-shadow: 0 0 .5em black;
    }

    .header-link {
        text-transform: uppercase;
        display: inline-block;
        padding: 1em;
    }

    .header-link.active {
        color: #00b1d2;
    }

    .header-menu {
        display: none;
        cursor: pointer;
        background: none;
        outline: none;
        border: none;
        padding: 1em;
        color: inherit;
    }

    @media (max-width: 900px) {
        .header-nav {
            position: fixed;
            z-index: 10;
            right: 0;
            top: 0;
            background: rgba(0, 0, 0, .9);
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            transition: .2s;
            visibility: hidden;
            transform: translateX(100%);
            opacity: 0;
        }

        .header-nav a {
            color: white;
            padding: 24px 16px;
            text-decoration: none;
            font-size: 17px;
            display: block;
            text-align: center;
        }

        .header-nav a:hover {
            background-color: #ddd;
            color: black;
        }

        .header-nav.active {
            visibility: visible;
            transform: translateX(0%);
            opacity: 1;
        }

        .header-menu {
            display: block;
            position: relative;
            z-index: 11;
        }

        .header-menu.active {
            color: white;
        }

        .header-link {
            display: block;
        }
    }
</style>

<header class="header {segment}">
    <a class="header-link" href="/">Mislav Gelenčir</a>
    <nav class="header-nav" id="header-nav" class:active={expanded}>
        {#each $categories as category}
            <a class="header-link" class:active={category.name.toLowerCase().replace(' ', '-') == page}
               on:click={() => go(category.name)}
               href={category.name.toLowerCase()}>{category.name.replace('-', ' ')}</a>
        {/each}
        <a class="header-link" class:active={page == 'videos'} on:click={() => go('videos')} href="videos">Videos</a>
        {#if setTimeout(() => expanded, 500)}
            <a class="header-link" class:active={page == "contact"} on:click={() => go("contact")} href="/contact">Contact</a>
        {/if}
    </nav>
    <button class="header-menu" on:click={toggleMenu} class:active={expanded}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" fill="none" stroke="currentColor"
             stroke-linecap="round" width="20">
            <line x1="1" y1="1" x2="11" y2="1"/>
            <line x1="1" y1="4" x2="11" y2="4"/>
            <line x1="5" y1="7" x2="11" y2="7"/>
        </svg>
    </button>
</header>

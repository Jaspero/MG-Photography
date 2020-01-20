<script>
  export let segment;

  import { categories } from '../stores';
</script>

<style>
  .header {
    position: absolute;
    z-index: 2;
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
</style>

<header class="header {segment}">
  <a class="header-link" href="/">Mislav Gelenčir</a>
  <nav>
    {#each $categories.reverse() as category}
      <a class="header-link" href={category.name.toLowerCase()}>{category.name}</a>
    {/each}
    <a class="header-link" href="contact">contact</a>
  </nav>
</header>

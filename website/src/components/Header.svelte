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
  .nav-desktop {
    display: block;
  }
  .nav-mobile {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .nav-desktop {display: none;}
    .nav-mobile {display: block;}
  }
</style>

<header class="header {segment}">
  <a class="header-link" href="/">Mislav Gelenčir</a>
  <nav-desktop class="nav-desktop">
    {#each $categories.reverse() as category}
      <a class="header-link" href={category.name.toLowerCase()}>{category.name.replace('-', ' ')}</a>
    {/each}
  </nav-desktop>

  <nav-mobile class="nav-mobile">
    {#each $categories.reverse() as category}
      <a class="header-link" href={category.name.toLowerCase()}>{category.name.replace('-', ' ')}</a>
    {/each}
  </nav-mobile>
</header>

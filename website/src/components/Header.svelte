<script>
  export let segment;

  import { categories } from '../stores';

  function openMenu() {
    document.getElementsByClassName("header-nav")[0].classList.add("active")
  }
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
      background: #6E6E6E;
      height: 100%;
      transition: .2s;
      visibility: hidden;
      transform: translate(100%, 50%);
      opacity: 0;
    }
    .header-nav a{
      color: white;
      padding: 24px 16px;
      text-decoration: none;
      font-size: 17px;
      display: block;
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
    }
    .header-link {
      display: block;
    }
  }
</style>

<header class="header {segment}">
  <a class="header-link" href="/">Mislav Gelenčir</a>
  <nav class="header-nav">
    {#each $categories.reverse() as category}
      <a class="header-link" href={category.name.toLowerCase()}>{category.name.replace('-', ' ')}</a>
    {/each}
  </nav>
  <button class="header-menu" onclick="openMenu()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-linecap="round" width="20">
      <line x1="1" y1="1" x2="11" y2="1"/>
      <line x1="1" y1="4" x2="11" y2="4"/>
      <line x1="5" y1="7" x2="11" y2="7"/>
    </svg>
  </button>
</header>

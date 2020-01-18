<script>
  export let segment;

  import { categories } from '../stores';
</script>

<style>

  @font-face {
    font-family: "Particle";
    src: url("../../fonts/Particle-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: "Simplo";
    src: url("../../fonts/Simplo-Light.otf") format("opentype");
    font-weight: normal;
  }

  @font-face {
    font-family: "Simplo";
    src: url("../../fonts/Simplo-Medium.otf") format("opentype");
    font-weight: bold;
  }

  header {
    display: flex;
    color: black;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    z-index: 2;
    width: 100%;
    font-family: "Simplo";
    font-size: 1.3em;
  }

  .home, .about {
    color: white !important;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  li {
	  margin-right: 3rem;
  }

  a {
    text-decoration: none;
    padding: 1.2em;
    display: inline-block;
	font-family: "Simplo" !important;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>

<header class="{segment || 'home'}">
  <a href="/" class="logo">MISLAV GELENČIR</a>

  <ul class="show-desktop hide-desktop" id="nav">
    <li>
      {#each $categories.reverse() as category}
        <a
          href={category.name.toLowerCase()}
          class:selected={segment === category.name}>
          {category.name}
        </a>
      {/each}
    </li>
  </ul>
</header>

<script>
  import {goto, stores} from "@sapper/app";
  import {derived} from "svelte/store";
  import {categories} from "../stores";
  import {onDestroy} from "svelte";

  // Object containing whole site data, false = not loaded, undefined = not existant
  let site = false;

  const refreshData = derived(
    [stores().page, categories],
    ([page, category]) => {
      if (!page || !category) {
        return false;
      }

      if (page.path === "/" || page.path === "/contact") return page.path;

      return category.find(it => it.name.toLowerCase() === page.params.slug);
    }
  ).subscribe(siteData => {
    if (siteData) {
      site = siteData;
    } else if (siteData === undefined) {
      site = undefined;
      goto("404");
    } else if (typeof siteData === "string") {
      goto(siteData);
    }
  });

  onDestroy(refreshData);
</script>

<style>
  img {
    min-width: 150px;

    width: 25vw;
  }

  /* Three image containers (use 25% for four, and 50% for two, etc) */
  .column {
    float: left;
    width: calc(50% - 10px);
    padding: 5px;
  }

  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }

  .photo:hover {
    cursor: pointer;
  }

  .photoViewerOverlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    opacity: 0.7;
    background-color: #000;
  }

  .activePhoto {
    position: fixed;
    height: 90%;
    width: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .white-bg {
    position: fixed;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    padding: 50px;

    background-color: white;
  }
</style>

<div class="white-bg">
  {#if site}
    <h1>{site.name}</h1>

    <a href="/contact" class="slideshow-text-cta">
      Contact me
      <br />
      About me
    </a>
  {/if}
</div>

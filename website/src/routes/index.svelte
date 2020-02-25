<script>
  import {goto} from '@sapper/app';
  import {onMount, onDestroy} from 'svelte';
  import {firestore} from '../firebase';

  let photos = [];

  let slidesTimeout;

  function fetchHomePhotos() {
    return firestore.doc('home/home').get();
  }

  onMount(() => {
    fetchHomePhotos()
      .then(data => {
        photos = data.data()['Home Photos'];
        setTimeout(() => showSlides(-1), 200);
      })
      .catch(err => {
        console.log('Landing photos could not be fetched!', err);
        goto('unavailable');
      });
  });

  function showSlides(slideIndex) {
    const slides = document.getElementsByClassName('slideshow-image-inner');

    if (slideIndex === -1) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
      // slides[i].firstChild.style.opacity = 0;
    }

    slideIndex = (slideIndex + 1) % slides.length;

    slides[slideIndex].style.opacity = 1;
    // slides[slideIndex].firstChild.style.opacity = 1;

    slidesTimeout = setTimeout(() => showSlides(slideIndex), 7000);
  }

  onDestroy(() => {
    // Stop slideshow
    clearTimeout(slidesTimeout);
  });
</script>

<style>
  .slideshow {
    width: 100vw;
    overflow-x: hidden !important;
    min-height: 100vh;
    position: relative;
    display: flex;
    background: black;
    padding: 1em;
  }
  .slideshow-text {
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: var(--container);
    margin: 0 auto;
    color: white;
  }
  .slideshow-text-title {
    display: flex;
    flex-direction: column;
    line-height: 0.8;
  }
  .slideshow-text-title-1 { font-size: 5.2em; }
  .slideshow-text-title-2 { font-size: 5.2em; }
  .slideshow-text-title-3 { font-size: 5.3em; }
  .slideshow-text-title-4 { font-size: 3.0em; }
  .slideshow-text-title-5 { font-size: 3.2em; }
  .slideshow-text-cta {
    font-size: 1.5em;
    margin: 1em 0;
    width: 10em;
    height: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: .2s;
    background: rgba(255,255,255,.5);
  }
  .slideshow-text-cta:hover {
    color: black;
    background: rgba(255,255,255,.8);
  }
  .slideshow-images {
    position: absolute;
    overflow-x: hidden !important;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .slideshow-image {

  }
  .slideshow-image-inner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;

    opacity: 0;
        transition: 1.5s;
  }
  @media (max-width: 1700px) {
    .slideshow-text-title {
      font-size: 1.1em;
      margin-top: 10%;
      display: flex;
      flex-direction: column;
      line-height: 0.8;
      max-width: var(--container)
    }
    .slideshow-text-cta{
      font-size: 1em;
      margin: 1em 0;
      width: 10em;
      height: 10em;
    }
    .slideshow-text {
      flex-direction: column;
      justify-content: space-evenly;
      max-width: var(--container)
    }
  }
  @media (max-width: 1200px) {
    .slideshow-text-title {
      font-size: .9em;
      display: flex;
      flex-direction: column;
      line-height: 0.8;
      max-width: var(--container)
    }
    .slideshow-text-cta{
      width: 8em;
      height: 8em;
    }
    .slideshow-text {
      flex-direction: column;
      justify-content: space-evenly;
      max-width: var(--container)
    }
  }
  @media (max-width: 900px) {
    .slideshow-text {
      flex-direction: column;
      justify-content: space-evenly;
      max-width: var(--container)
    }
    .slideshow-text-title {
      font-size: .8em;
      display: flex;
      flex-direction: column;
      line-height: 0.8;
      max-width: var(--container)
    }
    .slideshow-text-cta{
      max-width: var(--container)
    }
  }
  @media (max-width: 600px) {
    .slideshow-text-title {
      font-size: .9em;
    }
    .slideshow-text-cta {
      max-width: var(--container)
    }
    .slideshow {
      background-position-x: center;
    }
  }
  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>

<svelte:head>
  <title>MG - Photography</title>
</svelte:head>

<section class="slideshow">
  <div class="slideshow-text unselectable">
    <h1 class="slideshow-text-title">
      <span class="slideshow-text-title-1">Making</span>
      <span class="slideshow-text-title-2">people,</span>
      <span class="slideshow-text-title-3">events</span>
      <span class="slideshow-text-title-4">& properties</span>
      <span class="slideshow-text-title-5">look good</span>
    </h1>
    <a href="contact" class="slideshow-text-cta">Contact me</a>
  </div>
  <div class="slideshow-images">
    {#each photos as photo}
      <div class="slideshow-image">
        <img class="slideshow-image-inner" alt="" src={photo} />
      </div>
    {/each}
  </div>
</section>

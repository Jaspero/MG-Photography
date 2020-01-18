<script>
  import {goto} from '@sapper/app';
  import {onMount, afterUpdate, onDestroy} from 'svelte';
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
    const slides = document.getElementsByClassName('slideshow-image');

    if (slideIndex === -1) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
      slides[i].firstChild.style.opacity = 0;
    }

    slideIndex = (slideIndex + 1) % slides.length;

    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].firstChild.style.opacity = 1;

    slidesTimeout = setTimeout(() => showSlides(slideIndex), 7000);
  }

  onDestroy(() => {
    // Stop slideshow
    clearTimeout(slidesTimeout);
  });
</script>

<style>
  .slideshow-text-title {
    font-size: 4em;
    color: white;
    position: absolute;
    top: 22vh;
    left: 10vw;
    line-height: 0.8;
    font-weight: normal;
    font-family: 'Particle';
    width: 700px;
  }

  .slideshow-text-cta {
    top: 30vh;
    font-family: 'Particle';
    left: 65vw;
    position: absolute;
    width: 350px;
    height: 350px;
    background: rgba(110, 103, 103, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    border-radius: 50%;
    font-size: 1.5em;
    color: white;
    transition: 0.2s;
  }

  .slideshow-text-cta:hover {
    background: #eee;
    color: black;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 1em;
    display: inline-block;
  }

  .slideshow {
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
  }

  .slideshow-text {
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .slideshow-images {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .slideshow-image {
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
  }

  .mySlides {
    opacity: 0;

    transition: opacity 1.5s ease-in-out;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .slideshow-image-inner {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
  }

  .firstPhoto {
    opacity: 1;
  }
</style>

<svelte:head>
  <title>MG - Photography</title>
</svelte:head>

<section class="slideshow">

  <!-- Slideshow text -->
  <div class="slideshow-text">
    <h1 class="slideshow-text-title">
      Making
      <br />
      people,
      <br />
      events
      <br />
      and properties
      <br />
      look good
    </h1>
    <a href="about" class="slideshow-text-cta">Contact me</a>
  </div>

  <!-- Slideshow images -->
  <div class="slideshow-images">
    {#each photos as photo}
      <div class="slideshow-image fade">
        <img class="slideshow-image-inner" alt="" src={photo} />
      </div>
    {/each}
  </div>
</section>

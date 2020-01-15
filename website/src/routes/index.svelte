<script>
  import {goto} from '@sapper/app';
  import {onMount, afterUpdate, onDestroy} from 'svelte';
  import {firestore} from '../firebase';
  let photos = [];

  let slidesTimeout;

  function fetchHomePhotos() {
    // return new Promise((resolve, reject) => {
    return firestore.doc('home/home').get();
    // });
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
    const slides = document.getElementsByClassName('mySlides');

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
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Particle';
    src: url('../fonts/Particle-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Simplo';
    src: url('../fonts/Simplo-Light.otf') format('opentype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Simplo';
    src: url('../fonts/Simplo-Medium.otf') format('opentype');
    font-weight: bold;
  }

  body {
    margin: 0;
    font-family: 'Particle';
    background: black;
  }

  .slideshow-text-title {
    font-size: 6em;
    color: white;
    position: absolute;
    top: 28vh;
    left: 10vw;
    line-height: 0.8;
    font-weight: normal;

    white-space: nowrap;

    font-family: 'Particle';
  }

  .slideshow-text-cta {
    top: 30vh;
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

    font-family: 'Particle';
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
  }

  .slideshow-images {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
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

  .mySlides > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;

    transition: opacity 1.5s ease-in-out;

    opacity: 0;
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
    <a href="/contact" class="slideshow-text-cta">
      Contact me
      <br />
      About me
    </a>
  </div>

  <!-- Slideshow images -->
  <div class="slideshow-images">

    {#each photos as photo}
      <div class="mySlides">
        <img alt="" src={photo} style="width: 100%" />
      </div>
    {/each}

    <!-- Full-width images with number and caption text -->
    <!-- <div class="mySlides fade firstPhoto">
      <img alt="" src="landing/landing-web-1.jpg" style="width:100%" />
    </div>

    <div class="mySlides fade">
      <img alt="" src="landing/landing-web-2.jpg" style="width:100%" />
    </div>

    <div class="mySlides fade">
      <img alt="" src="landing/landing-web-3.jpg" style="width:100%" />
    </div>

    <div class="mySlides fade">
      <img alt="" src="landing/landing-web-4.jpg" style="width:100%" />
    </div>

    <div class="mySlides fade">
      <img alt="" src="landing/landing-web-5.jpg" style="width:100%" />
    </div>

    <div class="mySlides fade">
      <img
        alt=""
        src="landing/landing-web-6-version-1.jpg"
        style="width:100%" />
    </div>

    <div class="mySlides fade">
      <img alt="" src="landing/landing-web-7.jpg" style="width:100%" />
    </div>

    <div class="mySlides fade">
      <img
        alt=""
        src="landing/landing-web-8-version-1.jpg"
        style="width:100%" />
    </div>

    <div class="mySlides fade">
      <img
        alt=""
        src="landing/landing-web-9-version-1.jpg"
        style="width:100%" />
    </div>

    <div class="mySlides fade">
      <img
        alt=""
        src="landing/landing-web-10-version-1.jpg"
        style="width:100%" />
    </div>

    <div class="mySlides fade">
      <img
        alt=""
        src="landing/landing-web-11-version-1.jpg"
        style="width:100%" />
    </div> -->
  </div>
</section>

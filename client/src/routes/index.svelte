<script>
  import { onMount } from "svelte";

  let slideIndex = 0;

  onMount(() => {
	showSlides();
  });

  function showSlides() {
	  try {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.opacity = 0;
		}
		
		slideIndex = (slideIndex + 1) % (slides.length);

		slides[slideIndex].style.opacity = 1;
		setTimeout(showSlides, 7000);
	  } catch(e) {

	  }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Particle";
    src: url("../fonts/Particle-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: "Simplo";
    src: url("../fonts/Simplo-Light.otf") format("opentype");
    font-weight: normal;
  }

  @font-face {
    font-family: "Simplo";
    src: url("../fonts/Simplo-Medium.otf") format("opentype");
    font-weight: bold;
  }

  body {
    margin: 0;
    font-family: "Particle";
    background: black;
  }

  .slideshow-text-title {
    font-size: 6em;
    color: white;
    position: absolute;
    top: 22vh;
    left: 10vw;
    line-height: 0.8;
    font-weight: normal;
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

	-webkit-transition: opacity 1s ease-in-out;
	-moz-transition: opacity 1s ease-in-out;
	-ms-transition: opacity 1s ease-in-out;
	-o-transition: opacity 1s ease-in-out;
	transition: opacity 1s ease-in-out;


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
    <a href="#" class="slideshow-text-cta">
      Contact me
      <br />
      About me
    </a>
  </div>

  <!-- Slideshow images -->
  <div class="slideshow-images">

    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade firstPhoto">
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
    </div>
  </div>
</section>

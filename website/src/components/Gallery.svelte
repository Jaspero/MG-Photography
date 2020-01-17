<script>
  export let title = '';
  export let images = '';
</script>

<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    max-width: 80vw;
    margin: 4em auto;
  }

  .gallery-col {
    width: 50%;
    position: relative;
    padding-bottom: 66%;
  }

  .gallery-col-image {
    position: absolute;
    top: 20px;
    left: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    object-fit: cover;
  }

  .gallery-col:nth-child(2n - 1):not(:nth-child(1)) {
    transform: translateY(-50%);
  }

  .gallery-col-title {
    margin: 0;
    position: absolute;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    font-size: 7em;
    line-height: .8;
    color: #6E6E6E;
  }

  .gallery-col-title::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -100px;
    transform: translateY(-50%);
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: #eee;
    z-index: -1;
  }
</style>

<section class="gallery">
  <div class="gallery-col">
    <h1 class="gallery-col-title">{title}</h1>
  </div>
  <a class="gallery-col" href="landing/landing-web-1.jpg">
    <img
      class="gallery-col-image"
      src="landing/landing-web-1.jpg"
      alt="Image1" />
  </a>
  <a class="gallery-col" href="landing/landing-web-2.jpg">
    <img
      class="gallery-col-image"
      src="landing/landing-web-2.jpg"
      alt="Image2" />
  </a>
  <a class="gallery-col" href="landing/landing-web-3.jpg">
    <img
      class="gallery-col-image"
      src="landing/landing-web-3.jpg"
      alt="Image3" />
  </a>
  <a class="gallery-col" href="landing/landing-web-1.jpg">
    <img
      class="gallery-col-image"
      src="landing/landing-web-1.jpg"
      alt="Image3" />
  </a>
  <a class="gallery-col" href="landing/landing-web-2.jpg">
    <img
      class="gallery-col-image"
      src="landing/landing-web-2.jpg"
      alt="Image3" />
  </a>
  <a class="gallery-col" href="landing/landing-web-3.jpg">
    <img
      class="gallery-col-image"
      src="landing/landing-web-3.jpg"
      alt="Image3" />
  </a>
</section>

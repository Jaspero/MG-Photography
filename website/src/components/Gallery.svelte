<script>
    import { fade } from 'svelte/transition';

    export let title = '';
    export let images = '';
    export let orientation = 'portrait';

    let photoViewer = {
        active: false,
        src: '',
        index: 0
    };

    function viewPhoto(i) {

      if (i < 0) {
        i = images.length - 1;
      }

      if (i === images.length) {
        i = 0;
      }

      photoViewer.src = images[i];
      photoViewer.active = true;
      photoViewer.index = i;
    }

    function closePhotoViewer() {
      photoViewer.src = '';
      photoViewer.active = false;
      photoViewer.index = 0;
    }

    document.onkeydown = checkArrows;

    function checkArrows(e) {
        e = e || window.event;
        if (!photoViewer.active) return;
        if (e.keyCode === 27) {
            closePhotoViewer();
        } else if (e.keyCode === 37) {
            viewPhoto(photoViewer.index - 1);
        } else if (e.keyCode === 39) {
            viewPhoto(photoViewer.index + 1);
        }
    }
</script>

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        max-width: var(--container);
        margin: 60px auto;
    }
    .gallery-col {
        width: 50%;
        position: relative;
        padding-bottom: 66%;
    }
    .gallery-col.landscape {
        width: 100%;
        padding-bottom: 66%;
        transform: translateY(0);
    }
    .gallery-col.landscape:nth-child(1){
        padding-bottom: 33%;
    }
    .gallery-col.landscape:nth-child(2n - 1):not(:nth-child(1)) {
        transform: translateY(0);
    }
    .gallery-col:nth-child(2n - 1):not(:nth-child(1)) {
        transform: translateY(-50%);
    }
    .gallery-col-title {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: flex-start;
        font-size: 8.5em;
        padding-left: 0.25em;
        padding-top: 120px;
        font-family: 'Simplo';
        text-transform: uppercase;
        color: #6E6E6E;
        line-height: 80%;
    }
    .gallery-col-title::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 15px;
        left: 0px;
        height: 350px;
        width: 350px;
        background: rgba(0, 0, 0, .1);
        border-radius: 50%;
    }
    .gallery-col-image {
        position: absolute;
        top: 20px;
        left: 20px;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        object-fit: cover;
    }
    @media (max-width: 1600px) {
        .gallery-col-title {
            font-size: 10vw;
        }
    }
    @media (max-width: 1100px) {
        .gallery-col-title {
            font-size: 7vw;
        }
        .gallery-col-title {
            font-size: 4em;
            align-items: flex-start;
            padding-left: 0.25em;
            padding-top: 130px;
            font-family: 'Simplo';
            text-transform: uppercase;
            color: #6E6E6E;
            line-height: 80%;
        }
        .gallery-col-title::after {
            z-index: -1;
            top: 50px;
            left: 0px;
            height: 200px;
            width: 200px;
        }
    }
    @media (max-width: 600px) {
        .gallery-col {
            width: 100%;
            padding-bottom: 133%;
        }
        .gallery-col:nth-child(1),
        .gallery-col:nth-child(1).landscape {
            padding-bottom: 60px;
            padding-top: 60px;
        }
        .gallery-col.landscape {
            padding-bottom: 66%;
        }
        .gallery-col:nth-child(2n - 1):not(:nth-child(1)) {
            transform: translateY(0);
        }
        .gallery-col-title {
            position: static;
            font-size: 5em;
            display: flex;
            align-items: flex-start;
            padding-left: 0.25em;
            padding-top: 40px;
            font-family: 'Simplo';
            text-transform: uppercase;
            color: #6E6E6E;
            line-height: 80%;
        }
        .gallery-col-title::after {
            z-index: -1;
            top: 25px;
            left: 0px;
            height: 200px;
            width: 200px;
        }
    }

    .viewer .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        background-color: black;
        opacity: 0.75;
    }

    .viewer .photo {
        position: fixed;
        height: 90%;
        width: auto;
        left: 50%;
        top: 50%;
        padding: 10px;
        background-color: white;

        transform: translate(-50%, -50%);
    }

    .viewer .photo img {
        height: 100%;
        width: auto;
    }

    /* Close button */
    .close {
        position: absolute;
        right: 32px;
        top: 32px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
    }
    .close:hover {
        opacity: 1;

        cursor: pointer;
    }
    .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }
    .close:before {
        transform: rotate(45deg);
    }
    .close:after {
        transform: rotate(-45deg);
    }

    .arrow {
        position: absolute;

        top: calc(50% - 25px);

        background-color: white;
        width: 50px;
        line-height:50px;
        text-align: center;
        border-radius: 100%;
        transition: all 0.15s;
    }

    .arrow:hover {
        cursor: pointer;

        width: 56px;
        line-height: 56px;

        top: calc(50% - 28px);
    }

    .left-arrow {
        left: 15px;
    }
    .left-arrow:hover {
        left: 12px;
    }

    .right-arrow {
        right: 15px;
    }
    .right-arrow:hover {
        right: 12px;
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

<section class="gallery">
    <div class="gallery-col" class:landscape={orientation === 'landscape'}>
        <h1 class="gallery-col-title">{title.replace('-', ' ')}</h1>
    </div>
    {#each images as image, i}
        <a class="gallery-col" on:click={() => viewPhoto(i)} class:landscape={orientation === 'landscape'}>
            <img class="gallery-col-image" src={image} alt=""/>
        </a>
    {/each}
</section>

{#if photoViewer.active}
    <div class="viewer" transition:fade={{duration: 200}}>
        <div class="overlay" on:click={closePhotoViewer}></div>
        <div class="photo unselectable">
            <img src={photoViewer.src} alt="Active photo" />
            <span class="close" on:click={closePhotoViewer}></span>
            <span class="arrow left-arrow" on:click={() => viewPhoto(photoViewer.index - 1)}>&lt;</span>
            <span class="arrow right-arrow" on:click={() => viewPhoto(photoViewer.index + 1)}>&gt;</span>
        </div>
    </div>
{/if}

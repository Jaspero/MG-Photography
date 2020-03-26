<script>
    import {fade} from 'svelte/transition';
    import {afterUpdate, onMount} from 'svelte';
    import {refresh, loading} from '../stores';
    import Image from './Image.svelte';

    export let title = '';
    export let images = [];
    export let resolutions = [];

    let documentTitle = '';

    const hasAPI = 'IntersectionObserver' in window;

    let parsedResolutions = {};
    let photoViewer = {
        active: false,
        src: '',
        index: 0
    };

    let leftColumnHeight = 0;
    let rightColumnHeight = 0;
    let leftColumnImages = [];
    let rightColumnImages = [];

    let scrollerVisible = false;

    function viewPhoto(src) {
        photoViewer.src = src;
        photoViewer.active = true;

        document.body.classList.add('overflow-hidden');
    }

    function viewNext() {
        let nextIndex = images.indexOf(photoViewer.src) + 1;
        if (nextIndex === images.length) nextIndex = 0;
        showLoader();
        viewPhoto(images[nextIndex]);
    }

    function viewPrev() {
        let prevIndex = images.indexOf(photoViewer.src) - 1;
        if (prevIndex < 0) prevIndex = images.length - 1;
        showLoader();
        viewPhoto(images[prevIndex]);
    }

    function closePhotoViewer() {
        photoViewer.src = '';
        photoViewer.active = false;
        document.body.classList.remove('overflow-hidden');
    }

    document.onkeydown = checkArrows;

    function checkArrows(e) {
        e = e || window.event;
        if (!photoViewer.active) return;
        if (e.keyCode === 27) {
            closePhotoViewer();
        } else if (e.keyCode === 37) {
            viewPrev();
        } else if (e.keyCode === 39) {
            viewNext();
        }
    }

    afterUpdate(() => {
        refresh.subscribe(data => {
            parseResolutions();
        });
    });

    onMount(() => {
        documentTitle = `MG - ${title.replace('-', ' ')}`;
        refresh.subscribe(data => {
            try {
                document.getElementById('loader').style.zIndex = '1';
                document.getElementById('loader').style.opacity = '1';
                document.getElementsByClassName('gallery-images')[0].style.transitionDuration = '0s';
                document.getElementsByClassName('gallery-images')[0].style.opacity = '0';

                documentTitle = `MG - ${data.toString().replace('-', ' ')}`;

                setTimeout(() => {
                    try {
                        document.getElementById('loader').style.opacity = '0';
                        setTimeout(() => {
                            document.getElementById('loader').style.zIndex = '-10';
                        }, 500);
                        document.getElementsByClassName('gallery-images')[0].style.transitionDuration = '0.5s';
                        document.getElementsByClassName('gallery-images')[0].style.opacity = '1';
                    } catch (e) {
                    }
                }, 1600);
            } catch (e) {
            }
        });
    });

    function scrollUp() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    window.onscroll = function(ev) {
        scrollerVisible = window.pageYOffset > 900;
    };

    function parseResolutions() {
        parsedResolutions = {};
        resolutions.map(resolution => {
            parsedResolutions[resolution.url] = {width: resolution.width, height: resolution.height};
        });

        reorder();
    }

    function reorder() {
        leftColumnImages = [];
        leftColumnHeight = 0;
        rightColumnImages = [];
        rightColumnHeight = 0;
        images.map((image) => {
            const ratio = parsedResolutions[image].width / parsedResolutions[image].height;
            const height = 1000 / ratio;

            if (leftColumnHeight <= rightColumnHeight) {
                leftColumnImages.push(image);
                leftColumnHeight += height;
            } else {
                rightColumnImages.push(image);
                rightColumnHeight += height;
            }
        });
    }

    function hideLoader() {
      document.getElementById('viewer-loader').classList.add('hide');
      document.getElementById('viewer-photo').classList.remove('hide');
      document.getElementById('viewer-loader').style.zIndex = '-10';
    }

    function showLoader() {
      document.getElementById('viewer-loader').classList.remove('hide');
      document.getElementById('viewer-photo').classList.add('hide')
      document.getElementById('viewer-loader').style.zIndex = '10';
    }

</script>

<style>
    .gallery {
        max-width: 95rem;
        margin: 60px auto;
    }

    .gallery-title {
        position: relative;
        font-size: 8em;
        padding-left: 0.25em;
        padding-top: 112px;
        font-family: 'Simplo';
        text-transform: uppercase;
        margin-bottom: 120px;
        color: #6E6E6E;
        line-height: 80%;
    }

    .gallery-title::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 15px;
        left: 0px;
        height: 250px;
        width: 250px;
        background: rgba(0, 0, 0, .1);
        border-radius: 50%;
    }

    .scroll-up {
        position: fixed;
        z-index: 3;
        bottom: 50px;
        right: 50px;
        width: 50px;
        height: 50px;
        padding: 8px;
        background: #E5E5E5;
        text-decoration: none;
        cursor: pointer;
        border-radius: 100px;
        border: 0;
        outline: none;
    }

    .scroll-up-image {
        width: 100%;
    }

    .viewer-overlay {
        position: fixed;
        z-index: 4;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 0.75;
    }

    .viewer-photos {
        position: fixed;
        z-index: 5;
        height: 90%;
        width: auto;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .viewer-photo {
        height: 100%;
        width: auto;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
        transition: 0.4s;
    }

    .viewer-close {
        position: absolute;
        right: 32px;
        top: 32px;
        cursor: pointer;
        width: 32px;
        height: 32px;
        transition: .2s;
        opacity: 0.3;
    }

    .viewer-close:hover {
        opacity: 1;
    }

    .viewer-arrow {
        position: absolute;
        top: calc(50% - 25px);
        cursor: pointer;
        background-color: white;
        opacity: 0.4;
        width: 50px;
        line-height: 50px;
        text-align: center;
        border-radius: 100%;
        transition: .15s;
        transform-origin: center;
    }

    .viewer-arrow-left {
        left: 15px;
    }

    .viewer-arrow-right {
        right: 15px;
    }

    .viewer-arrow:hover {
        transform: scale(1.1);
    }

    .gallery-images {
        display: flex;
        justify-content: space-between;
        opacity: 0;
        transition: 1.5s;
    }

    .gallery-column {
        width: calc(50% - 5px);
    }

    .gallery-image {
        width: 100%;
        height: auto;
        min-height: 150px;
        margin-bottom: 5px;
        cursor: pointer;
    }

    .visible {
        opacity: 1;
    }

    #loader {
        transition: 0.4s;
        position: fixed;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    #loader img {
        width: 100px;
    }

    #viewer-loader {
        transition: 0.4s;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    #viewer-loader img {
        width: 100px;
    }

    .hide {
        opacity: 0;
    }

    @media (min-width: 900px) {
        .viewer-photos {
            min-height: 450px;
            min-width: 450px;
        }
    }

    @media (max-width: 1600px) {
        .gallery-title {
            position: relative;
            font-size: 6em;
            padding-left: 0.25em;
            padding-top: 112px;
            margin-bottom: 120px;
        }

        .gallery {
            max-width: 70rem;
            margin: 50px auto;
        }
    }

    @media (max-width: 1200px) {
        .gallery-title {
            position: relative;
            font-size: 7em;
            padding-left: 0.25em;
            padding-top: 112px;
            margin-bottom: 120px;
        }

        .gallery {
            max-width: 65rem;
            margin: 50px auto;
        }
    }

    @media (max-width: 900px) {
        .gallery-title {
            position: relative;
            font-size: 6em;
            padding-left: 0.25em;
            padding-top: 112px;
            margin-bottom: 120px;
        }

        .gallery {
            max-width: 50rem;
            margin: 50px auto;
        }
    }

    @media (max-width: 600px) {
        .gallery-images {
            flex-wrap: wrap;
            justify-content: center;
        }

        .gallery-title {
            position: relative;
            font-size: 5.5em;
            padding-left: 0.25em;
            padding-top: 112px;
            margin-bottom: 100px;
        }

        .viewer-photos {
            width: 90%;
            height: 0;
        }

        .viewer-photo {
            width: 100%;
            height: auto;
            transform: translateY(-50%);
        }

        .viewer-close {
            display: none;
        }

        .gallery-column {
            width: 90%;
        }
    }
</style>

<svelte:head>
    <title>{documentTitle}</title>
</svelte:head>

<div class="gallery">
    <h1 class="gallery-title">{title.replace('-', ' ')}</h1>
    <div id="loader">
        <img alt="Loader" src="/icons/loader.svg">
    </div>
    <div class="gallery-images" class:visible={!$loading}>
        <div class="gallery-column" id="column-left">
            {#each leftColumnImages as image, i}
                <div class="gallery-image" on:click={() => viewPhoto(image)}>
                    <Image item={image} lazy={hasAPI} />
                </div>
            {/each}
        </div>
        <div class="gallery-column" id="column-right">
            {#each rightColumnImages as image, i}
                <div class="gallery-image" on:click={() => viewPhoto(image)}>
                    <Image item={image} lazy={hasAPI}/>
                </div>
            {/each}
        </div>
    </div>
</div>


{#if scrollerVisible}
    <button class="scroll-up" on:click={scrollUp} transition:fade="{{duration: 200}}" aria-label="Scroll to top."
            title="Scroll to top.">
        <img class="scroll-up-image" src="/icons/single-arrow-up.svg" alt=""/>
    </button>
{/if}

{#if photoViewer.active}
    <div class="viewer" transition:fade={{duration: 200}}>
        <div class="viewer-overlay" on:click={closePhotoViewer}></div>
        <div class="viewer-photos">
            <img class="viewer-photo hide" id="viewer-photo" on:load={hideLoader} src={photoViewer.src} alt="Active photo" ondrag="return false"
                 ondragstart="return false"
                 galleryimg="no"
                 onmousedown="return false"/>
            <div id="viewer-loader">
                <img alt="Loader" src="/icons/loader.svg">
            </div>
            <span class="viewer-close" on:click={closePhotoViewer}></span>
            <span class="viewer-arrow viewer-arrow-left unselectable" on:click={viewPrev}>&lt;</span>
            <span class="viewer-arrow viewer-arrow-right unselectable" on:click={viewNext}>&gt;</span>
        </div>
    </div>
{/if}

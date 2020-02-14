<script>
    import {fade} from 'svelte/transition';
    import {afterUpdate} from 'svelte';

    export let title = '';
    export let images = [];

    let orderedImages = [];
    let orderedIndexes = [];
    let columns = 2;

    let photoViewer = {
        active: false,
        src: '',
        index: 0
    };

    let scrollerVisible = false;

    function viewPhoto(src) {
        photoViewer.src = src;
        photoViewer.active = true;
    }

    function viewNext() {
        let nextIndex = images.indexOf(photoViewer.src) + 1;
        if (nextIndex === images.length) nextIndex = 0;
        viewPhoto(images[nextIndex]);
    }

    function viewPrev() {
        let prevIndex = images.indexOf(photoViewer.src) - 1;
        if (prevIndex < 0) prevIndex = images.length - 1;
        viewPhoto(images[prevIndex]);
    }

    function closePhotoViewer() {
        photoViewer.src = '';
        photoViewer.active = false;
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

    window.addEventListener('resize', () => {
        columns = (window.innerWidth <= 900) ? 1 : 2;
        reorder();
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

    afterUpdate(() => {
        reorder();
    });

    function reorder() {
        let arr = images;
        const cols = columns;
        let out = [];
        let indexes = [];
        let col = 0;
        while (col < cols) {
            for (let i = 0; i < arr.length; i += cols) {
                let _val = arr[i + col];
                if (_val !== undefined) {
                    out.push(_val);
                    indexes.push(i + col);
                }
            }
            col++;
        }
        orderedImages = out;
        orderedIndexes = indexes;
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
    .gallery-list {
        list-style: none;
        padding: 10px;
        columns: 2;
        column-gap: 10px;
    }
    .gallery-list-item {
        margin-bottom: 10px;
        break-inside: avoid;
        cursor: pointer;
        -webkit-user-select: none;
        user-select: none;
    }
    .gallery-list-image {
        width: 100%;
        height: auto;
    }
    .scroll-up {
        position: fixed;
        z-index: 3;
        bottom: 50px;
        right: 50px;
        width: 50px;
        height: 50px;
        padding: 8px;
        background: white;
        text-decoration: none;
        cursor: pointer;
        border-radius: 100px;
        border: 1px solid black;
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
        left: calc(50% + 1px);
        top: calc(50% + 1px);
        border: 1px solid black;
        background-color: white;
        transform: translate(-50%, -50%);
    }
    .viewer-photo {
        height: 100%;
        width: auto;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
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

    @media (max-width: 1200px) {
        .gallery-title {
            position: relative;
            font-size: 7em;
            padding-left: 0.25em;
            padding-top: 112px;
            margin-bottom: 120px;
        }
        .gallery {
            max-width: 85rem;
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
            max-width: 85rem;
            margin: 50px auto;
        }
    }
    @media (max-width: 600px) {
        .gallery-list {
            columns: 1;
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
    }
</style>

<div class="gallery">
    <h1 class="gallery-title unselectable">{title.replace('-', ' ')}</h1>
    <ul class="gallery-list">
        {#each orderedImages as image, i}
            <li on:click={() => viewPhoto(image)} class="gallery-list-item">
                <img class="gallery-list-image" src={image} alt="" ondrag="return false"
                     ondragstart="return false"
                     galleryimg="no"
                     onmousedown="return false"/>
            </li>
        {/each}
    </ul>
</div>

{#if scrollerVisible}
    <button class="scroll-up" on:click={scrollUp} transition:fade={{duration: 200}} aria-label="Scroll to top." title="Scroll to top.">
        <img src="/icons/arrow-up.svg" alt=""/>
    </button>
{/if}

{#if photoViewer.active}
    <div class="viewer" transition:fade={{duration: 200}}>
        <div class="viewer-overlay" on:click={closePhotoViewer}></div>
        <div class="viewer-photos">
            <img class="viewer-photo" src={photoViewer.src} alt="Active photo" ondrag="return false"
                 ondragstart="return false"
                 galleryimg="no"
                 onmousedown="return false"/>
            <span class="viewer-close" on:click={closePhotoViewer}></span>
            <span class="viewer-arrow viewer-arrow-left" on:click={() => viewPrev()}>&lt;</span>
            <span class="viewer-arrow viewer-arrow-right" on:click={() => viewNext()}>&gt;</span>
        </div>
    </div>
{/if}

<script>
    export let title = '';
    export let images = '';
    export let orientation = 'portrait';
</script>

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        max-width: var(--container);
        margin: 60px auto -25em;
    }

    .gallery-col {
        width: 50%;
        position: relative;
        padding-bottom: 66%;
    }

    .pd-b-10 {
        margin-top: 10%;
        padding-bottom: 25%;
    }

    .gallery-row {
        width: 100%;
        position: relative;
        padding-bottom: 65%;
    }

    .gallery-row-image {
        position: absolute;
        top: 10px;
        left: 20px;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        object-fit: cover;
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
        position: absolute;
        height: 50%;
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 4em;
        padding-left: 0.25em;
    }

    .gallery-col-title::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: -15%;
        height: 0;
        width: 50%;
        padding-top: 50%;
        background: rgba(0, 0, 0, .1);
        border-radius: 50%;
        transform: translateY(-50%);
    }

    @media (max-width: 1600px) {
        .gallery {
            margin: 60px auto -30vw;
        }

        .gallery-col-title {
            font-size: 2em;
            padding-left: 0.5em;
        }
    }
</style>

<section class="gallery">
    <div class="gallery-col {orientation == 'landscape' ? 'pd-b-10':''}">
        <h1 class="gallery-col-title">{title.replace('-', ' ')}</h1>
    </div>
    {#each images as image}
        <a class="{orientation == 'landscape' ? 'gallery-row' : 'gallery-col'}" href={image}>
            <img class="{orientation == 'landscape' ? 'gallery-row-image' : 'gallery-col-image'}" src={image} alt=""/>
        </a>
    {/each}
</section>

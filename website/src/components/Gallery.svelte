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
        margin-bottom: 300px;
    }

    .gallery-col {
        width: 50%;
        position: relative;
        padding-bottom: 90px;
    }

    .pd-b-10 {
        padding-bottom: 25%;
    }

    .gallery-row {
        width: 100%;
        position: relative;
        padding-bottom: 65%;
    }

    .gallery-row-image {
        position: absolute;
        top: -300px;
        left: 20px;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        object-fit: cover;
    }

    .gallery-col-image {
        position: absolute;
        top: 192px;
        bottom: 45px;
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
        font-size: 8.5em;
        padding-left: 0.25em;
        font-family: 'Simplo';
        text-transform: uppercase;
        color: #6E6E6E;
        line-height: 80%;
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

    @media (min-width: 1300px) {
        .gallery {
            margin: 60px auto -30vw;
        }

        .gallery-col:nth-child(2n - 1):not(:nth-child(1)) {
            transform: translateY(-50%);
        }

        .gallery-col-title {
            font-size: 9em;
            padding-left: 0.5em;
        }

        .gallery {
            display: flex;
            flex-wrap: wrap;
            max-width: var(--container);
            margin: 40px auto -25em;
        }

        .gallery-col {
            width: 50%;
            position: relative;
            padding-bottom: 66%;
        }
    }

</style>

<section class="gallery {orientation}">
    <div class="gallery-col {orientation == 'landscape' ? 'pd-b-10':''}">
        <h1 class="gallery-col-title">{title.replace('-', ' ')}</h1>
    </div>
    {#each images as image}
        <a class="{orientation == 'landscape' ? 'gallery-row' : 'gallery-col'}" href={image}>
            <img class="{orientation == 'landscape' ? 'gallery-row-image' : 'gallery-col-image'}" src={image} alt=""/>
        </a>
    {/each}
</section>

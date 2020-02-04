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
</style>

<section class="gallery">
    <div class="gallery-col" class:landscape={orientation === 'landscape'}>
        <h1 class="gallery-col-title">{title.replace('-', ' ')}</h1>
    </div>
    {#each images as image}
        <a class="gallery-col" href={image} class:landscape={orientation === 'landscape'}>
            <img class="gallery-col-image" src={image} alt=""/>
        </a>
    {/each}
</section>

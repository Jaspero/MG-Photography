<script>
    import {afterUpdate, onMount} from 'svelte';
    import {refresh, loading} from '../stores';

    export let videos = [];

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

    .video-title {
        margin-left: 5%;
        margin-bottom: 10px;
    }

    .video-container {
        width: 90%;
        height: 70vh;
        min-height: 400px;
        margin-left: 5%;
        margin-bottom: 100px;
        overflow: hidden;
        position: relative;
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .video-container iframe {
        /*pointer-events: none;*/
    }

    .video-container iframe {
        position: absolute;
        top: -60px;
        left: 0;
        width: 100%;
        height: calc(100% + 120px);
    }

    .video-foreground {
        /*pointer-events: none;*/
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
        .gallery-title {
            position: relative;
            font-size: 5.5em;
            padding-left: 0.25em;
            padding-top: 112px;
            margin-bottom: 100px;
        }

        .video-container {
            height: 300px;
            min-height: 200px;
        }
    }
</style>

<svelte:head>
    <title>MG - Videos</title>
</svelte:head>

<div class="gallery">
    <h1 class="gallery-title">VIDEOS</h1>

    {#each videos as video, i}
        <h1 class="video-title">{video.title}</h1>
        <div class="video-container">
            <div class="video-foreground">
                <iframe title="{video.title}" src="https://www.youtube.com/embed/{video.videoid}?controls=0&showinfo=0&rel=0&autoplay=0"
                        frameBorder="0" allowFullScreen>
                </iframe>
            </div>
        </div>
    {/each}
</div>

<script>
    import VideoGallery from '../components/VideoGallery.svelte';
    import {onMount} from 'svelte';
    import {firestore} from '../firebase';

    let videos = [];

    function fetchVideos() {
        return firestore.doc('videos/videos').get();
    }

    onMount(() => {
        fetchVideos()
                .then(data => {
                    videos = data.data().videos;
                })
                .catch(err => {
                    console.log('Videos could not be fetched!', err);
                    goto('unavailable');
                });
    });
</script>


{#await videos}
    <div class="loader">
        <h1>Hey...</h1>
    </div>
{:then videos}
    <VideoGallery videos="{videos}"/>
{/await}

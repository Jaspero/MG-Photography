<script>
    import Gallery from '../components/Gallery.svelte';
    import VideoGallery from '../components/VideoGallery.svelte';
    import {onMount} from 'svelte';
    import {firestore} from '../firebase';

    let videos = [];
    // console.log(videos);
    // export const videos = [];

    function fetchVideos() {

        return firestore.doc('videos/videos').get();

        // videos.set((await firestore.doc('videos/videos').get()).data().videos);
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
<!--    {JSON.stringify(videos)}-->
              <VideoGallery videos="{videos}"/>
{/await}

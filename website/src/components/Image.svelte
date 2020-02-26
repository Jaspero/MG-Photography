<script>
    import {refresh} from '../stores';
    import {afterUpdate} from 'svelte';

    export let item;
    export let lazy = false;

    let src = '';
    let observer = null;

    if (lazy) {
        src = '';
        observer = new IntersectionObserver(onIntersect, {rootMargin: '300px'});
    }

    function onIntersect(entries) {
        if (!src && entries[0].isIntersecting) {
            src = item;
        }
    }

    function lazyLoad(node) {
        observer && observer.observe(node);
        return {
            destroy() {
                observer && observer.unobserve(node);
            }
        };
    }

    afterUpdate(() => {
        refresh.subscribe(data => {
            if (src) {
                src = item;
            }
        });
    });
</script>

<style>
    img {
        width: 100%;
        height: auto;
    }
</style>

<div use:lazyLoad>
    <img {src} alt='' ondrag="return false"
         ondragstart="return false"
         onmousedown="return false"/>
</div>
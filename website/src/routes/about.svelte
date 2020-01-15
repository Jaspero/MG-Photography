<style>
    .slideshow-text-title {
        font-size: 6em;
        color: white;
        position: absolute;
        top: -65rem;
        left: 10rem;
        font-weight: normal;
        line-height: .8em;
    }

    a {
        text-decoration: none;
        color: white;
        padding: 1em;
        display: inline-block;
    }

    .slideshow {
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: 1;
    }

    .slideshow-text {
        position: absolute;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .slideshow-images {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    .logo {
        left: 3rem;
    }


    /* Hide the images by default */

    .about-me-pic {
        object-fit: cover;
    }

    @keyframes fade {
        from {
            opacity: .3;
        }
        to {
            opacity: 1;
        }
    }

    .title {
        margin: 0;
        position: absolute;
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
    }

    .title::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -100px;
        transform: translateY(-50%);
        width: 350px;
        height: 350px;
        border-radius: 50%;
        background: #eee;
        z-index: -1;
    }
</style>
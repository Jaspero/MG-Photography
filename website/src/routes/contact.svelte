<style>
    .contact-hero {
        position: relative;
        z-index: 1;
        min-height: 100vh;
        display: flex;
        padding: 1em;
        background-image: url("/landing/contact-landing-picture.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .contact-hero-layer {
        background-color: rgba(30, 30, 30, 0.5);
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .contact-hero-title {
        display: flex;
        z-index: 3;
        flex-direction: column;
        max-width: var(--container);
        line-height: 0.8;
        width: 100%;
        margin: auto;
        color: white;
    }
    .contact-hero-title-1 {
        font-size: 4em;
        z-index: 3;
        padding-left: 1em;
    }
    .contact-hero-title-2 {
        font-size: 2.45em;
        z-index: 3;
        margin-left: 1.55em;
    }
    .contact-hero-link {
        position: absolute;
        z-index: 3;
        bottom: 1em;
        right: 1em;
        display: flex;
        flex-direction: column;
        border-bottom: .1em solid;
        line-height: 1;
        padding-bottom: .25em;
        text-align: center;
        color: white;
    }
    .contact-hero-link-1 {
        font-size: 1em;
        z-index: 3;
    }
    .contact-hero-link-2 {
        font-size: 1.95em;
        z-index: 3;
    }

    .about-me-background{
        background: #e8e8e8;
    }
    .about-me-content {
        position: relative;
        z-index: 1; /* Gallery negative margin is overlapping this section */
        background: #e8e8e8;
        text-align: center;
        font-family: 'Simplo', sans-serif;
        display: flex;
        flex-wrap: wrap;
        max-width: 70em;
        margin: 0 auto;
    }
    .contact-content {
        position: relative;
        z-index: 1; /* Gallery negative margin is overlapping this section */
        background: #e8e8e8;
        text-align: center;
        font-family: 'Simplo', sans-serif;
        width: 50%;
    }
    .contact-content-title {
        font-family: 'Simplo', sans-serif;
    }
    .contact-content-title-1 {
        font-family: 'Simplo', sans-serif;
        background: #e8e8e8;
        margin: 3em 0 3em 0;
        width: 100%;
    }
    .contact-content-title-2 {
        border-bottom: .1em solid;
        letter-spacing: .5em;
        color: #00b1d2;
        font-family: 'Simplo', sans-serif;
        font-size: 1.3em;
        margin: auto;
    }
    .contact-content-title-3 {
        display: block;
        font-size: 1em;
        font-family: 'Simplo', sans-serif;
        max-width: 23em;
        font-style: oblique;
        font-weight: bold;
        margin: auto;
        margin-top: 2em;
    }
    .contact-content-paragraph {
        max-width: 23em;
        letter-spacing: .1em;
        font-family: 'Simplo', sans-serif;
        font-size: 1em;
        margin: auto;
        margin-top: 2em;
    }
    .contact-content-picture {
        z-index: 5;
        width: 50%;
    }
    .contact-image{
        max-width: 23em;
        margin: auto;
        box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.3);
        margin-top: 10%;
    }

    @media (max-width: 1100px) {
        .contact-hero-title-1 {
            font-size: 3em;
            padding-left: 1em;
        }

        .contact-hero-title-2 {
            font-size: 1.75em;
            margin-left: 1.70em;
        }
    }
    @media (max-width: 600px) {
        .contact-hero-title-1 {
            font-size: 3.25em;
            color: white;
        }
        .contact-hero-title-2 {
            font-size: 2em;
            color: white;
        }
        .contact-hero {
            background-position: 70% 50%;
        }
        .contact-hero-link {
            flex: border-box;
            border-bottom: .1em solid;
            line-height: 1;
            padding-bottom: .25em;
            text-align: center;
            color: white;
        }
        .contact-content-title-2 {
            margin: 1em 1em 1em 1em;
            border-bottom: .1em solid;
            letter-spacing: .5em;
            color: #00b1d2;
            font-family: 'Simplo', sans-serif;
        }
        .contact-content-title-1 {
            margin-bottom: 3em;
        }
        .contact-content {
            position: relative;
            z-index: 1; /* Gallery negative margin is overlapping this section */
            background: #e8e8e8;
            text-align: center;
            font-family: 'Simplo', sans-serif;
            width: 100%;
        }
        .contact-content-picture {
            width: 100%;
        }
    }
</style>

<svelte:head>
    <title>MG - Contact</title>
</svelte:head>

<section class="contact-hero">
    <h1 class="contact-hero-title">
        <span class="contact-hero-title-1">ABOUT ME</span>
        <span class="contact-hero-title-2">& CONTACT INFO</span>
    </h1>
    <a class="contact-hero-link" href="mailto:marko.vranjesevic92@gmail.com">
        <span class="contact-hero-link-1">FOR ANY REQUESTS</span>
        <span class="contact-hero-link-2">E-MAIL ME</span>
    </a>
    <div class="contact-hero-layer">
    </div>
</section>

<div class="about-me-background">
    <div class="about-me-content">
        <span class="contact-content-title-1">MEET ME</span>
        <section class="contact-content">
            <div class="contact-content-title">
            <a href="contact" class="contact-content-title-2">ABOUT ME</a>
            <span class="contact-content-title-3">“When work, commitment and pleasure all become one and you reach that deep well where passion lives, nothing is impossible.”</span>
            <p class="contact-content-paragraph">I’m Mislav Gelencir, a passionate professional portrait, event and property photographer. Worked for many years in a different field until I finally understood that only photography would satisfy me as a life-long career. Photography is a lifestyle choice for me and I’ve allowed its creative drive and adventurous spirit to work with me. My goal as a photographer is to look past the face we present to capture something deeper. Sometimes this results in creating a bright, eye-catching image, and sometimes a more poetic study of the face. Nothing motivates me more than the special bond I create with my valued clients.</p>
         </div>
        </section>
        <div class="contact-content-picture">
            <img class="contact-image" src="/contact-page-pic-1.png" alt="MG">
        </div>
    </div>
</div>


<style>
    .contact-hero {
        position: relative;
        min-height: 100vh;
        display: flex;
        padding: 1em;
        background-image: url("../landing/landing-web-1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .contact-hero-title {
        display: flex;
        flex-direction: column;
        max-width: var(--container);
        line-height: 0.8;
        width: 100%;
        margin: auto;
        color: white;
    }
    .contact-hero-title-1 {
        font-size: 4em;
        padding-left: 1em;
    }
    .contact-hero-title-2 { font-size: 2.45em; }
    .contact-hero-link {
        position: absolute;
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
    .contact-hero-link-1 { font-size: 1em; }
    .contact-hero-link-2 { font-size: 1.95em; }

    .about-me-content {
        position: relative;
        z-index: 1; /* Gallery negative margin is overlapping this section */
        background: #e8e8e8;
        padding: 4em 1em;
        text-align: center;
        font-family: 'Simplo', sans-serif;
    }
    .contact-content {
        position: relative;
        z-index: 1; /* Gallery negative margin is overlapping this section */
        background: #e8e8e8;
        padding: 4em 1em;
        text-align: center;
        font-family: 'Simplo', sans-serif;
    }
    .contact-content-title {
        font-family: 'Simplo', sans-serif;
    }
    .contact-content-title-1 {
        display: block;
        margin-bottom: 3em;
        font-family: 'Simplo', sans-serif;
    }
    .contact-content-title-2 {
        margin: 1em 45em 1em 1em;
        border-bottom: .1em solid;
        letter-spacing: .5em;
        color: #00b1d2;
        font-family: 'Simplo', sans-serif;
    }

    .contact-content-title-3 {
        display: block;
        font-size: 1em;
        font-family: 'Simplo', sans-serif;
        max-width: 23em;
        margin-bottom: 3em;
        margin-top: 3em;
    }

    .contact-content-paragraph {
        max-width: 23em;
        letter-spacing: .1em;
        font-family: 'Simplo', sans-serif;
        font-size: .8em;
        margin-left: 3em;
        margin-bottom: 7em;
    }
    .contact-pictures-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        align-items: start;
        justify-items: start;
    }
    .contact-picture {
        border: 1px solid #ccc;
        box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
        max-width: 100%;
    }
</style>

<section class="contact-hero">
    <h1 class="contact-hero-title">
        <span class="contact-hero-title-1">ABOUT ME</span>
        <span class="contact-hero-title-2">& CONTACT INFO</span>
    </h1>

    <a class="contact-hero-link" href="mailto:marko.vranjesevic92@gmail.com">
        <span class="contact-hero-link-1">FOR ANY REQUESTS</span>
        <span class="contact-hero-link-2">E-MAIL ME</span>
    </a>
</section>

<div class="about-me-content">
    <section class="contact-content">
        <h2 class="contact-content-title">
            <span class="contact-content-title-1">MEET ME</span>
            <a href="contact" class="contact-content-title-2">ABOUT ME</a>
            <span class="contact-content-title-3">“When work, commitment and pleasure all become one and you reach that deep well where passion lives, nothing is impossible.”</span>
            <p class="contact-content-paragraph">I’m Mislav Gelencir, a passionate professional portrait, event and proprety photographer. Worked for many years in a different field until I finally understood that only photography would satisfy me as a life-long career. Photography is a lifestyle choice for me and I’ve allowed its creative drive and adventurous spirit to work with me. My goal as a photographer is to look past the face we present to capture something deeper. Sometimes this results in creating a bright, eye-catching image, and sometimes a more poetic study of the face. Nothing motivates me more than the special bond I create with my valued clients.</p>
        </h2>
    </section>

    <div class="contact-pictures">
        <section class="contact-pictures-grid">
            <img class="contact-picture" src="static/contact-page-pic-1.png" alt="contact-me-image-1">
            <img class="contact-picture" src="static/contact-page-pic-2.png" alt="contact-me-image-2">
            <img class="contact-picture" src="static/contact-page-pic-3.png" alt="contact-me-image-3">
        </section>
    </div>
</div>



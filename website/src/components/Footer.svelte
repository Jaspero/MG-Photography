<script>
  export let segment;
</script>

<style>
@font-face {
    font-family: 'Particle';
    src: url('../fonts/Particle-Regular.otf') format('opentype');
}

@font-face {
    font-family: 'Simplo';
    src: url('../fonts/Simplo-Light.otf') format('opentype');
    font-weight: normal;
}

@font-face {
    font-family: 'Simplo';
    src: url('../fonts/Simplo-Medium.otf') format('opentype');
    font-weight: bold;
}

@font-face {
    font-family: 'JosefinSans';
    src: url('../fonts/JosefinSans-Light_1.ttf') format('truetype');
    font-weight: normal;
}

@font-face {
    font-family: 'JosefinSans';
    src: url('../fonts/JosefinSans-Bold_1.ttf') format('truetype');
    font-weight: bold;
}
  .footer.home {
    display: none;
  }
  .footer-banner {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #E8E8E8;
    padding: 2em 1em;
  }
 
  .footer-banner-title {
    margin: 0 auto 2em;
    text-align: center;
    max-width: 50vw;
}
  .footer-banner-title-hey {
    display: block;
    font-family: Simplo;
    font-size: .5vw;
    color: #363636;
    animation: pero 3s up;
  }

  .footer-banner-title-talk {
    display: block;
    font-family: JosefinSans;
    font-size: 7vw;
    font-weight: normal;
    color: #363636;
    animation: pero 4.3s;
  }

  .footer-banner-title-if {
    font-family: JosefinSans;
    font-size: 5vw;
    font-weight: normal;
    color: #363636;
    animation: pero 5s;
  }

  .footer-banner-title-collaborations {
    font-family: JosefinSans;
    font-size: 5vw;
    font-weight: normal;
    color: #363636;
    animation: pero 6.7s;
  }

  .footer-banner-paragraph {
    font-family: Simplo;
    font-size: 0.8vw;
    margin: auto;
    text-align: center;
    max-width: 15vw;
    letter-spacing: 1px;
    color: #2c2c2c;
  }

  .footer-banner-title-any {
    font-family: JosefinSans;
    font-size: 1vw;
    font-weight: bold;
    color: #00B1D2;
    display: inline-block;
    border-bottom: 2px solid #00B1D2;
    animation: pero 6s;
  }

  .footer-banner-title-any > span {
    display: inline-block;
    padding: 0 .5em;
  }

  .contact-me-title {
    margin: 0 auto 5em;
    text-align: center;
    max-width: 50vw;
  }

  .contact-me {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #e8e8e8;
    padding: 5em 1em;
  }

  .footer-contact {
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #d9d9d9;
    padding: 1em;
  }

  .footer-contact-title {
    margin-top: 3em;
    padding: 0.5em;
    font-family: Simplo;
    font-size: 2vw;
    margin: auto;
    text-align: center;
    max-width: 15vw;
    letter-spacing: 1px;
  }

  .footer-contact-paragraph {
    font-family: Simplo;
    font-size: 0.7vw;
    margin: auto;
    text-align: center;
    max-width: 20vw;
    letter-spacing: 6px;
  }

  .youtube {
    font-family: Simplo light;
    font-size: 0.7vw;
    margin: left;
    text-align: left;
    display: inline-block;
    text-decoration: none;
  }

  .instagram {
    font-family: Simplo light;
    font-size: 0.7vw;
    display: inline-block;
    text-decoration: none;
    margin-left: 1em;
  }

  .footer-contact-social {
    display: inline-block;
    text-decoration: none;
    margin: left;
  }
</style>

<footer class="footer {segment === undefined ? 'home' : ''}">
  <section class="footer-banner">
    <h2 class="footer-banner-title">
      <span class="footer-banner-title-hey">HEY</span>
      <span class="footer-banner-title-talk">Talk to me</span>
      <span class="footer-banner-title-if">if you have some ideas for</span>
      <span class="footer-banner-title-any">
        <span>A</span>
        <span>N</span>
        <span>Y</span>
      </span>
      <span class="footer-banner-title-collaborations">collaborations</span>
    </h2>
    <p class="footer-banner-paragraph">
      WHETHER YOU ARE READY TO BOOK ME AS YOUR PHOTOGRAPHER, HAVE SOME QUESTIONS
      OR WANT TO CHAT ABOUT YOUR IDEAS AND SEE IF I WOULD BE THE RIGHT FIT FOR
      YOU, GIVE ME A CALL, SEND ME A MESSAGE OR AN E-MAIL AND I'LL GET BACK TO
      YOU AS SOON AS POSSIBLE.
    </p>
  </section>

  <section class="footer-contact">
    <h2 class="footer-contact-title">CONTACT ME</h2>
    <p class="footer-contact-paragraph">PLEASE GET IN CONTACT TO DISCUSS HOW I CAN HELP YOU WITH YOUR REQUIREMENTS.</p>
    <p class="footer-contact-paragraph">MAKE SURE TO VISIT MY SITE AGAIN.</p>
    <div class="footer-contact-social">
      <a href="." class="youtube">Youtube</a>
      <a href="." class="instagram">Instagram</a>
    </div>
  </section>
</footer>

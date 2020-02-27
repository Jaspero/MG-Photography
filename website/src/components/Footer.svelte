<style>
  .footer-banner {
    position: relative;
    z-index: 1; /* Gallery negative margin is overlapping this section */
    background: #e8e8e8;
    padding: 4em 1em;
    text-align: center;
  }
  .footer-banner-title {
    font-family: 'Simplo', sans-serif;
  }
  .footer-banner-title-2 {
    display: block;
    font-size: 3em;
  }
  .footer-banner-title-3 {
    display: block;
    font-size: 2em;
  }
  .footer-banner-title-4 {
    border-bottom: .1em solid;
    letter-spacing: .5em;
    color: #00b1d2;
  }
  .footer-banner-title-5 {
    font-size: 2em;
  }
  .footer-banner-paragraph {
    max-width: 25em;
    margin: 2em auto;
    letter-spacing: .1em;
   font-family: Simplo;
  }
  .footer-contact {
    height: 300px;
    background: #d9d9d9;
    font-family: 'Simplo', sans-serif;
  }
  .footer-contact-container{
    max-width: 45em;
    display: flex;
    margin: auto;
    padding: 2em;
  }
  .footer-contact-column{
    flex: 1;
  }
  .left{
    text-align: center;
    margin: auto;
  }
  .right{
    margin: auto;
  }
  .footer-icons{
    opacity: .5;
    transition: 300ms;
  }
  .footer-icons:hover{
    opacity: 1;
  }
  .footer-contact-title {
    font-size: 3em;
    color: #00b1d2;
  }
  .footer-contact-paragraph {
    max-width: 25em;
    margin: 1em auto;
    letter-spacing: .1em;
  }
  .footer-contact-social {
    display: inline-flex;
    align-items: center;
  }
  .footer-contact-social > img {
    margin-right: 1.5em
  }
  @media (max-width: 900px) {
    .footer-banner-title-3 {
      display: inline;
    }
  }
  @media (max-width: 600px) {
    .footer-contact-container {
      max-width: 25em;
      display: block;
    }
    .left{
      text-align: center;
      margin: auto;

    }
    .right{
      margin: 1em 3em;
      padding-top: 2em;
    }
    .footer-contact {
      height: 420px;
    }
  }
</style>

<footer class="footer-banner">
  <h2 class="footer-banner-title">
    <span class="footer-banner-title-2">Talk to me</span>
    <span class="footer-banner-title-3">if you have some ideas for</span>
    <span class="footer-banner-title-4">ANY</span>
    <span class="footer-banner-title-5">collaborations</span>
  </h2>
  <p class="footer-banner-paragraph">Whether you are ready to book me as your photographer, have some questions or want to chat about your ideas and see if I would be the right fit for you, give me a call, send me a message or an e-mail and I'll get back to you as soon as possible.</p>
</footer>

<footer class="footer-contact">
  <div class="footer-contact-container">
    <div class="footer-contact-column left">
      <a class="footer-contact-title" href="contact">Contact me</a>
      <p class="footer-contact-paragraph">Please get in contact to discuss how I can help you with your requirements.</p>
    </div>

    <div class="footer-contact-column right">
      <a class="footer-contact-social" href="http://instagram.com/mislavgelencir" target="_blank">
        <img class="footer-icons" src="instagramicon.svg" alt="Instagram">
        <span>instagram/mislavgelencir</span>
      </a>
      <a class="footer-contact-social" href="tel:00385976354350">
        <img class="footer-icons" src="phoneicon.svg" alt="Phone number">
        <span>+385976354350</span>
      </a>
      <a class="footer-contact-social" href="mailto:m.gelencir10@gmail.com">
        <img class="footer-icons" src="emailicon.svg" alt="E-mail">
        <span>m.gelencir10@gmail.com</span>
      </a>
    </div>
  </div>
</footer>

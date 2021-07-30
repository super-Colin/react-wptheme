import React from 'react'
import { Provider } from '../context/Context';

import FrontPageHero from '../partials/FrontPageHero';
import Header from "../partials/Header";
import LineAbyss from '../partials/LineAbyss';
import Footer from "../partials/Footer";

const Home = (props) => {
return (
<Provider router={props}>

  <FrontPageHero />

  <Header />
  <LineAbyss />

  <section className="quoteBio_container" style={{opacity:0}}>
    <h1 className="quoteBio_quote">SuperColin is the idea that anything is possible given enough effort.</h1>
    <div className="quoteBio_imgBg overlayTint_container">
      <img className="overlayTint_bgImage" src={window.PHP_VARS.template_directory + "/imgs/code-wide.png" } alt="" />
      <div className="overlayTint overlayTint_dark"></div>
      <div className="quoteBio_imgBg-content overlayTint_dark-content">
        <p>I like making things and understanding the simple principles that complex systems are built on. I started as
          a carpenter, making things with my hands. Later I became an electrician where I had to understand and build
          systems in my head before I could go to work with my hands.</p>
        <p>Then one day I found coding and had a new passion for life. I’ve since been teaching myself mostly web
          development and learning something new almost everyday! Coding is basically magic and who wouldn’t want to be
          a wizard??</p>
      </div>
    </div>

  </section>

  <h2 style={{width:"100%", textAlign:"center"}}>Recent Projects</h2>

  <section>

    <div className="designPreview_container">
      <div className="designPreview_innerContainer">

        <div className="designPreview_mobile">
          <h2 className="angledTitle designPreview_mobile-heading">Honeycomb Realty</h2>
          <div className="designPreview_mobile-phoneFrame">
            <img src={window.PHP_VARS.template_directory + "/imgs/honeycombRealty-mobile.png" } alt="" />
          </div>
        </div>

        <div className="designPreview_content">
          <div className="designPreview_content-title">
            <h2 className="angledTitle designPreview_content-title-heading">Honeycomb Realty</h2>
          </div>
          <div className="designPreview_content-body">
            <p> <a href="https://honeycombrealty.net/" target="_blank">Honeycomb Realty</a> was my first freelance
              website. It was a moderate size project that involved a lot collaboration with the client, and took
              multiple design iterations to create a feel that fit the brand; which was nothing but a logo at the time.
              It also involved SMTP for custom email aliases and an API connection for the local real eastate MLS.</p>
          </div>
          <div className="designPreview_content-desktopFrame">
            <img src={window.PHP_VARS.template_directory + "/imgs/honeycombRealty-desktop.min.png" } alt="" />
          </div>
        </div>

      </div>
    </div>



    <div className="designPreview_container">
      <div className="designPreview_innerContainer">

        <div className="designPreview_mobile">
          <h2 className="angledTitle designPreview_mobile-heading">Wireframe Designs</h2>
          <div className="designPreview_mobile-phoneFrame">
            <img src={window.PHP_VARS.template_directory + "/imgs/design-seeed-both.png" } alt="" />
          </div>
        </div>

        <div className="designPreview_content">
          <div className="designPreview_content-title">
            <h2 className="angledTitle designPreview_content-title-heading">Wireframe Designs</h2>
          </div>
          <div className="designPreview_content-body">
            <p>
              I've been doing a lot more design and wireframing in my development process over the last year or so. At first I enjoyed the simplicity of <a href="https://balsamiq.com/" target="_blank">Balsamiq</a> for wireframing, but quickly found it limiting. Now I prefer to use <a href="https://www.figma.com/" target="_blank">Figma</a> for my wireframing, <a href="https://www.gimp.org/" target="_blank">GIMP</a> for general image manipulation, and <a href="https://inkscape.org/" target="_blank">Inkscape</a> for SVG creation and editing. Part of the reason for this selection is definitely the fact that all these programs are cross platform, but they're also free and highly effective!
            </p>
          </div>
          <div className="designPreview_content-desktopFrame">
            <img src={window.PHP_VARS.template_directory + "/imgs/design-superTemplates-desktop.png" } alt="" />
          </div>
        </div>

      </div>
    </div>



  </section>

  <Footer />
</Provider>
)
}

export default Home
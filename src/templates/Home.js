import React from 'react'
import { Provider } from '../context/Context';

import FrontPageHero from '../partials/FrontPageHero';
import Header from "../partials/Header";
import Footer from "../partials/Footer";

const Home = (props) => {
  return (
    <Provider router={props} >
      <FrontPageHero />
      <Header />
      <h1>Home Page component</h1>
        <section className="quoteBio_container">
            <h1 className="quoteBio_quote">SuperColin is the idea that anything is possible given enough effort.</h1>
            <div className="quoteBio_imgBg overlayTint_container">
                <img className="overlayTint_bgImage" src={window.PHP_VARS.template_directory + "/imgs/code-wide.png"} alt="" />
                <div className="overlayTint overlayTint_dark"></div>
                <div className="quoteBio_imgBg-content overlayTint_dark-content">
                    <p>I like making things and understanding the simple principles that complex systems are built on. I started as a carpenter, making things with my hands. Later I became an electrician where I had to understand and build systems in my head before I could go to work with my hands.</p> 
                    <p>Then one day I found coding and had a new passion for life. I’ve since been teaching myself mostly web development and learning something new almost everyday! Coding is basically magic and who wouldn’t want to be a wizard??</p>
                </div>
            </div>


        </section>
      
      <Footer />
    </Provider>
  )
}

export default Home

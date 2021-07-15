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
      
      <Footer />
    </Provider>
  )
}

export default Home

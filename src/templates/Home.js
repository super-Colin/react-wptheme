import React from 'react'
import { Provider } from '../context/Context';

import FrontPageHero from '../partials/FrontPageHero';
import Header from "../partials/Header";
import LineAbyss from '../partials/LineAbyss';
import Footer from "../partials/Footer";

import FrontPageListing from '../partials/FrontPageListing';

const Home = (props) => {
return (
<Provider router={props}>

  <FrontPageHero />

  {/* <Header /> */}
  <LineAbyss />

  <FrontPageListing />
  
  {/* <Footer /> */}
</Provider>
)
}

export default Home
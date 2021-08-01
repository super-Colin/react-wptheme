import React from 'react'
import { Provider } from '../context/Context';

import FrontPageHero from '../partials/FrontPageHero';
import LineAbyss from '../partials/LineAbyss';

import FrontPageListing from '../partials/FrontPageListing';

// console.log('home component');

const Home = (props) => {
return (
<Provider router={props}>

  <FrontPageHero />

  <LineAbyss />

  <FrontPageListing />
  
</Provider>
)
}

export default Home
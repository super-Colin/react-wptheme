import React from 'react'
import { Provider } from '../context/Context';
import { motion } from 'framer-motion';

import FrontPageHero from '../partials/FrontPageHero';
// import LineAbyss from '../partials/LineAbyss';

import FrontPageListing from '../partials/FrontPageListing';

// console.log('home component');

const pageTransitions={
  in:{
    x: 0,
  },
  out:{
    x: "-100vw",
  }
}

const Home = (props) => {
return (
  <motion.div initial='out' animate='in' exit='out' >
<Provider router={props}> 

    {/* <FrontPageHero /> */}

    <FrontPageListing />

</Provider>
</motion.div>
)
}

export default Home
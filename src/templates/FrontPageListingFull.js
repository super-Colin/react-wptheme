import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Provider } from '../context/Context';
import { useLocation } from 'react-router';

import { AnimatePresence } from 'framer-motion';

import NotFound from "./NotFound";
import FrontPageHero from '../partials/FrontPageHero';
import FrontPageListing from '../partials/FrontPageListing';
import FrontPageListingSingle from '../partials/FrontPageListingSingle';


const FrontPageListingFull = (props) => {
  // console.log('FrontPageListingFull props', props);
  const location = useLocation();
  // console.log('FrontPageListingFull LOCATION', location);

  return (
<Provider router={props}> 

    {/* <FrontPageHero /> */}

      {/* <AnimatePresence exitBeforeEnter> */}
      <AnimatePresence >
        <Switch>
          {/* <Route exact path="/" component={FrontPageListing} /> */}
          {/* <Route path="/:test" component={FrontPageHero} />  */}
          <Route path="/:slug" component={FrontPageListingSingle} /> 
          <Route path="/:test" component={FrontPageHero} /> 
          <Route exact path="/" component={FrontPageListing} />
          <Route component={NotFound} />
        </Switch>
    </AnimatePresence>

</Provider>
  )
}

export default FrontPageListingFull

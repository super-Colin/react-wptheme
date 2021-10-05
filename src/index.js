import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { Provider } from './context/Context';

import { AnimatePresence } from 'framer-motion';

import NotFound from "./templates/NotFound";

import LineAbyss from './partials/LineAbyss';
import FrontPageHero from './partials/FrontPageHero';
// import FrontPageListingFull from './templates/FrontPageListingFull';
import FrontPageListing from './partials/FrontPageListing';
import FrontPageListingSingle from './partials/FrontPageListingSingle';

import Header from './partials/Header';

// https://stackoverflow.com/questions/47298325/react-router-dom-getting-props-location-from-within-browserrouter-component#answer-49003128
  const ContentWithRouter = withRouter( props => {return(

    <Provider router={props}>
      {/* <Header /> */}
        {/* {console.log('IN CONTENT props: ', props)}  */}

        {/* <FrontPageHero /> */}

        <AnimatePresence exitBeforeEnter>
        {/* <AnimatePresence > */}
          {/* <Switch location={props.location} key={props.location.path}> */}
          <Switch >
            <Route exact path="/" component={FrontPageListing} />
            <Route path="/:slug" component={FrontPageListingSingle} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>

      </Provider>

  )})

// {/* basname is only for local dev XAMPP environment REMOVE before building for prod DEV ENV */}
// {/* for example, my local WP home page frontend is at    http://localhost/scwp/    */}
// {/* https://reactrouter.com/web/api/BrowserRouter/basename-string */}
ReactDOM.render(
  // <BrowserRouter  > {/* // Production */}
  <BrowserRouter basename="/scwp" > {/* // DEV ENV ONLY, remove basename */}
    <LineAbyss />
    <ContentWithRouter />
  </BrowserRouter>
  , document.getElementById('root') 
);




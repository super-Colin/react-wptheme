import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { Provider } from './context/Context';


import NotFound from "./templates/NotFound";

import LineAbyss from './partials/LineAbyss';
import FrontPageListingFull from './templates/FrontPageListingFull';
import FrontPageListingSingle from '../partials/FrontPageListingSingle';

// https://stackoverflow.com/questions/47298325/react-router-dom-getting-props-location-from-within-browserrouter-component#answer-49003128
  const Content = withRouter( props => {return(
    <div> 
      {/* {console.log('IN CONTENT props: ', props)} */}
      <LineAbyss />
      <Provider router={props}> 

        {/* <FrontPageHero /> */}

        {/* <AnimatePresence exitBeforeEnter> */}
        <AnimatePresence >
          <Switch>
            <Route path="/" component={FrontPageListingFull} />
            <Route path="/:slug" component={FrontPageListingSingle} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Provider>


      {/* basname is only for local dev XAMPP environment REMOVE before building for prod DEV ENV */}
      {/* for example, my local WP home page frontend is at    http://localhost/scwp/    */}
      {/* https://reactrouter.com/web/api/BrowserRouter/basename-string */}
      <style>{"#wpadminbar{display: none;} html{margin-top: 0 !important;}"}</style> 
      {/* FOR DEV ENV, hide the wp admin bar on front end */}
      
    </div>
  )})

ReactDOM.render(
  <BrowserRouter basename="/scwp" > {/* // DEV ENV ONLY, remove basename */}
    <Content />
  </BrowserRouter>
  , document.getElementById('root') 
);




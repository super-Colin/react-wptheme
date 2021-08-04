import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

import { Provider } from './context/Context';

import NotFound from "./templates/NotFound";

import LineAbyss from './partials/LineAbyss';
// import FrontPageListingFull from './templates/FrontPageListingFull';
import FrontPageListing from './partials/FrontPageListing';
import FrontPageListingSingle from './partials/FrontPageListingSingle';

const IndexPage = () => {
  console.log('IndexPage props', this.props);
  return (
  <BrowserRouter basename="/scwp" > {/* // DEV ENV ONLY, remove basename */}
    
    <Provider router={props}> 
      <LineAbyss />
      <Switch>
        {/* <Route path="/" component={FrontPageListingFull} />
        <Route path="/:slug" component={FrontPageListingFull} /> */}
        <Route path="/" component={FrontPageListing} />
        <Route path="/:slug" component={FrontPageListingSingle} />
        <Route component={NotFound} />
      </Switch>
    </Provider>
  
    {/* basname is only for local dev XAMPP environment REMOVE before building for prod DEV ENV */}
    {/* for example, my local WP home page frontend is at    http://localhost/scwp/    */}
    {/* https://reactrouter.com/web/api/BrowserRouter/basename-string */}
    <style>{"#wpadminbar{display: none;} html{margin-top: 0 !important;}"}</style> 
    {/* FOR DEV ENV, hide the wp admin bar on front end */}
    
  </BrowserRouter>
  )
}


ReactDOM.render(
  
  <IndexPage />
  , document.getElementById('root') 
);


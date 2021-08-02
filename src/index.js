import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';



import Home from "./templates/Home";
import Single from './templates/Single';
import NotFound from "./templates/NotFound";

import LineAbyss from './partials/LineAbyss';

// const location = useLocation();



ReactDOM.render(
  <BrowserRouter basename="/scwp" >

    <AnimatePresence exitBeforeEnter>
      {/* <Switch location={location} key={location.pathname}> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:slug" component={Single} />

        <Route component={NotFound} />
        
      </Switch>
    </AnimatePresence>

    <LineAbyss />

  
    {/* basname is only for local dev XAMPP environment REMOVE before building for prod DEV ENV */}
    {/* for example, my local WP home page frontend is at    http://localhost/scwp/    */}
    {/* https://reactrouter.com/web/api/BrowserRouter/basename-string */}
    <style>{"#wpadminbar{display: none;} html{margin-top: 0 !important;}"}</style> 
    {/* FOR DEV ENV, hide the wp admin bar on front end */}
    
  </BrowserRouter>
  , document.getElementById('root') 
);


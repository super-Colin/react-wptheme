import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from "./templates/Home";
import Single from './templates/Single';
import NotFound from "./templates/NotFound";
console.log('index.js running');

const routes =(
  <BrowserRouter basename="/scwp" >
  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:slug" component={Single} />

      <Route component={NotFound} />
      
    </Switch>

  
    {/* basname is only for local dev XAMPP environment REMOVE before building for prod DEV ENV */}
    {/* for example, my local WP home page frontend is at    http://localhost/scwp/    */}
    {/* https://reactrouter.com/web/api/BrowserRouter/basename-string */}
    <style>{"#wpadminbar{display: none;} html{margin-top: 0 !important;}"}</style> 
    {/* FOR DEV ENV, hide the wp admin bar on front end */}
    
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root') );


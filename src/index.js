import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from "./templates/Home";
import Archive from "./templates/Archive";
import CodeArchive from "./templates/CodeArchive";
import DesignArchive from "./templates/DesignArchive";
import Single from "./templates/Single";
import NotFound from "./templates/NotFound";


const routes =(
  <BrowserRouter basename="/wtp" >
  
  {/* basname is only for local dev XAMPP environment REMOVE before building for prod DEV ENV */}
  {/* for example, my local WP home page frontend is at    http://localhost/wtp/    */}
  {/* https://reactrouter.com/web/api/BrowserRouter/basename-string */}
  <style>{"#wpadminbar{display: none;} html{margin-top: 0 !important;}"}</style> 
  {/* FOR DEV ENV, hide the wp admin bar on front end */}
  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/archive" component={Archive} />
      <Route path="/code/:slug" component={Single} />
      <Route path="/code/" component={CodeArchive} />
      <Route path="/design/:slug" component={Single} />
      <Route path="/design/" component={DesignArchive} />
      <Route path="/:slug" component={Single} />

      <Route component={NotFound} />
      
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root') );


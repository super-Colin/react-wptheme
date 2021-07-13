import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';


import Home from "./templates/Home";
import Archive from "./templates/Archive";
import Single from "./templates/Single";
import NotFound from "./templates/NotFound";


const routes =(
  <BrowserRouter basename="/wtp" >
  {/* basname is only for local dev XAMPP environment REMOVE before building for prod DEV ENV */}
  {/* https://reactrouter.com/web/api/BrowserRouter/basename-string */}
    <Switch>
      <Route exact path="/" component={Archive} />
      <Route exact path="/archive" component={Archive} />
      <Route path="/:slug" component={Single} />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root') );


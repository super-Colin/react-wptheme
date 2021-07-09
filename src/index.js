import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';


import Home from "./templates/Home";
import Archive from "./templates/Archive";
import Single from "./templates/Single";
import About from "./templates/About"
import NotFound from "./templates/NotFound";


const routes =(
  <BrowserRouter basename="/wtp" >
  {/* basname is only for local dev XAMPP environment REMOVE before building for prod */}
  {/* https://reactrouter.com/web/api/BrowserRouter/basename-string */}
    <Switch>
      <Route exact path="/" component={Archive} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/archive" component={Archive} />
      <Route path="/page/:slug" component={Single} />
      <Route path="/post/:slug" component={Single} />
      
      <Redirect exact from='/post/' to='/' />
      <Redirect exact from='/page/' to='/' />
      <Redirect exact from='/search/' to='/' /> 

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root') );


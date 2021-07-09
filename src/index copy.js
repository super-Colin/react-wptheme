import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


import App from './App';
import NotFound from "./templates/NotFound";

ReactDOM.render(

  <BrowserRouter basename="/wtp"> 
  {/* basname is only for local dev XAMPP environment REMOVE before building for prod */}
  {/* https://reactrouter.com/web/api/BrowserRouter/basename-string */}

    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>

    <Switch >
      {/* <Route exact path="/"><App /></Route> */}
      <Route path="/"><App /></Route>
      <Route ><NotFound /></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);




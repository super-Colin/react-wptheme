import React from 'react';
import {Provider} from '../context/Context'

import LineAbyss from '../partials/LineAbyss';
import FrontPageHero from '../partials/FrontPageHero';
import FrontPageListingSingle from '../partials/FrontPageListingSingle';

console.log('Single component');
const Single = (props) => {

  return (
    <Provider router={props} >
      <LineAbyss />

      <div className="Post">
        <div className="content-area">

          {/* <FrontPageHero /> */}

          <FrontPageListingSingle />
          {/* context.appError ? <p>error</p> : <FrontPageListingSingle /> */}
        </div>

      </div>
    </Provider>
  )

}
export default Single
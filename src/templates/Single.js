import React from 'react';
import {Provider} from '../context/Context'

import { motion } from 'framer-motion';

// import LineAbyss from '../partials/LineAbyss';
import FrontPageHero from '../partials/FrontPageHero';
import FrontPageListingSingle from '../partials/FrontPageListingSingle';

console.log('Single component');
const Single = (props) => {

  return (
    <motion.div initial={{ opacity:0}} animate={{ opacity:1}} exit={{ opacity:0}}>
    <Provider router={props} >
      {/* <LineAbyss /> */}

      <div className="Post">
        <div className="content-area">

          {/* <FrontPageHero /> */}

          <FrontPageListingSingle />
          {/* context.appError ? <p>error</p> : <FrontPageListingSingle /> */}
        </div>

      </div>
    </Provider>
    </motion.div>
  )

}
export default Single
import React from 'react';
import Header from '../partials/Header';
import DesignTheLoop from '../partials/DesignTheLoop';
import Footer from '../partials/Footer';
import {Provider} from '../context/Context';

const DesignSingle = (props) => {  

  return (
    <Provider router={props} >
      <div className="Post">
        <Header />
        <div className="content-area">
        <DesignTheLoop />
        </div>
        <Footer />
      </div>
    </Provider>
  )

}
export default DesignSingle
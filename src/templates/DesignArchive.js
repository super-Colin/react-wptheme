import React from 'react';
import Header from '../partials/Header';
import DesignTheLoop from '../partials/DesignTheLoop';
import Pager from '../partials/Pager';
import Footer from '../partials/Footer';
import {Provider} from '../context/Context';

const DesignArchive = (props) => {
  
  return (
    <Provider router={props} >
      <Header />
      <DesignTheLoop />
      <Footer />
    </Provider>
  )
}

export default DesignArchive

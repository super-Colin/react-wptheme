import React from 'react';
import Header from '../partials/Header';
import TheLoop from '../partials/TheLoop';
import Pager from '../partials/Pager';
import Footer from '../partials/Footer';
import {Provider} from '../context/Context';

const DesignArchive = (props) => {
  
  return (
    <Provider>
      <Header />
      <TheLoop />
      <Footer />
    </Provider>
  )
}

export default DesignArchive

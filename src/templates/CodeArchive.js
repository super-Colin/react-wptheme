import React from 'react';
import Header from '../partials/Header';
import CodeTheLoop from '../partials/CodeTheLoop';
import Pager from '../partials/Pager';
import Footer from '../partials/Footer';
import {Provider} from '../context/Context';

const CodeArchive = (props) => {
  
  return (
    <Provider router={props} >
      <Header />
      <CodeTheLoop />
      <Pager />
      <Footer />
    </Provider>
  )
}

export default CodeArchive
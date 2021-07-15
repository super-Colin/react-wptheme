import React from 'react';
import Header from '../partials/Header';
import CodeTheLoop from '../partials/CodeTheLoop';
import Footer from '../partials/Footer';
import {Provider} from '../context/Context';

const CodeSingle = (props) => {  

  return (
    <Provider router={props} >
      <div className="Post">
        <Header />
        <div className="content-area">
        <CodeTheLoop />
        </div>
        <Footer />
      </div>
    </Provider>
  )

}
export default CodeSingle
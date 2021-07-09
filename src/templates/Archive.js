import React from 'react'
import Header from '../partials/Header';
import TheLoop from '../partials/TheLoop';
import Pager from '../partials/Pager';
import Footer from '../partials/Footer';
import {Provider} from '../context/Context';

const Archive = (props) => {  
  
  let pageTitle = props.match.path === '/search/:term' ? 'Search Results' : '';

  return (
    <Provider router={props} >
      <div className="archive">
        <Header />
        <div className="content-area">
          <h1>{pageTitle}</h1>
          <TheLoop />
          <Pager />
        </div>
        <Footer />
      </div>
    </Provider>
  )    

}
export default Archive

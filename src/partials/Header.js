import React from 'react'
// import { Link, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SearchForm from '../partials/SearchForm';
import WithConsumer from '../context/WithConsumer.js';



const Header = ({context}) => {
  // update rest state for appropiate api calls for content
  function setRestType(e){
    let restType = e.target.dataset['posttype'];
    context.setRestType(restType);
  }



  return (

    <header id="masthead" className="site-header flatHeader_container">
      
      <div className="flatHeader_logo">
          <Link className="flatHeader_logo-link" to="/">
            <span>{"< "}</span>
            <img src={window.PHP_VARS['custom_logo_src']} alt="logo" />
            <span>{"/>"}</span>
          </Link>
      </div>

      <div className="flatHeader_itemsContainer">
        {/* <Link to="/code" >Code</Link> */}
        {/* <span className="flatHeader_name">Colin@SuperColin.dev</span> */}
      </div>
	</header>
  )
}

// export default Header
export default WithConsumer(Header);

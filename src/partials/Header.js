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

    <header id="masthead" className="site-header headerBump_container">

      <div className="headerBump_sideMenu headerBump_leftMenu">
        <Link to="/design" >Design</Link>
        
      </div>
      
      <div className="headerBump_bump">
          <Link className="headerBump_bump-link" to="/">
            <img src={window.PHP_VARS['custom_logo_src']} alt="logo" />
          </Link>
      </div>

      <div className="headerBump_sideMenu headerBump_rightMenu">
        <Link to="/code" >Code</Link>
      </div>
    {/* <SearchForm /> */}
	</header>
  )
}

// export default Header
export default WithConsumer(Header);

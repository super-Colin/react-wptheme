import React from 'react'
// import { Link, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SearchForm from '../partials/SearchForm';
import WithConsumer from '../context/WithConsumer.js';



const Header = ({context}) => {

  // Get domain Prefix for Links
  // const { pathname } = useLocation();
  // let  domainPrefix = "";
  // if(pathname == "/"){
  //   domainPrefix =  window.location.href.split('://')[1]; // ["http", "website.com/"]
  // }else{
  //   let domainPrefixMinusHttp = window.location.href.split('://')[1]; // ["http", "website.com/some"]
  //   domainPrefix = domainPrefixMinusHttp.split(pathname)[0]; // ["website.com"]
  // }
  // convert url to path for Links
  // const pageUrlToPath = (pageURL) => {
  //   let domainRelativePath = pageURL.split(domainPrefix)[1];
  //   return domainRelativePath;
  // }

  // Get Wordpress PHP Menus object from gloabal variable inserted by sc_importMenusToJs() in functions.php
  // const PHP_VARS = window.PHP_VARS;

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

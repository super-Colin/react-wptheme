import React from 'react'
import { Link, useLocation } from 'react-router-dom';
// import SearchForm from '../partials/SearchForm';
import { GET_PHP_MENUS } from './sc_importMenusToJs.js';
import WithConsumer from '../context/WithConsumer.js';



const Header = ({context}) => {

  // Get domain Prefix for Links
  const { pathname } = useLocation();
  let  domainPrefix = "";
  if(pathname == "/"){
    domainPrefix =  window.location.href.split('://')[1]; // ["http", "website.com/"]
  }else{
    let domainPrefixMinusHttp = window.location.href.split('://')[1]; // ["http", "website.com/some"]
    domainPrefix = domainPrefixMinusHttp.split(pathname)[0]; // ["website.com"]
  }
  // convert url to path for Links
  const pageUrlToPath = (pageURL) => {
    let domainRelativePath = pageURL.split(domainPrefix)[1];
    // console.log( 'pageUrl, prefix, split, domainRelativePath is: ', pageURL, domainPrefix, pageURL.split(domainPrefix), domainRelativePath);
    return domainRelativePath;
  }

  // Get PHP Menus
  let PHP_MENUS = GET_PHP_MENUS();
  let headerMenuItems = PHP_MENUS['header_menu_items'];


  function setRestType(e){
    let restType = e.target.dataset['posttype'];
    context.setRestType(restType);
  }



  return (
    <div>
      <ul>
        <li><Link to="/archive" data-posttype='component' onClick={setRestType} >Archive</Link></li>

        {headerMenuItems.map((menuItem)=>{
          return (
            <li key={menuItem['ID']}>
              <Link to={ pageUrlToPath(menuItem['url']) } onClick={setRestType} data-posttype={menuItem['object']} >{menuItem['title']}</Link>
            </li>
          )
        })}

      </ul>
      {/* <SearchForm /> */}
      <button onClick={() => console.log(context)}>Log Context</button>
      <hr />
    </div>
  )
}

// export default Header
export default WithConsumer(Header);

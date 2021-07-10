import React, { useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom';
// import SearchForm from '../partials/SearchForm';
import { GET_PHP_MENUS, formatMenuItemToHTML } from './sc_importMenusToJs.js';



const Header = () => {
  const [sendToNextPage, setSendToNextPage] = useState({
    "redirect": false,
    "redirectUrl": null,
  });
  const { pathname } = useLocation();
  let  domainPrefix = "";
  if(pathname == "/"){
    domainPrefix =  window.location.href;
  }else{
    domainPrefix = window.location.href.split(pathname)[0];
  }
  // console.log(window.location.href.split(pathname), domainPrefix);

  let PHP_MENUS = GET_PHP_MENUS();
  let headerMenuItems = PHP_MENUS['header_menu_items'];

  const pageUrlToPath = (pageURL) => {
    let domainRelativePath = pageURL.split(domainPrefix)[1];
    // console.log( 'prefix, domainRelativePath is: ', domainPrefix, pageURL.split(domainPrefix), domainRelativePath);
    return domainRelativePath;
  }

  // const createNewRedirect = ()=>{
  //   if(sendToNextPage.redirect){
  //     let redirectUrl = sendToNextPage.redirectUrl;
  //     let newUrl = pageUrlToPath(redirectUrl);
  //     setSendToNextPage({ "redirect":false, "redirectUrl":null });
  //     console.log('REDIRECT', redirectUrl, newUrl);
  //     return <Redirect to={ pageUrlToPath(redirectUrl) } />
  //   }
  // }


  return (
    <div>
      <ul>
        {headerMenuItems.map((menuItem)=>{
          /* console.log(menuItem);
          console.log('menuItem url is:', menuItem['url'], pageUrlToPath(menuItem['url']) ); */
          return (
            <li key={menuItem['ID']}>
              <Link to={ pageUrlToPath(menuItem['url']) }>{menuItem['title']}</Link>
              {/* <a href={ pageUrlToPath(menuItem['url'])} >{menuItem['title']}</a> */}
              {/* <span onClick={()=> setSendToNextPage({ "redirect":true, "redirectUrl":menuItem['url'] }) } >{menuItem['title']}</span> */}
            </li>
          )
        })}

        {/* {sendToNextPage.redirect ? createNewRedirect() : null} */}

      </ul>
      {/* <SearchForm /> */}
    </div>
  )
}

export default Header

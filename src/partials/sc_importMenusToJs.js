import React from 'react'
import { Link } from 'react-router-dom';
// console.log(PHP_MENUS); // PHP_MENUS is an object

export function GET_PHP_MENUS(){
  return window.PHP_MENUS;
}

// export function formatMenuItemsToHTML(menuItems){
//   console.log('formatMenuHTML is recieving: ', menuItems);
//   console.log( window.location.href );
//   var jsxElems = [];
//   menuItems.forEach( (menuItem)=>{
//     jsxElems.push(<Link to={"/" + menuItem.url}></Link>)
//   });
//   return jsxElems;
// }
export function formatMenuItemToHTML(menuItem){
  // let linkPrefix = item.type === 'page' ? '/page/' : '/post/';
  console.log( menuItem );
  // return(
  //   <li key={menuItem['ID']}>
  //     <Link to={menuItem['ID'].toString()}>{menuItem.title}</Link>
  //   </li>
  // )
}
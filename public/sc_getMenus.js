
// console.log(PHP_MENUS); // PHP_MENUS is an array of objects

function formatMenuItemsToHTML(menuItzemsz){
  if(menuItzemsz){
    var menuItems = [];
    for(var i = 0; i < menuItzemsz.length; i++){
      var menuItem = PHP_MENUS[i];
      menuItems.push('<li><a href="' + menuItem.url + '">' + menuItem.title + '</a></li>');
    }
    return menuItems.join('');
  }
}
console.log( formatMenuItemsToHTML(PHP_MENUS['header_menu_items']) );


// console.log(PHP_MENUS); // PHP_MENUS is an object

function formatMenuItemsToHTML(menuItems){
  let html = '';
  for(let i = 0; i < menuItems.length; i++){
    html += '<li><a href="' + menuItems[i].url + '">' + menuItems[i].title + '</a></li>';
  }
  return html;
}

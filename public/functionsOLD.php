<?php


function sc_importMenusToJs(){
  echo "~~~IMPORT MENUS FUNCTION~";

  $menuJsPath = get_template_directory_uri() . '/react-src/public/sc_getMenus.js';
  echo '<br />' . $menuJsPath . '<br />';

  wp_enqueue_script('sc_getMenus', $menuJsPath, '1', false);
  

  $menus = wp_get_nav_menus( array('primary') );

  wp_add_inline_script( 'sc_getMenus', 'const PHP_getMenus = ' . json_encode( array(
    'menus' => $menus,
    'otherParam' => 'some value',
  ) ), 'before' );

  echo "~IMPORT MENUS FUNCTION~~~";
}
// add_action("wp_enqueue_scripts", "sc_importMenusToJs");





// https://developer.wordpress.org/reference/functions/wp_add_inline_script/



// $sc_menus = wp_get_nav_menus();
// echo "<br /> <br />";
// print_r($sc_menus);

// $sc_menu_items = wp_get_nav_menu_items('primary');
// echo "<br /> <br />";
// print_r($sc_menu_items);

// $sc_menu_items = wp_nav_menu( array('primary') );
// echo "<br /> <br />";
// print_r($sc_menu_items);






function sc_register_nav_menu(){
  register_nav_menus(array(
    'sc_header_menu' => __('SC Header Menu'),
    'sc_footer_menu' => __('SC Footer Menu')
  ));
}
// add_action('init', 'sc_register_nav_menu');






// wp_enqueue_script( 'wpdocs-my-script', 'https://url-to/my-script.js' );
// wp_add_inline_script( 'wpdocs-my-script', 'const MYSCRIPT = ' . json_encode( array(
//     'ajaxUrl' => admin_url( 'admin-ajax.php' ),
//     'otherParam' => 'some value',
// ) ), 'before' );
// echo 'some bs';

// $sc_path = get_template_directory_uri() . '/react-src/public/sc_getMenus.js';
// $sc_path2 = get_template_directory_uri() . '/public/sc_getMenus.js';
// $sc_path3 = get_stylesheet_directory_uri() . '/sc_getMenus.js';
// echo $sc_path . '<br />';
// echo $sc_path2 . '<br />';
// echo $sc_path3 . '<br />';
// wp_enqueue_script('sc_getMenus', $sc_path, array(), '1', false);
// wp_enqueue_script('sc_getMenus2', $sc_path2, array(), '1', false);
// wp_enqueue_script('sc_getMenus3', $sc_path3, array(), '1', false);


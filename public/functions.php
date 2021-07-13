<?php 


// Register theme menu locations
function register_sc_menus() {
    register_nav_menus(
        array(
        'header-menu' => __( 'Header Menu' ),
        'footer-menu' => __( 'Footer Menu' )
        )
    );
}
// Assign menus to a global JS variable on front-end page load
function sc_importMenusToJs(){
    $menuJsPath = get_template_directory_uri() . '/sc_importMenusToJs.js';
    $menuLocations = get_nav_menu_locations();

    wp_enqueue_style( 'sc_style', get_stylesheet_uri(), array(), '1.0.0' );
    wp_enqueue_script('sc_getMenus', $menuJsPath, '1', false);

    wp_add_inline_script( 'sc_getMenus', 'window.PHP_MENUS = ' . json_encode( array(
        'header_menu_items' => wp_get_nav_menu_items( $menuLocations['header-menu'] ),
        'footer_menu_items' => wp_get_nav_menu_items( $menuLocations['footer-menu'] ),
    ) ), 'before' );
}
add_action( 'init', 'register_sc_menus' );
add_action( 'wp_enqueue_scripts', 'sc_importMenusToJs' );





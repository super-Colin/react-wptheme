<?php 


// Register theme menu locations
function register_sc_menus() {
    register_nav_menus(
        array(
        'header-menu-left' => __( 'Header Menu Left' ),
        'header-menu-right' => __( 'Header Menu Right' ),
        'footer-menu' => __( 'Footer Menu' )
        )
    );
}
// Assign PHP variables to a global JS variable on front-end page load
function sc_importMenusToJs(){
    $menuJsPath = get_template_directory_uri() . '/sc_importMenusToJs.js';
    // $menuLocations = get_nav_menu_locations();

    wp_enqueue_style( 'sc_style', get_stylesheet_uri(), array(), '1.0.0' );
    wp_enqueue_script('sc_getMenus', $menuJsPath, '1', false);

    wp_add_inline_script( 'sc_getMenus', 'window.PHP_VARS = ' . json_encode( array(
        // 'footer_menu_items' => wp_get_nav_menu_items( $menuLocations['footer-menu'] ),
        'custom_logo_src' => sc_get_custom_logo_src(),
        'categories' => get_categories(),
        'template_directory' => get_template_directory_uri()
    ) ), 'before' );
}

function sc_custom_logo_setup(){
    $defaults = array(
        'height'               => 300,
        'width'                => 300,
        'flex-height'          => false,
        'flex-width'           => false,
        'header-text'          => array( 'site-title', 'site-description' ),
        'unlink-homepage-logo' => true, 
    );
    add_theme_support( 'custom-logo', $defaults );
}

function sc_get_custom_logo_src(){
    $custom_logo_id = get_theme_mod('custom_logo');
    $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
    if(empty($image)){
        // echo "logo image was empty";
        return get_template_directory_uri() . '/imgs/logo.png';
    }
    return  $image[0];
}



add_action( 'init', 'register_sc_menus' );
add_action( 'wp_enqueue_scripts', 'sc_importMenusToJs' );

add_action( 'after_setup_theme', 'sc_custom_logo_setup' );




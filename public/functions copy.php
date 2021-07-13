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





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// https://make.wordpress.org/core/2020/02/25/wordpress-5-4-introduces-new-hooks-to-add-custom-fields-to-menu-items/
// function wporg_my_custom_field() {
//     esc_html_e( 'Howdy! WordPress 5.4 is coming!', 'wporg' );
// }
// add_action( 'wp_nav_menu_item_custom_fields', 'wporg_my_custom_field' );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// // Register new rest api field
// function register_nav_menu_rest_field() {
//     // register_rest_field( 'post', 'featured_image_src', array(
//     register_rest_field( 'nav_menu_item', 'custom_field', array(
//         'get_callback' => function ( $post_arr ) {
//             // $image_src_arr = wp_get_attachment_image_src( $post_arr['featured_media'], 'medium' );
//             // $image_src_arr =  $post_arr['post_type'];
//             // return $image_src_arr[0];
//             return $post_arr['post_type'];
//         },
//         'update_callback' => null,
//         'schema' => null
//     ) );
// }
// add_action( 'rest_api_init', 'register_nav_menu_rest_field');

// add_action( 'rest_api_init', function () {
//     register_rest_field( 'nav_menu_item', 'custom_field2', array(
//         'get_callback' => function ( $post_arr ) {
//             return 'custom2';
//         },
//         'update_callback' => null,
//         'schema' => null
//     ) );
// } );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// /**
// * Add custom fields to menu item
// *
// * This will allow us to play nicely with any other plugin that is adding the same hook
// *
// * @param  int $item_id 
// * @params obj $item - the menu item
// * @params array $args
// */
// function kia_custom_fields( $item_id, $item ) {

// 	wp_nonce_field( 'custom_menu_meta_nonce', '_custom_menu_meta_nonce_name' );
// 	$custom_menu_meta = get_post_meta( $item_id, '_custom_menu_meta', true );
// 	?>

<!-- // 	<input type="hidden" name="custom-menu-meta-nonce" value="<?php // echo wp_create_nonce( 'custom-menu-meta-name' ); ?>" />

// 	<div class="field-custom_menu_meta description-wide" style="margin: 5px 0;">
//     <span class="description"><?php // _e( "Extra Field", 'custom-menu-meta' ); ?></span>
//     <br />

//     <input type="hidden" class="nav-menu-id" value="<?php // echo $item_id ;?>" />

//     <div class="logged-input-holder">
//         <input type="text" name="custom_menu_meta[<?php // echo $item_id ;?>]" id="custom-menu-meta-for-<?php // echo $item_id ;?>" value="<?php // echo esc_attr( $custom_menu_meta ); ?>" />
//         <label for="custom-menu-meta-for-<?php // echo $item_id ;?>">
//             <?php // _e( 'Custom menu text', 'custom-menu-meta'); ?>
//         </label>
//     </div>

// 	</div> -->
<?php
// }
// add_action( 'wp_nav_menu_item_custom_fields', 'kia_custom_fields', 10, 2 );


// /**
// * Save the menu item meta
// * 
// * @param int $menu_id
// * @param int $menu_item_db_id	
// */
// function kia_nav_update( $menu_id, $menu_item_db_id ) {

// 	// Verify this came from our screen and with proper authorization.
// 	if ( ! isset( $_POST['_custom_menu_meta_nonce_name'] ) || ! wp_verify_nonce( $_POST['_custom_menu_meta_nonce_name'], 'custom_menu_meta_nonce' ) ) {
// 		return $menu_id;
// 	}

// 	if ( isset( $_POST['custom_menu_meta'][$menu_item_db_id]  ) ) {
// 		$sanitized_data = sanitize_text_field( $_POST['custom_menu_meta'][$menu_item_db_id] );
// 		update_post_meta( $menu_item_db_id, '_custom_menu_meta', $sanitized_data );
// 	} else {
// 		delete_post_meta( $menu_item_db_id, '_custom_menu_meta' );
// 	}
// }
// add_action( 'wp_update_nav_menu_item', 'kia_nav_update', 10, 2 );


// /**
// * Displays text on the front-end.
// *
// * @param string   $title The menu item's title.
// * @param WP_Post  $item  The current menu item.
// * @return string      
// */
// function kia_custom_menu_title( $title, $item ) {

// 	if( is_object( $item ) && isset( $item->ID ) ) {

// 		$custom_menu_meta = get_post_meta( $item->ID, '_custom_menu_meta', true );

// 		if ( ! empty( $custom_menu_meta ) ) {
// 			$title .= ' - ' . $custom_menu_meta;
// 		}
// 	}
// 	return $title;
// }
// add_filter( 'nav_menu_item_title', 'kia_custom_menu_title', 10, 2 );






// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~































// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//change base permalinks to match react router
    // add_action('init','barebones_change_base_permalinks');
    // function barebones_change_base_permalinks() {    
    //     global $wp_rewrite;
    //     $wp_rewrite->permalink_structure = 'post/%pagename%/';
    //     $wp_rewrite->page_structure = 'page/%pagename%/';    
    //     $wp_rewrite->flush_rules();    
    // } 


//adds a custom route for search
//https://benrobertson.io/wordpress/wordpress-custom-search-endpoint
    //     function barebones_register_search_route() {

    //         register_rest_route('wp/v2', '/search', [
    //             'methods' => WP_REST_Server::READABLE,
    //             'callback' => 'barebones_ajax_search',
    //             'args' => barebones_get_search_args()
    //         ]);
    //     }
    // add_action( 'rest_api_init', 'barebones_register_search_route');

// function barebones_ajax_search( $request ) {
//     $posts = [];
//     $results = [];
//     // check for a search term

//     if( isset($request['s'])) :
//         // get posts 

//         $args = [
//             'post_type' => array( 'post', 'page'), 
//             's' => $request['s'], 
//             'posts_per_page' => 10, 
//             'paged' => $request['page']
//         ];
//         $query = new WP_Query( $args );
//         $posts = $query->posts;

//         $total = $query->found_posts;
//         $totalPages = $query->max_num_pages;

//         foreach($posts as $post):  

//             $item = [
//                 'id' => $post->ID,
//                 'author_name' => get_the_author_meta('display_name', $post->post_author),                
//                 'slug' => $post->post_name,
//                 'type' => $post->post_type,
//                 'title' => array(
//                     'rendered' => $post->post_title
//                 ),
//                 'content' => array(
//                     'rendered' => $post->post_content
//                 ),
//                 'excerpt' => array(
//                     'rendered' => $post->post_excerpt
//                 ),
//             ];

//             $categories = get_the_category($post->ID);

//             if(!empty($categories[0])){  
//                 $catArr = array();
//                 $catArr[] = $categories[0]->term_id;
//                 $item['category_name'] = $categories[0]->name; 
//                 $item['categories'] = $catArr;              
//             }           

//             $results[] = $item;
//         endforeach; 

//     endif;

//     // if( empty($results) ) :
//     //     return new WP_Error( 'front_end_ajax_search', 'No results');
//     // endif;

//     $response = new WP_REST_Response( $results );
//     $response->header( 'X-WP-Total', $total);
//     $response->header( 'X-WP-TotalPages', $totalPages );

//     return $response;     
// }

// function barebones_get_search_args() {

//     $args = [];
//     $args['s'] = [
//         'description' => esc_html__( 'The search term.', 'barebones_' ),
//         'type'        => 'string',
//     ]; 

//     return $args;
// }

// function barebones_allow_anonymous_comments() {
//     return false;
// }
// add_filter('rest_allow_anonymous_comments','barebones_allow_anonymous_comments');

// function barebones_add_to_post_api (){
//     register_rest_field( 'post', 'author_name', array(
//         'get_callback' => function( $post ) {
//             return get_the_author_meta('display_name', $post['author']);
//         }
//     ));
//     register_rest_field( 'post', 'category_name', array(
//         'get_callback' => function( $post ) {
//             $categories = get_the_category($post['id']);
//             return $categories[0]->name; 
//         }
//     ));
// }
// add_action( 'rest_api_init', 'barebones_add_to_post_api');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
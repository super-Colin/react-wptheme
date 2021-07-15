<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Honeycomb
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> style="margin:0 !important;">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <?php wp_head(); ?>

    <!-- <link rel="preconnect" href="https://fonts.gstatic.com"> -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&family=Roboto+Slab&display=swap" rel="stylesheet"> 
</head>


<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'honeycomb' ); ?></a>


    <section class="movingSquares_container">
        <div class="movingSquares_content">
            <h2 class="movingSquares_content-title"></h2> <br />
            <img src="<?php echo get_template_directory_uri() ?>/imgs/sc-diamond.png" alt="">
        </div>

        <script>
            function makeMovingSquares(){
                const numberOfSquares = 10;
                const parentElem = document.querySelector('.movingSquares_container');
                let i = 0;

                while (i < numberOfSquares) {
                    parentElem.innerHTML += '<div class="movingSquare_square movingSquare_square-' + i + '"></div>'
                    i++;
                } 
            }
            makeMovingSquares();
        </script>
        

    </section>



    <header id="masthead" class="site-header headerBump_container">

        <!-- <a class="title" href="<?php // echo get_site_url() ?>">Coming</a> -->
        <!-- <a href="#" style="text-decoration: none;">Coming</a> -->
        <a href="#" style="text-decoration: none;"></a>
        <div class="headerBump_bump">
            <a class="headerBump_bump-link" href="/" style="text-decoration: none;">
                <img class="headerBump_bump-link-logo" src="<?php echo get_template_directory_uri() ?>/imgs/sc-diamond.png" alt="">
            </a>
        </div>
        <!-- <a href="#" style="text-decoration: none;">Soon</a> -->
        <a href="#" style="text-decoration: none;"></a>
	</header><!-- #masthead -->

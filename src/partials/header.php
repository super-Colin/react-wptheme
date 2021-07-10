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

    <!-- <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans&display=swap" rel="stylesheet">  -->
    
    <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'honeycomb' ); ?></a>

    <header id="masthead" class="site-header headerBump_container">
        <!-- <a class="title" href="<?php // echo get_site_url() ?>">Coming</a> -->
        <!-- <a href="#">Coming</a> -->
        <a href="#" style="text-decoration: none;"></a>
        <div class="headerBump_bump">
            <a class="headerBump_bump-link" href="#">
                <img class="headerBump_bump-link-logo" src="<?php echo get_template_directory_uri() ?>/imgs/sc-diamond.png" alt="">
            </a>
        </div>
        <!-- <a href="#">Soon</a> -->
        <a href="#" style="text-decoration: none;"></a>
	</header><!-- #masthead -->

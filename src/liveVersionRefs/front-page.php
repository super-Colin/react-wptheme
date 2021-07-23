<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Honeycomb
 */

get_header('home');
?>

	<main id="primary" class="site-main">
    
    `<section>

        <div class="designPreview_container">
            <div class="designPreview_innerContainer">

                <div class="designPreview_mobile">
                    <h2 class="angledTitle designPreview_mobile-heading">Honeycomb Realty</h2>
                    <div class="designPreview_mobile-phoneFrame">
                        <img src="<?php echo get_template_directory_uri() ?>/imgs/honeycombRealty-mobile.png" alt="">
                    </div>
                </div>

                <div class="designPreview_content">
                    <div class="designPreview_content-title">
                        <h2 class="angledTitle designPreview_content-title-heading">Honeycomb Realty</h2>
                    </div>
                    <div class="designPreview_content-body">
                        <p> <a href="https://honeycombrealty.net/" target="_blank">Honeycomb Realty</a> was my first freelance website. It was a moderate size project that involved a lot collaboration with the client, and took multiple design iterations to create a feel that fit the brand; which was nothing but a logo at the time. It also involved SMTP for custom email aliases and an API connection for the local real eastate MLS.</p>
                    </div>
                    <div class="designPreview_content-desktopFrame">
                        <img src="<?php echo get_template_directory_uri() ?>/imgs/honeycombRealty-desktop.min.png" alt="">
                    </div>
                </div>

            </div>
        </div>



        <div class="designPreview_container">
            <div class="designPreview_innerContainer">

                <div class="designPreview_mobile">
                    <h2 class="angledTitle designPreview_mobile-heading">Wireframe Designs</h2>
                    <div class="designPreview_mobile-phoneFrame">
                        <img src="<?php echo get_template_directory_uri() ?>/imgs/design-seeed-both.png" alt="">
                    </div>
                </div>

                <div class="designPreview_content">
                    <div class="designPreview_content-title">
                        <h2 class="angledTitle designPreview_content-title-heading">Wireframe Designs</h2>
                    </div>
                    <div class="designPreview_content-body">
                        <!-- <p>Honeycomb Realty was my first freelance website. It was a moderate size project that involved a lot collaboration with the client, and took multiple design iterations to create a feel that fit the brand; which was nothing but a logo at the time. It also involved SMTP for custom email aliases and an API connection for the local real eastate MLS.</p> -->
                        <p>I've been doing a lot more design and wireframing in my development process over the last year or so. At first I enjoyed the simplicity of <a href="https://balsamiq.com/" target="_blank">Balsamiq</a> for wireframing, but quickly found it limiting. Now I prefer to use <a href="https://www.figma.com/" target="_blank">Figma</a> for my wireframing, <a href="https://www.gimp.org/" target="_blank">GIMP</a> for general image manipulation, and <a href="https://inkscape.org/" target="_blank">Inkscape</a> for SVG creation and editing. Part of the reason for this selection is definitely the fact that all these programs are cross platform, but they're also free and highly effective!
                        </p>
                    </div>
                    <div class="designPreview_content-desktopFrame">
                        <img src="<?php echo get_template_directory_uri() ?>/imgs/design-superTemplates-desktop.png" alt="">
                    </div>
                </div>

            </div>
        </div>



    </section>`




		<?php
            // get_template_part( 'template-parts/blocks', 'imgHero' );
            // get_template_part( 'template-parts/blocks', 'fourSquare' );
            // get_template_part( 'template-parts/blocks', 'infoColumns' );
            // get_template_part( 'template-parts/blocks', 'bannerCta' );
            // get_template_part( 'template-parts/blocks', 'imgChapter' );
            // get_template_part( 'template-parts/blocks', 'topSearches' );
            the_content();
        ?>
        


	</main><!-- #main -->

<?php
get_footer();

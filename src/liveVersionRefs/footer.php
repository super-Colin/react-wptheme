<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Honeycomb
 */

?>

	<footer class="envelopeFooter_container">
        <div class="envelopeFooter_container-inner">
            <div class="envelopeFooter-top">
                <div class="envelopeFooter-top-links">
                    <!-- <a class="envelopeFooter-top-link-link" href="#">Code</a> -->
                    <a class="envelopeFooter-top-link-link" href="#" style="height: 0;"></a>
                    <!-- <span>Things I've Learned</span> -->
                    <!-- <span class="envelopeFooter-top-link-title">Insights</span> -->

                    <!-- <a href="mailto:Colin@SuperColin.dev" class="envelopeFooter-bottom-content-emailLink">Colin@SuperColin.dev</a> -->
                    <a href="mailto:Colin@SuperColin.dev" class="envelopeFooter-top-link-title" style="color: #fff;">Colin@SuperColin.dev</a>
                    <!-- <span class="envelopeFooter-top-link-title">Find<br />SuperColin</span> -->



                    <!-- <a class="envelopeFooter-top-link-link" style="text-align:right;" href="#">Design</a> -->
                    <a class="envelopeFooter-top-link-link" style="text-align:right; height: 0;" href="#"></a>
                </div>
            </div>

            <div class="envelopeFooter-middle">
                <div class="envelopeFooter-middle-bgLeft-back"></div>
                <div class="envelopeFooter-middle-bgLeft"></div>
                <div class="envelopeFooter-middle-bgRight-back"></div>
                <div class="envelopeFooter-middle-bgRight"></div>
                <a class="envelopeFooter-middle-logo" href="#">
                    <img src="<?php echo get_template_directory_uri() ?>/imgs/sc-diamond.png" alt="">
                </a>
            </div>

            <div class="envelopeFooter-bottom">

                <div class="envelopeFooter-bottom-layoutSwitch">
                    <a class="envelopeFooter-bottom-layoutSwitch-logo" href="#">
                        <img src="<?php echo get_template_directory_uri() ?>/imgs/sc-diamond.png" alt="">
                    </a>
                </div>

                <div class="envelopeFooter-bottom-icons">
                    <a class="envelopeFooter-bottom-icons-icon" href="https://github.com/super-Colin" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="704.647" height="682.5" viewBox="0 0 186.438 180.578"><path d="M126.278 180.231c-2.654-.924-4.302-2.62-5.215-5.368-.202-.608-.224-1.537-.292-12.434-.064-10.263-.1-11.932-.279-12.99-.715-4.233-1.68-7.264-3.48-10.927-1.406-2.863-2.96-5.237-4.603-7.033-.302-.33-.496-.614-.432-.632.064-.019.882-.206 1.816-.417 5.202-1.171 10.748-3.23 14.856-5.514 3.94-2.191 6.621-4.225 9.555-7.248 6.45-6.648 9.766-15.311 9.765-25.51 0-6.6-1.969-13.286-5.808-19.728l-.384-.643.375-1.481c2.155-8.522 2.383-15.596.663-20.603-.77-2.239-1.582-3.571-3.332-5.463l-1.123-1.214h-1.37c-7.959 0-15.352 2.435-21.475 7.074l-.95.72-1.417-.492c-4.44-1.537-9.286-2.564-14.53-3.076-2.058-.201-8.748-.201-10.806 0-5.247.513-10.091 1.539-14.535 3.078l-1.424.493-1.004-.714c-3.975-2.829-8.204-4.848-12.417-5.929-2.88-.739-6.134-1.154-9.04-1.154h-1.296l-1.036 1.062c-1.292 1.326-2.045 2.348-2.707 3.672-2.487 4.975-2.507 12.857-.057 22.606l.357 1.42-.727 1.154c-3.62 5.746-5.465 12.186-5.465 19.078 0 10.225 3.197 18.709 9.601 25.475 5.718 6.042 14.61 10.648 25 12.949.968.214 1.784.412 1.813.438.03.027-.17.28-.444.563-.273.282-.971 1.14-1.55 1.908-.58.767-1.2 1.49-1.378 1.608-.66.435-2.41.808-5.058 1.078-2.104.214-10.837.22-11.716.007-2.701-.653-4.383-1.943-7.626-5.848-3.402-4.095-6.224-6.496-9.674-8.23-1.749-.878-2.663-1.137-4.25-1.207-2.101-.092-3.515.384-4.605 1.55-.854.913-1.084 1.468-1.08 2.611.006 1.742.653 3.17 1.924 4.252 3.578 3.044 4.658 4.727 7.35 11.465 2.329 5.829 2.9 6.873 4.899 8.966 2.95 3.089 7.173 5.078 11.874 5.595.664.073 3.643.13 6.829.13h5.65l-.002 8.892c-.002 9.9.002 9.833-.81 11.488-.644 1.31-2.265 2.933-3.62 3.624-.534.273-1.244.575-1.578.673l-.607.177-2.003-.835c-3.56-1.485-8.188-3.83-11.776-5.97-12.54-7.474-23.679-18.383-31.388-30.737-11.54-18.493-16.23-39.875-13.46-61.37 2.352-18.262 10.073-35.314 22.373-49.413 2.105-2.413 6.343-6.652 8.756-8.757C46.005 10.8 63.05 3.082 81.317.727 85.733.157 88.311 0 93.215 0s7.482.158 11.898.727C123.379 3.082 140.426 10.8 154.526 23.1c2.412 2.105 6.65 6.344 8.756 8.757 17.939 20.563 25.999 47.424 22.259 74.18-1.441 10.311-4.329 19.559-9.06 29.015-7.91 15.813-20.13 29.132-35.354 38.534-2.32 1.433-5.163 2.992-7.908 4.336-2.356 1.154-5.693 2.66-5.882 2.656-.037 0-.513-.157-1.059-.347z"/></svg>
                    </a>
                    <a class="envelopeFooter-bottom-icons-icon" href="https://stackoverflow.com/users/11015335/supercolin" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="723.629" height="723.49" viewBox="0 0 191.46 191.423"><path d="M83.746 190.907c-19.56-2.416-38.179-10.991-52.555-24.205-17.354-15.949-27.928-36.41-30.692-59.39-.665-5.527-.665-17.665 0-23.192C3.263 61.14 13.837 40.68 31.19 24.73 45.717 11.377 64.265 2.886 84.12.498c5.526-.665 17.664-.665 23.19 0 16.431 1.976 32.13 8.171 45.074 17.786 4.805 3.568 6.228 4.793 10.789 9.286a95.27 95.27 0 0127.908 57.75c.504 4.673.504 16.117 0 20.79-2.33 21.619-11.797 41.477-27.206 57.063-15.575 15.754-35.842 25.546-57.765 27.908-4.871.525-17.5.426-22.365-.175zm43.016-61.713v-24.5h-7.855V145.838H56.814v-41.146H48.96V153.694h77.803zm-16.084 3.553v-4.862H63.547V137.61h47.131zm.4-7.948c.058-.22.977-9.825.945-9.881-.053-.092-45.167-4.247-46.07-4.243-.722.003-.803.33-1.179 4.772-.222 2.623-.348 4.828-.28 4.9.067.07 10.445 1.1 23.06 2.289 12.615 1.188 23.063 2.182 23.218 2.208.154.026.291.006.305-.045zm2.475-18.42c.663-2.469 1.087-4.586.942-4.707-.21-.176-43.539-11.869-44.731-12.072-.372-.063-3.008 9.075-2.706 9.378.364.363 43.803 12.018 44.548 11.952.619-.054.942-.808 1.947-4.552zm4.632-12.016c2.267-3.83 2.328-4 1.633-4.51-.398-.292-9.45-5.677-20.115-11.968-16.087-9.489-19.47-11.35-19.852-10.924-.673.75-4.8 7.842-4.649 7.99.584.575 40.177 23.67 40.372 23.55.14-.087 1.316-1.95 2.611-4.138zm8.288-8.777c2.114-1.458 3.826-2.847 3.806-3.089-.038-.456-24.879-37.064-25.778-37.99-.435-.448-1.02-.18-3.993 1.831-1.915 1.296-3.704 2.558-3.974 2.806-.397.364 2.031 4.149 12.685 19.77 7.247 10.627 13.23 19.32 13.294 19.32.064 0 1.846-1.191 3.96-2.648zm11.676-4.437c2.218-.4 4.093-.788 4.168-.863.099-.099-7.68-45.797-7.857-46.162-.062-.126-9.55 1.602-9.673 1.761-.096.124 7.706 45.304 7.926 45.897.084.23 1.69.042 5.436-.633z"/></svg>
                    </a>
                    <a class="envelopeFooter-bottom-icons-icon" href="https://www.linkedin.com/in/colin-a-smith/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="746.427" height="746.445" viewBox="0 0 197.492 197.497"><path d="M93.722 197.382c-29.976-1.603-57.35-16.49-75.002-40.788C5.417 138.282-1.226 115.412.187 92.79c1.926-30.839 17.697-58.468 43.34-75.927C65.062 2.202 92.21-3.249 118.114 1.891a98.555 98.555 0 0136.718 15.539c9.185 6.348 17.628 14.654 24.273 23.88 23.344 32.411 24.567 76.55 3.056 110.322-14.727 23.121-38.297 39.12-65.055 44.157-7.31 1.376-16.167 1.98-23.384 1.593zm-19.554-94.007v-43.14H49.373v86.28h24.795zm36.89 16.57c0-26.462.003-26.576.424-27.825.52-1.543 2.08-3.968 3.398-5.286 1.928-1.928 4.556-3.292 7.522-3.904 1.792-.37 5.493-.42 7.041-.094 3.144.661 5.045 2.536 5.95 5.867.315 1.16.35 3.643.408 29.539l.065 28.273h24.594l-.066-29.583c-.073-32.395-.011-30.646-1.28-36.021-2.335-9.89-7.851-16.649-15.878-19.453-2.472-.863-4.765-1.223-7.801-1.223-7.646 0-15.935 2.511-22.228 6.733-1.091.732-2.021 1.33-2.066 1.33-.045 0-.082-1.814-.082-4.031v-4.032H86.465v86.28h24.594zm-45.78-65.463c4.993-1.177 8.715-5.89 8.739-11.067.015-3.232-1.084-5.98-3.274-8.191-2.359-2.38-4.905-3.467-8.166-3.484-3.377-.017-5.986 1.068-8.366 3.48-3.406 3.452-4.237 8.923-2.023 13.31 1.46 2.89 4.387 5.206 7.567 5.982 1.41.344 3.995.33 5.522-.03z"/></svg>
                    </a>

                </div>

                <div class="envelopeFooter-bottom-content">
                    <!-- <a href="mailto:Colin@SuperColin.dev" class="envelopeFooter-bottom-content-emailLink">Colin@SuperColin.dev</a> -->
                    <form action="" class="envelopeFooter-bottom-form">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email">
                        <label for="message">Message</label>
                        <textarea type="textarea" name="message" id="message" rows="4" placeholder="I'd like to start a project with you. Here's my idea ..."></textarea>
                        <div class="envelopeFooter-bottom-form-buttonHolder">
                            <button type="submit" class="envelopeFooter-bottom-form-submit">Submit</button>
                        </div>
                    </form>
                    <a href="#" class="envelopeFooter-bottom-toTop">
                        <div class="envelopeFooter-bottom-toTop-arrow SC_arrow-container">
                            <div class="SC_arrow"></div>
                        </div>
                        <span class="envelopeFooter-bottom-toTop-top">Top</span>
                    </a>
                </div>


            </div>
        </div>
    </footer>






	
	<!-- Made with <3 by SuperColin.dev -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

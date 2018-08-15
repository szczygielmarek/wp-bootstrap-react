<?php
function site_scripts() {
  global $wp_styles; // Call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way
        
    // Adding scripts file in the footer
    wp_enqueue_script( 'site-js', get_template_directory_uri() . '/assets/dist/main.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/dist'), true );
    wp_localize_script( 'site-js', 'wp', array(
      'rest_url' => rest_url(),
      'site_url' => home_url()
    ));

    // Register main stylesheet
    wp_enqueue_style( 'site-css', get_template_directory_uri() . '/assets/dist/main.css', array(), filemtime(get_template_directory() . '/assets/dist'), 'all' );

    // Front Page
    if(is_front_page()) {
      wp_enqueue_script( 'front-page-js', get_template_directory_uri() . '/assets/dist/front-page.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/dist/front-page.js'), true );
      wp_enqueue_style( 'front-page-css', get_template_directory_uri() . '/assets/dist/front-page.css', array(), filemtime(get_template_directory() . '/assets/dist/front-page.css'), 'all' );
    }

    // Comment reply script for threaded comments
    if ( is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
      wp_enqueue_script( 'comment-reply' );
    }
}
add_action('wp_enqueue_scripts', 'site_scripts', 999);
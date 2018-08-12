<?php
function site_scripts() {
  global $wp_styles; // Call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way
        
    // Adding scripts file in the footer
    wp_enqueue_script( 'site-js', get_template_directory_uri() . '/assets/dist/main.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/dist'), true );

    // Register main stylesheet
    wp_enqueue_style( 'site-css', get_template_directory_uri() . '/assets/dist/main.css', array(), filemtime(get_template_directory() . '/assets/dist'), 'all' );

    // Home
    if(is_front_page()) {
      wp_enqueue_script( 'home-js', get_template_directory_uri() . '/assets/dist/home.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/dist/home.js'), true );
      wp_enqueue_style( 'home-css', get_template_directory_uri() . '/assets/dist/home.css', array(), filemtime(get_template_directory() . '/assets/dist/home.css'), 'all' );
    }

    // Comment reply script for threaded comments
    if ( is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
      wp_enqueue_script( 'comment-reply' );
    }
}
add_action('wp_enqueue_scripts', 'site_scripts', 999);
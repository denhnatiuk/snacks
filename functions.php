<?php
if ( ! function_exists( 'snacks_setup' ) ) :

add_action( 'after_setup_theme', 'snacks_setup' );
function snacks_setup()
{
    
    add_theme_support( 'wp-block-styles' );

    add_editor_style( 'editor-style.css' );

}

endif;
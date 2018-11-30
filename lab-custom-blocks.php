<?php
/**
 *
 * @package     lab\custom_blocks
 * @author      Jesús Olazagoitia (@goiblas)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Lab Custom Blocks
 * Description: Laboratorio de blocks de gutenberg
 * Version:     1.0.0
 * Author:      Jesús Olazagoitia
 * Author URI:  https://twitter.com/goiblas
 * Text Domain: lcb
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */


//  Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue block editor only JavaScript and CSS.
 */
function lcb_enqueue_block_editor_assets() {
	// Make paths variables so we don't write em twice ;)
	$block_path = '/assets/js/editor.blocks.js';
    $style_path = '/assets/css/blocks.editor.css';
    
    // Enqueue the bundled block JS file
	wp_enqueue_script(
		'lcb-blocks-js',
		plugins_url($block_path, __FILE__),
		[ 'wp-i18n', 'wp-element', 'wp-editor', 'wp-blocks', 'wp-components' ],
		filemtime( plugin_dir_path( __FILE__ ) . $block_path )
	);

	// Enqueue optional editor only styles
	wp_enqueue_style(
		'lcb-blocks-editor-css',
		plugins_url($style_path, __FILE__),
		[ 'wp-blocks' ],
		filemtime( plugin_dir_path( __FILE__ ) . $style_path )
	);
}

add_action( 'enqueue_block_editor_assets', 'lcb_enqueue_block_editor_assets' );


/**
 * Enqueue front end and editor JavaScript and CSS assets.
 */
function lcb_enqueue_assets() {
	$style_path = '/assets/css/blocks.style.css';
	wp_enqueue_style(
		'lcb-blocks',
		plugins_url( $style_path, __FILE__ ),
		[ 'wp-blocks' ],
		filemtime(  plugin_dir_path( __FILE__ ) . $style_path )
	);

	$google_maps_api_key = 'AIzaSyCoq4_-BeKtYRIs-3FjJL721G1eP5DaU0g';

	wp_enqueue_script(
		'gutenberg-google-map',
		'https://maps.googleapis.com/maps/api/js?key=' . $google_maps_api_key . '&libraries=places'
	);

}
add_action( 'enqueue_block_assets', 'lcb_enqueue_assets' );



/**
 * Enqueue frontend JavaScript and CSS assets.
 */
function lcb_enqueue_frontend_assets() {

	// If in the backend, bail out.
	if ( is_admin() ) {
		return;
	}

	$block_path = '/assets/js/frontend.blocks.js';
	wp_enqueue_script(
		'lcb-blocks-frontend',
		plugins_url(  $block_path, __FILE__),
		[],
		filemtime( plugin_dir_path( __FILE__ ) . $block_path )
	);
}

add_action( 'enqueue_block_assets', 'lcb_enqueue_frontend_assets' );

/**
 * Register new category block
 */
function lcb_custom_block_categories( $categories ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'lab-custom-blocks',
                'title' => __( 'Lab custom blocks', 'lcb' ),
            ),
        )
    );
}
add_filter( 'block_categories', 'lcb_custom_block_categories', 10, 2 );
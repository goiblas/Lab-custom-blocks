<!-- <script src=""></script>
<link rel="stylesheet" href="" /> -->

<?php
if (! defined('ABSPATH')) {
    exit;
}


function lcb_leaflet_map_enqueue_assets() {
	$style_path = 'https://unpkg.com/leaflet@1.0.2/dist/leaflet.css';
	$script_path = 'https://unpkg.com/leaflet@1.0.2/dist/leaflet.js';
    
    wp_register_style( 'css-gutenberg-leaflet-maps-block', $style_path);
	wp_enqueue_style('css-gutenberg-leaflet-maps-block');

	wp_enqueue_script(
		'js-gutenberg-leaflet-maps-block', $script_path
	);

}
add_action( 'enqueue_block_assets', 'lcb_leaflet_map_enqueue_assets' );

function lcb_register_leaflet_map_block() {
    if(!function_exists('register_block_type')) {
        return;
    }
    register_block_type( 'lcb/leaflet-map', [
		'render_callback' =>  'lcb_render_leaflet_map',
	] );
}

add_action('plugins_loaded', 'lcb_register_leaflet_map_block');

function lcb_render_leaflet_map($settings) {

	// latitute: {
	// 	type: "number",
	// },
	// longitude: {
	// 	type: "number"
	// },
	// aspectRatio: {
	// 	type: 'string',
	// 	default: '2_1'
	// }


	$latitude = $settings['latitude'][0];
	$longitude = $settings['longitude'][0];
   
	if ( empty( $latitude ) || empty($longitude) ) {
		return '<p>Tienes que seleccionar coordenadas</p>';
    }

	$content = '<div id="mapid"></div>';
	$content .= '<script>var mymap = L.map("mapid").setView([51.505, -0.09], 13);</script>';

	
	return $content;
}
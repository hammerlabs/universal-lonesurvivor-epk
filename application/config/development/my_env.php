<?php  if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );
/* Copyright 2013 Hammer Technology Services, Inc. */

// wheter to minify js/css or not
$config[ 'minify_js' ] = false;
$config[ 'minify_css' ] = false;
$config[ 'less_route_replacement' ] = "assets";
$config[ 'minify_css_base_folder' ] = "less";
$config[ 'minify_js_base_folder' ] = "assets";
// set to true to combine minified files (in a single <script> or <link> element)
// this makes sense only if minification is on
// if set to false, then this parameter will not be taken into account, and css/js files will not be combined
$config[ 'combine_js' ] = false;
$config[ 'combine_css' ] = false;


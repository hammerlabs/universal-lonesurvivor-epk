<?php  if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

// list of available langs, all need to be a two characters long word
$config[ 'available_langs' ] = array( "en", "es" );

// default language
// for example, set it to 'en' so that url/welcome is the same as url/en/welcome
$config[ 'default_lang' ] = "en";

// wheter to minify js/css or not
$config[ 'minify_js' ] = false;
$config[ 'minify_css' ] = false;

// set to true to combine minified files (in a single <script> or <link> element)
// this makes sense only if minification is on
// if set to false, then this parameter will not be taken into account, and css/js files will not be combined
$config[ 'combine_js' ] = false;
$config[ 'combine_css' ] = false;

//Meta tags, FB tags, etc.
$config["title"] = "The Capitol - The Official Government of Panem"; 
$config["desc"] = "The Official Government of Panem"; 
$config["url"] = "http://www.thecapitol.pn/"; 
$config["image"] = "http://www.thecapitol.pn/assets/img/cptl_thmb.jpg"; 
$config["facebook_url"] = "https://www.facebook.com/thecapitolPN";    
$config["keywords"] = "whatsmydistrict, what's my district, district, my district, hungergames, hunger, games, Hunger Games, Panem, Capitol, CapitolPN, identifyyourself, identify, yourself, identify yourself, thecapitol, register, card, teaser, thecapitolpn, pn, DIP, pass, card, TheCapitol, tessera, tesserae, gross district product, gdp, President Snow, presidentsnow, snow, president, 74th";    
$config["og_title"] = "The Capitol";		
$config["ga_account"] = "UA-31651-230"; //Google Analytics account. Leave empty to disable.

// API configs and other environment specific settings
if (defined('ENVIRONMENT'))
{
	switch (ENVIRONMENT)
	{
		case 'development':
			// twitter
			$config[ 'tw_consumer_key' ] = 'r8AR0NwWdpMAokeDhjPA';
			$config[ 'tw_consumer_secret' ] = 'rugQtGdNe3U9Ic6GCFMpYL3lwhJy2yrntls5F78yKw';

			// fb
			$config[ 'fb_app_id' ] = '547186925347309';
			$config[ 'fb_secret' ] = 'd679e2c995f22f5683f41d584e8c78e9';

			// red api
			$config[ 'red_entrypoint' ] = 'http://hge-testapi.ff0000.com/api/v1';
			$config[ 'red_identity' ] = 'trigger';
			$config[ 'red_secretkey' ] = 'd412aeafcb820232a67e20d9f1d7726047083cdbbb680d69eb4e913bb320b6cc';
			$config[ 'red_uppath_base' ] = '/sites/webapps/trigger_capitol/lionsgate-catchingfire/capitol.pn/html/';
			$config[ 'red_uppath' ] = 'assets/red_uppath/';
		break;
	
		case 'testing':
			// twitter
			$config[ 'tw_consumer_key' ] = 'qlrDwTIbqFLsNQTZX5InXg';
			$config[ 'tw_consumer_secret' ] = 'MltNDxdu3eH3b6TNpKBISUucfgTfAPxRxO6qGiuH1U';

			// fb
			$config[ 'fb_app_id' ] = '1420885514798364';
			$config[ 'fb_secret' ] = '02c3d5b3cfe8cfa8e79a3ef560d4101e';

			// red api	
			/*
		   $config[ 'red_entrypoint' ] = 'http://hge-testapi.ff0000.com/api/v1';
		   $config[ 'red_identity' ] = 'trigger';
		   $config[ 'red_secretkey' ] = 'd412aeafcb820232a67e20d9f1d7726047083cdbbb680d69eb4e913bb320b6cc';
		   $config[ 'red_uppath_base' ] = '/sites/webapps/trigger_capitol/lionsgate-catchingfire/capitol.pn/html/';
		   $config[ 'red_uppath' ] = 'assets/red_uppath/';
		   */
		   $config[ 'red_entrypoint' ] = 'http://www.thehungergamesexplorer.com/api/v1';
		   $config[ 'red_identity' ] = 'trigger';
		   $config[ 'red_secretkey' ] = 'f19811ba8601c5fdc2ce3c64210dc72c335134f37c30c947b633f7352c40f303';
		   $config[ 'red_uppath_base' ] = '/sites/webapps/trigger_capitol/lionsgate-catchingfire/capitol.pn/html/';
		   $config[ 'red_uppath' ] = 'assets/red_uppath/';  
		break;

		case 'production':
			// wheter to minify js/css or not
			//$config[ 'minify_js' ] = true;
			//$config[ 'minify_css' ] = true;

			// set to true to combine minified files (in a single <script> or <link> element)
			// this makes sense only if minification is on
			// if set to false, then this parameter will not be taken into account, and css/js files will not be combined
			//$config[ 'combine_js' ] = true;
			//$config[ 'combine_css' ] = true;

			// twitter
			$config[ 'tw_consumer_key' ] = 'zqm80FmE4e5abElRDTG3mw';
			$config[ 'tw_consumer_secret' ] = '5Zb0hJ0ZYyHbsGvay7N7bmxoaLlzgZCQtzgO7omlCxY';

			// fb
			$config[ 'fb_app_id' ] = '503541486401809';
			$config[ 'fb_secret' ] = '09ad920884c74ca3a48086a2fa41d6c9';

			// red api
			$config[ 'red_entrypoint' ] = 'http://www.thehungergamesexplorer.com/api/v1';
			$config[ 'red_identity' ] = 'trigger';
			$config[ 'red_secretkey' ] = 'f19811ba8601c5fdc2ce3c64210dc72c335134f37c30c947b633f7352c40f303';
			$config[ 'red_uppath_base' ] = '/sites/webapps/trigger_capitol/lionsgate-catchingfire/capitol.pn/html/';
			$config[ 'red_uppath' ] = 'assets/red_uppath/';
		break;

		default:
			exit('The application environment is not set correctly.');
	}
}


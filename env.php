<?php

require_once "custom/env.php";
$_host_name = $_SERVER[ 'SERVER_NAME' ];

$_this_env = 'production'; // this is the default env
foreach ( $_environments_list as $env_name => $env_urls ) {
	foreach ( $env_urls as $url ) {
		$pattern = "/{$url}$/";
		if ( preg_match( $pattern, $_host_name ) ) {
			$_this_env = $env_name; // boom, we found it
			break 2;
		}
	}
}

define( 'ENVIRONMENT', $_this_env );

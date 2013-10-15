<?php

$host_name = $_SERVER[ 'SERVER_NAME' ];
$local_host_names = array( "starter.local.dev" );
$dev_host_names = array( ".hammerlabs.com" );
$test_host_names = array( "dev.thecapitol.pn" );

foreach ($local_host_names as $local_host_name){
	$is_local = substr_compare($host_name, $local_host_name, -strlen($local_host_name), strlen($local_host_name)) === 0;
	if ($is_local) break;
}

foreach ($dev_host_names as $dev_host_name){
	$is_dev = substr_compare($host_name, $dev_host_name, -strlen($dev_host_name), strlen($dev_host_name)) === 0;
	if ($is_dev) break;	
}

foreach ($test_host_names as $test_host_name){
	$is_test = strpos($host_name, $test_host_name) !== false;
	if ($is_test) break;	
}

if ($is_local || $is_dev) {
	define('ENVIRONMENT', 'development');
} elseif ($is_test) {
	define('ENVIRONMENT', 'testing');
} else {
	define('ENVIRONMENT', 'production');
}

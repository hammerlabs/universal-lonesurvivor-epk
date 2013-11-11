<?php

/**
 *
 * down here you can choose what urls should match the different environment names
 *
 * if you set a url like "example.com" for the "development" environment
 * then http://example.com will use dev settings, but also http://www.example.com or http://anything.example.com
 *
 */

$_environments_list = array(

	/**
	 * development urls
	 */
	'development' => array(
		'.local',
		'.hammerlabs.com',
		'192.168',
		'.localdomain'
	),

	/**
	 * testing urls
	 */
	'testing' => array(
		'upqa.com'
	)

);

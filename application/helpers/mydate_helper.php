<?php
/* Copyright 2013 Hammer Technology Services, Inc. */

function getReleaseDateInfo($urlinfo) {
	date_default_timezone_set('America/Los_Angeles'); // for east coast time zone use 'America/New_York'
	$todays_date = gmdate("U");  
	$release_date = gmdate("U", mktime(0, 0, 0, 8, 30, 2013));  
	$release_date_string = "AUGUST 30"; 
	if($urlinfo['isInternational']) {
		$release_date = gmdate("U", mktime(0, 0, 0, 8, 29, 2013));    
		$release_date_string = "AUGUST 29";   
	} 
	$days_to_release = ceil(abs($release_date - $todays_date) / 86400);  
	return array(
		'todays_date' => $todays_date, 
		'release_date' => $release_date, 
		'release_date_string' => $release_date_string, 
		'days_to_release' => $days_to_release, 
	);  
}

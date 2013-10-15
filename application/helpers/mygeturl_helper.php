<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

function _curPageURL() {
	 $pageURL = 'http';
	 //if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
	 $pageURL .= "://";
	 if ($_SERVER["SERVER_PORT"] != "80") {
	  $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
	 } else {
	  $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
	 }
	 return $pageURL;  
}  

function _stripParameters($url) {
	$paramIndex = strpos( $url ,'?');
	if($paramIndex !== false){
		return substr($url, 0, $paramIndex);
	}else{
		return $url;
	}
}   

function getUrl() {
	$current_url = _stripParameters(_curPageURL()); 
	$cdn = "";
	$debugging = false;  
	$countrycode = "net";


	if (strpos($current_url, "stage.sonypictures.net")){		
	   	$cdn = "http://stage.sonypictures.com/origin-flash/intl/global/movies/onedirection/site/"; 
		$debugging = false; 

	}elseif (strpos($current_url, "www.sonypictures.net")){
		//https://secure.sonypictures.com:443/movies/onedirection/facebook/tab/
	   	$cdn = "http://flash.sonypictures.com/intl/global/movies/onedirection/site/";  
		$debugging = false;


	}elseif (strpos($current_url, "www.1dthisisus-movie.net")){
		//https://secure.sonypictures.com:443/movies/onedirection/facebook/tab/
	   	$cdn = "http://flash.sonypictures.com/intl/global/movies/onedirection/site/";  
		$debugging = false;


	}elseif (strpos($current_url, "dev.triggerglobal.com")){  	
		//http://dev.triggerglobal.com/sony/1d/fb_tab/1_0/
	   	$cdn = "http://cdn-dev.triggerglobal.com/sony/1d/site/international_1_0/";

	}elseif (strpos($current_url, "qa.triggerglobal.com")){  	
		//http://qa.triggerglobal.com/sony/1d/fb_tab/1_0/
	   	$cdn = "http://cdn-dev.triggerglobal.com/sony/1d/site/international_1_0/";
	   	$debugging = true; 

	}elseif (strpos($current_url, "stage.triggerglobal.com")){  	
		//http://stage.triggerglobal.com/sony/1d/fb_tab/1_0/
	   	$cdn = "http://cdn-dev.triggerglobal.com/sony/1d/site/international_1_0/";
	   	$debugging = false; 

	}elseif (strpos($current_url, "localhost:8888") >= 0){  	
		//http://localhost:8888/1d_fb_tab/"
	   	$cdn = "http://localhost:8888/1d_site_cdn/";     
		$debugging = true;   
	}else {  	
		//http://localhost:8888/1d_fb_tab/"
	   	$cdn = "http://flash.sonypictures.com/movies/onedirection/site/";  
		$debugging = false;
	} 
		
	$isInternational = false; 

    return array(
		'current_url' => $current_url,
        'countrycode' => $countrycode,
		'cdn' => $cdn,
		'debugging' => $debugging,
		'isInternational' => $isInternational
    );
}
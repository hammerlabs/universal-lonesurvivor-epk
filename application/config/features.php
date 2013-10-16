<?php  if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

// Configuration of features that could be required for a site
$features=array();

//Oauth
$feature=array();
$feature["title"]="Oauth Library";
$feature["reflink"]="http://php.net/manual/en/book.oauth.php";
$features["oauth"]=$feature;


//Oauth
$feature=array();
$feature["title"]="PHP CURL Library";
$feature["reflink"]="http://php.net/manual/en/book.curl.php";
$features["curl"]=$feature;

$config['features']=$features;

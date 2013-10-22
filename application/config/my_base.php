<?php  if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );
/* Copyright 2013 Hammer Technology Services, Inc. */

// list of available langs, all need to be a two characters long word
$config[ 'available_langs' ] = array( "en", "es" );

// default language
// for example, set it to 'en' so that url/welcome is the same as url/en/welcome
$config[ 'default_lang' ] = "en";


// Configuration of Feature and folder checks
$config['required_features']=array("oauth","curl");

//List folders that need to exist (and maybe writeable)
$config['check_folders']=array(
	array("folder"=>"assets","requires_write"=>false),
	array("folder"=>"assets/uploadimages","requires_write"=>true)
);

$config["mobile_redirect_url"] = "/mobile";

//Meta tags, FB tags, etc.
$config["title"] = "Site Title"; 
$config["desc"] = "Site Description"; 
$config["url"] = "URL to production site"; 
$config["image"] = "URL to image at root of site to be used for social postings"; 
$config["facebook_url"] = "URL to facebook landing page";    
$config["keywords"] = "Site Keywords";    
$config["og_title"] = "Site title to display in facebook";  
$config["ga_account"] = ""; //Google Analytics account. Leave empty to disable.

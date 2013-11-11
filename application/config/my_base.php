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

$config["use_php_redirects"] = true;
$config["mobile_redirect_url"] = "http://universalpictures.mobi/lonesurvivor";

//Meta tags, FB tags, etc.
$config["title"] = "Lone Survivor | Official Movie Site | Universal Pictures"; 
$config["desc"] = "Based on the failed June 28, 2005 mission, Operation Red Wings. Four members of SEAL Team 10, were tasked with the mission to capture or kill notorious Taliban leader, Ahmad Shahd. Marcus Luttrell was the only member of his team to survive."; 
$config["url"] = "http://www.lonesurvivorfilm.com"; 
$config["image"] = "http://www.lonesurvivorfilm.com/lone_survivor.jpg"; 
$config["facebook_url"] = "URL to facebook landing page";    
$config["keywords"] = "Lone Survivor Mark Wahlberg Taylor Kitsch Alexander Ludwig Eric Bana Ben Foster Emile Hirsch";    
$config["og_title"] = "Follow The Latest News From The Lone Survivor";  
$config["ga_account"] = ""; //Google Analytics account. Leave empty to disable.
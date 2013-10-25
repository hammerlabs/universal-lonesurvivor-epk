<?php if ( !defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' ); 
/* Copyright 2013 Hammer Technology Services, Inc. */

class ReadImages {

	public function preloadFromFolder( $folder, $class="") {
		// read vars from config
		$CI =& get_instance();


		$path=BASEPATH."../".$folder;
		$files=scandir($path);
		$result="";

		foreach ($files as $file){
			$fullpath=$path."/".$file;
			if (!is_dir($fullpath)){
				$fullUrl=$folder."/".$file;				
				$result=$result.'<img class="'.$class.'" onload="$(this).data(\'loaded\', \'loaded\');" onerror="$(this).data(\'loaded\', \'loaded\');" data-source="'.$fullUrl.'" data-filename="'.$file.'">'."\n";
			}
		}

		return $result;
	}



}

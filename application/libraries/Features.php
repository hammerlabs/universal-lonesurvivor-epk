<?php if ( !defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' ); 

class Features {


	public function checkByName($name){
		switch ($name) {
			case 'oauth':
				return $this->checkOauth();
				break;
			case 'curl':
				return $this->checkCurl();
				break;
			
			default:
				return false;
				break;
		}
	}

	public function checkOAuth() {
		return false;
		return function_exists('curl_version');		
	}

	public function checkCurl() {
		return function_exists('curl_version');		
	}



}

<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* Copyright 2013 Hammer Technology Services, Inc. */

class Device_redirect extends CI_Controller {
	public function index() {
		$this->load->helper('url');
		
		if ($this->config->item( 'use_php_redirects' ) == true) {
			$ua=getBrowser();
			if ($ua['device_type']=="mobile"){
				redirect( $this->config->item( 'mobile_redirect_url' ) );	
			}
			else{
				redirect('site');	
			}
		} else {
			$data = new array();
			$data['device_type'] = $ua['device_type'];
			$data['mobile_redirect_url'] = $this->config->item( 'mobile_redirect_url' ); 
			$data['desktop_url'] = 'site'; 
			// load view with js redirection
		}


		
	}

}

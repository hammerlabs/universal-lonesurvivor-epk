<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Device_redirect extends CI_Controller {
	public function index() {
		$this->load->helper('url');
		
		$ua=getBrowser();
		if ($ua['device_type']=="mobile"){
			redirect( $this->config->item( 'mobile_redirect_url' ) );	
		}
		else{
			redirect('/site');	
		}

		
	}

}

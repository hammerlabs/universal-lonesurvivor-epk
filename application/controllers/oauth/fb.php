<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );
/* Copyright 2013 Hammer Technology Services, Inc. */

class Fb extends CI_Controller {
	public function index() {
		header("Expires: 0");
		header("Cache-Control: no-store, no-cache, must-revalidate");
		header("Pragma: no-cache");

		require_once( 'fb/facebook.php' );
		$this->load->library( 'session' );

		$facebook = new Facebook( array(
			'appId'  => $this->config->item( 'fb_app_id' ),
			'secret' => $this->config->item( 'fb_secret' )
		) );
		$user = $facebook->getUser();
		if ( $user ) {
			try {
				$user_profile = $facebook->api( '/me' );
				if ( isset( $user_profile[ 'id' ] ) ) {
					$data[ 'provider' ] = 'facebook';
					$data[ 'user_id' ] = $user_profile[ 'id' ];
					if ( isset( $user_profile[ 'username' ] ) ) {
						$data[ 'user_name' ] = $user_profile[ 'username' ];
					}
					$this->session->set_userdata( 'oauth_profile_data', $data );
				}
			} catch ( FacebookApiException $e ) {
				error_log( $e );
				$user = 0;
			}
		}
		if ( $user ) {
		} else {
			$params = array(
		  	'scope' => 'publish_stream'
			);			
			$data[ 'login_url' ] = $facebook->getLoginUrl($params);
		}
		$data[ 'user' ] = $user;
		$this->load->view( 'fb', $data );
	}

	public function post_feed() {
		header("Expires: 0");
		header("Cache-Control: no-store, no-cache, must-revalidate");
		header("Pragma: no-cache");

		require_once( 'fb/facebook.php' );
		$this->load->library( 'session' );
		$this->load->library( 'input' );
		$facebook = new Facebook( array(
			'appId'  => $this->config->item( 'fb_app_id' ),
			'secret' => $this->config->item( 'fb_secret' )
		) );

		$message= $this->input->post('message');

		$user = $facebook->getUser();
		if ( $user ) {
			try {
				$ret_obj = $facebook->api('/me/feed', 'POST',
                                    array(
                                      'link' => 'http://thecapitol.pn',
                                      'name' => 'A Message from the Citizen Control Center',
                                      'description' => $message
                                 ));				
				$ret=array();
				$ret["result"]=true;
				$ret["msg"]="message transmitted";
				echo json_encode($ret);

			} catch ( FacebookApiException $e ) {
				$ret=array();
				$ret["result"]=false;
				$ret["msg"]=$e->getMessage();
				echo json_encode($ret);

			}
		}
		else{
			$ret=array();
			$ret["result"]=false;
			$ret["msg"]="Not authenticated";
			echo json_encode($ret);
		}
	}



}
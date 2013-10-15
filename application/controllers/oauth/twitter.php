<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Twitter extends CI_Controller {

	public function index( $clear = 0 ) {

		header("Expires: 0");
		header("Cache-Control: no-store, no-cache, must-revalidate");
		header("Pragma: no-cache");

		$this->load->library( 'session' );

		if ( $clear == 1 ) $this->session->set_userdata( 'state', 0 );

		$req_url = 'https://api.twitter.com/oauth/request_token';
		$auth_url = 'https://api.twitter.com/oauth/authorize';
		$acc_url = 'https://api.twitter.com/oauth/access_token';
		$api_url = 'https://api.twitter.com/1.1/account';
		$consumer_key = $this->config->item( 'tw_consumer_key' );
		$consumer_secret = $this->config->item( 'tw_consumer_secret' );

		if ( !$this->input->get( 'oauth_token' ) && $this->session->userdata( 'state' ) == 1 ) {
			$this->session->set_userdata( 'state', 0 );
		}

		try {

			$oauth = new OAuth( $consumer_key, $consumer_secret, OAUTH_SIG_METHOD_HMACSHA1, OAUTH_AUTH_TYPE_URI );
			//$oauth->disableSSLChecks();
			$oauth->enableDebug();
			if ( !$this->input->get( 'oauth_token' ) && !$this->session->userdata( 'state' ) ) {
				$request_token_info = $oauth->getRequestToken( $req_url );
				$this->session->set_userdata( 'secret', $request_token_info[ 'oauth_token_secret' ] );
				$this->session->set_userdata( 'state', 1 );
 				header( 'Location: ' . $auth_url . '?oauth_token=' . $request_token_info[ 'oauth_token' ] );
 				exit;
 			} else if ( $this->session->userdata( 'state' ) == 1 ) {
				$oauth->setToken( $this->input->get( 'oauth_token' ), $this->session->userdata( 'secret' ) );
				$access_token_info = $oauth->getAccessToken( $acc_url );
				$this->session->set_userdata( 'state', 2 );
				$this->session->set_userdata( 'token', $access_token_info[ 'oauth_token' ] );
				$this->session->set_userdata( 'secret', $access_token_info[ 'oauth_token_secret' ] );
			}
			$oauth->setToken( $this->session->userdata( 'token' ), $this->session->userdata( 'secret' ) );

			$oauth->fetch( "{$api_url}/verify_credentials.json" );
			$tw_data = json_decode( $oauth->getLastResponse() );

			if ( isset( $tw_data->id_str ) ) {
				$data[ 'provider' ] = "twitter";
				$data[ 'user_id' ] = $tw_data->id_str;
				$data[ 'user_name' ] = isset( $tw_data->screen_name ) ? $tw_data->screen_name : '';
				$this->session->set_userdata( 'oauth_profile_data', $data );
				$this->load->view( 'tw', $data );
			}

		} catch( OAuthException $E ) {

			print_r( $E );

		}
	}

	public function post_feed() {
		header("Expires: 0");
		header("Cache-Control: no-store, no-cache, must-revalidate");
		header("Pragma: no-cache");

		$this->load->library( 'session' );
		$this->load->library( 'input' );
		

		$message= $this->input->post('message');


		$req_url = 'https://api.twitter.com/oauth/request_token';
		$auth_url = 'https://api.twitter.com/oauth/authorize';
		$acc_url = 'https://api.twitter.com/oauth/access_token';
		$api_url = 'https://api.twitter.com/1.1/statuses/update.json';
		$consumer_key = $this->config->item( 'tw_consumer_key' );
		$consumer_secret = $this->config->item( 'tw_consumer_secret' );

		if ( !$this->session->userdata( 'token' ) ) {
			$ret=array();
			$ret["result"]=false;
			$ret["msg"]="Not authenticated";
			echo json_encode($ret);
		}
		else{
			try {

				$params=array();
				$params["status"]=$message;
					$oauth = new OAuth( $consumer_key, $consumer_secret, OAUTH_SIG_METHOD_HMACSHA1, OAUTH_AUTH_TYPE_URI );
					$oauth->setToken( $this->session->userdata( 'token' ), $this->session->userdata( 'secret' ) );
					$oauth->setAuthType(OAUTH_AUTH_TYPE_FORM);
					$oauth->fetch( $api_url,$params, OAUTH_HTTP_METHOD_POST );
					$tw_data = json_decode( $oauth->getLastResponse() );
					$ret=array();
					$ret["result"]=true;
					$ret["msg"]=$tw_data;
					echo json_encode($ret);

			} catch( OAuthException $e ) {
					$ret=array();
					$ret["result"]=false;
					$ret["msg"]=$e->getMessage();
					echo json_encode($ret);
			}


		}



	}

}

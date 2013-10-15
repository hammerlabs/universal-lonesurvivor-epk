<?php if ( !defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' ); 

class Redapi {

	public function getID() {
		$CI =& get_instance();
		$CI->load->library( 'session' );
		return $CI->session->userdata( 'citizen_id' );
	}

	public function getNetwork() {
		$CI =& get_instance();
		$CI->load->library( 'session' );
		return $CI->session->userdata( 'network' );
	}


	public function saveID( $red_response ) {
		$CI =& get_instance();
		$CI->load->library( 'session' );
		if ( isset( $red_response->citizen_id ) ) {
			$CI->session->set_userdata( 'citizen_id', $red_response->citizen_id );
		}

		if ( isset( $red_response->social_ids )){
			$social_id=$red_response->social_ids[0];
			$parts=explode(":", $social_id);
			$network=$parts[0];
			$CI->session->set_userdata( 'network', $network );
		}
	}

	public function service_call( $service, $data = array(), $files = array() ) {

		// read vars from config
		$CI =& get_instance();
		$entrypoint = $CI->config->item( 'red_entrypoint' );
		$identity = $CI->config->item( 'red_identity' );
		$secretkey = $CI->config->item( 'red_secretkey' );

		$boundary = md5( uniqid( 'multipart' ) . microtime() );
		if ( $service == "user/register/" && count( $files ) == 1 ) {
			$body = $this->encode_body( $data, $files[ 0 ], $boundary );
		} else {
			$body = $this->encode_body( $data, '', $boundary );
		}
		$token = $this->build_token( $identity, $secretkey, $body );
		$url = "{$entrypoint}/{$service}";

		// make URL request and store response
		$ch = curl_init( $url );
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, TRUE );

		curl_setopt( $ch, CURLOPT_HTTPHEADER, array(
			"Authorization: {$token}",
			"Content-Type: multipart/form-data; boundary={$boundary}"
		) );

		// if we have a body, let's use POST instead of GET
		if ( strlen( $body ) > 0 ) {
			curl_setopt( $ch, CURLOPT_POST, true );
			curl_setopt( $ch, CURLOPT_POSTFIELDS, $body );
		}

		// and now let's go for it
		$result = curl_exec( $ch );
		$info = curl_getinfo( $ch );
		curl_close( $ch );
		return json_decode( $result );

	}

	private function encode_body( $params, $filepath, $boundary ) {
		$body = '';
		if ( count( $params ) > 0 ) {
			foreach ( $params as $name => $value ) {
				$body .= '--' . $boundary . "\r\n";
				$body .= 'Content-Disposition: form-data; name="' . $name . '"';
				$body .= "\r\n\r\n";
				$body .= urldecode( $value );
				$body .= "\r\n";
			}
		}
		if ( strlen( $filepath ) > 0 ) {
			$data = file_get_contents( $filepath );
			if ( $data !== false ) {
				$mime  = 'application/octet-stream';
				$body .= '--' . $boundary . "\r\n";
				$body .= 'Content-Disposition: form-data; name="pic"; filename="uploaded"'."\r\n";
				$body .= 'Content-Type: ' . $mime;
				$body .= "\r\n\r\n";
				$body .= $data;
				$body .= "\r\n";
			}
		}
		if ( count( $params ) > 0 || strlen( $filepath ) > 0 ) {
			$body .= '--' . $boundary . "--\r\n";
		}

		return $body;
	}

	private function build_token( $identity, $secretkey, $body ) {

		// get a standard unix time stamp
		$dt = time();

		// create the data string to encode
		$data = "{$identity}.{$dt}";
		$sign_data = $data;
		if ( strlen( $body ) > 0 ) {
			$body = trim( $body );
			$sign_data = "{$data}.{$body}";
		}

		// get a random 10 digit number for the salt
		$digits = 10;
		$salt = mt_rand( pow( 10, $digits - 1 ), pow( 10, $digits ) - 1 );

		// create the key by concatenating salt with secret api key
		$key = $salt . $secretkey;

		// create a sha256 signature using the salt again and the secret API key and the data string
		$sig = $salt . hash_hmac( 'sha256', $sign_data, $key, true );

		// compose the token string, which is the value of the HTTP Authorization header
		$token = "CLRAUTH {$identity} " . $this->base64_url_encode( $sig ) . " " . $this->base64_url_encode( $data );
		return $token;

	}

	private function base64_url_encode( $input ) {
		return strtr( base64_encode( $input ), '+/', '-_' );
	}

	function base64_url_decode( $input ) {
		return base64_decode( strtr( $input, '-_', '+/' ) );
	}

}

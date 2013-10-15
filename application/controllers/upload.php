<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Upload extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->helper( array( 'form', 'url' ) );
	}

	function index( $animate ) {
		$path = $this->config->item( 'images_path' );
		$config[ 'upload_path' ] = '.' . $path;
		$config[ 'allowed_types' ] = $this->config->item( 'images_file_types' );
		$config[ 'max_size' ] = $this->config->item( 'images_max_size' );
		$config[ 'max_width' ] = $this->config->item( 'images_max_width' );
		$config[ 'max_height' ] = $this->config->item( 'images_max_height' );
		$this->load->library( 'upload', $config );
		if ( ! $this->upload->do_upload() ) {
			$error = array( 'error' => $this->upload->display_errors() );
			echo json_encode( $error );
		} else {
			$data = $this->upload->data();
			if ( $animate == "animate" ) {
				$meme = $this->createMeme( $data[ 'file_path' ], $data[ 'raw_name' ], $data[ 'file_ext' ] );
				$frame1 = $this->createFrame( $data[ 'file_path' ], $meme, 'ball1.png' );
				$frame2 = $this->createFrame( $data[ 'file_path' ], $meme, 'ball2.png' );
				$frame3 = $this->createFrame( $data[ 'file_path' ], $meme, 'ball3.png' );
				$frame4 = $this->createFrame( $data[ 'file_path' ], $meme, 'ball4.png' );
				$animation = $this->animate( $data[ 'file_path' ], array( $frame1, $frame2, $frame3, $frame4 ) );
				echo json_encode( array( 'data' => $path . $animation ) );
			} else {
				$data[ 'file_path' ] = $path;
				$data[ 'full_path' ] = '';
				echo json_encode( array( 'data' => $data ) );
			}
		}
	}

	function grab( $url ) {
		$path = $this->config->item( 'images_path' );
		$key = md5( microtime() ) . rand( 1111, 9999 );
		$path = "." . $path . $key;

		echo $url . "\n";

		$ch = curl_init( $url );
		curl_setopt( $ch, CURLOPT_HEADER, 0 );
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
		curl_setopt( $ch, CURLOPT_BINARYTRANSFER, 1 );
		$raw = curl_exec( $ch );
		curl_close( $ch );
		$fp = fopen( $path, 'x' );
		fwrite( $fp, $raw );
		fclose( $fp );

		$finfo = finfo_open( FILEINFO_MIME_TYPE );
		echo $path . "\n";
		echo finfo_file( $finfo, $path );
		finfo_close( $finfo );
	}

	private function animate( $file_path, $frames ) {
		$animation = new Gmagick( $file_path . $frames[ 0 ] );
		$f1 = new Gmagick( $file_path . $frames[ 1 ] );
		$f2 = new Gmagick( $file_path . $frames[ 2 ] );
		$f3 = new Gmagick( $file_path . $frames[ 3 ] );
		$f2->nextimage();
		$f2->addimage( $f3 );
		$f2->previousimage();
		$f1->nextimage();
		$f1->addimage( $f2 );
		$f1->previousimage();
		$animation->nextimage();
		$animation->addimage( $f1 );
		$animation->previousimage();
		$animation->setimageformat( "gif" );
		$key = md5( microtime() ) . rand( 1111, 9999 );
		$animation->write( $file_path . $key . '.t.gif' );
		return $key . '.t.gif';
	}

	private function createFrame( $file_path, $file_name, $frame_name ) {
		$source = new Gmagick( $file_path . $frame_name );
		$canvas = new Gmagick( $file_path . $file_name );
		$canvas->compositeimage( $source, 1, 0, 0 );
		$key = md5( microtime() ) . rand( 1111, 9999 );
		$canvas->write( $file_path . $key . '.t.jpg' );
		return $key . '.t.jpg';
	}

	private function createMeme( $file_path, $raw_name, $file_ext ) {
		$w = $this->config->item( 'images_width' );
		$h = $this->config->item( 'images_height' );
		$source = new Gmagick( $file_path . $raw_name . $file_ext );
		$source->scaleimage( $w, $h, true );
		$canvas = new Gmagick();
		$canvas->newimage( $w, $h, '#000' );
		$sourceh = $source->getimageheight();
		$sourcew = $source->getimagewidth();
		$x = ( $w - $sourcew ) / 2;
		$y = ( $h - $sourceh ) / 2;
		$canvas->compositeimage( $source, 1, $x, $y );
		$key = md5( microtime() ) . rand( 1111, 9999 );
		$canvas->write( $file_path . $key . '.t.jpg' );
		return $key . '.t.jpg';
	}

}

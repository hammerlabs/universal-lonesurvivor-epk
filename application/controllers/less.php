<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Less extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->library('lessc' );
		$this->load->helper('url');
	}

	function index(  ) {
		$output = $_SERVER["REQUEST_URI"];
		$output = substr($output, 6);

		$input=str_replace(".css",".less",$output);
		$less = new lessc;
		
		try{
			header("Content-Type: text/css");
			$less->checkedCompile($input, $output);
			readfile($output);
		} catch (exception $ex){
			print "LESSC FEHLER:";
			print $ex->getMessage();
		}
	}

}

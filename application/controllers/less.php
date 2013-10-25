<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );
/* Copyright 2013 Hammer Technology Services, Inc. */

class Less extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->library('lessc' );
		$this->load->helper('url');
	}

	function index(  ) {
		$output = $_SERVER["REQUEST_URI"];
		//$output = substr($output, 6);
		$output = preg_replace("/(.*)\/less\//i",$this->config->item( 'less_route_replacement' )
."/",$output);

		$input=str_replace(".css",".less",$output);
		$less = new lessc;
		//print $input."\n";
		//print $output."\n";
		//print $this->config->item( 'less_route_replacement' )."\n";

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

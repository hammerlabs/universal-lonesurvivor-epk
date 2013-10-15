<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {
	public function index() {

		$this->load->library("readimages");


		$data=array();

		$ua=getBrowser();
		$urlinfo=getUrl();
		$releaseDateInfo=getReleaseDateInfo($urlinfo);
		
		$data["ua"] = $ua;
		$data["title"] = $this->config->item( 'title' );
		$data["desc"] = $this->config->item( 'desc' );
		$data["url"] = $this->config->item( 'url' );
		$data["image"] = $this->config->item( 'image' );
		$data["facebook_url"] = $this->config->item( 'facebook_url' );
		$data["keywords"] = $this->config->item( 'keywords' );
		$data["og_title"] = $this->config->item( 'og_title' );		
		$data["ga_account"] = $this->config->item( 'ga_account' );	

		$this->load->view('main_head',$data);
		
		$this->load->view('main',$data);
		
		$this->load->view('main_foot',$data);
	}

	public function info(){
		$this->load->view('info');
	}
}

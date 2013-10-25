<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* Copyright 2013 Hammer Technology Services, Inc. */

class Main extends HLabs_Controller {
	public function index() {
		$ua=getBrowser();
		if ($ua['device_type']=="mobile"){
			redirect( $this->config->item( 'mobile_redirect_url' ) );	
		}

		$this->load->library("readimages");


		$data=array();

		$urlinfo=getUrl();
		$releaseDateInfo=getReleaseDateInfo($urlinfo);
		
		$gallery_photos=$this->readimages->preloadFromFolder("assets/img/gallery/photos","photo transparent");
		$data["gallery_photos"]=$gallery_photos;
		$gallery_thumbs=$this->readimages->preloadFromFolder("assets/img/gallery/thumbs","hide");
		$data["gallery_thumbs"]=$gallery_thumbs;

		$data["ua"] = $ua;
		$data["title"] = $this->config->item( 'title' );
		$data["desc"] = $this->config->item( 'desc' );
		$data["url"] = $this->config->item( 'url' );
		$data["image"] = $this->config->item( 'image' );
		$data["facebook_url"] = $this->config->item( 'facebook_url' );
		$data["keywords"] = $this->config->item( 'keywords' );
		$data["og_title"] = $this->config->item( 'og_title' );		
		$data["ga_account"] = $this->config->item( 'ga_account' );	

		
		$this->_add_css("css/normalize.min.css","head");
		$this->_add_css("css/jquery.jscrollpane.css","head");
        
        $this->_add_js("js/libs/jquery-1.10.1.min.js","head");
        $this->_add_js("js/libs/jquery.queryloader2.js","head");
        $this->_add_js("js/libs/modernizr-2.6.2-respond-1.1.0.min.js","head");



		//Javascript added at the end of the document
        $this->_add_js("js/libs/requestAnimationFrame.js","footer",array("weight"=>-200));
        $this->_add_js("js/libs/TweenMax.min.js","footer");
        $this->_add_js("js/libs/ScrollToPlugin.min.js","footer");
        $this->_add_js("js/libs/jquery.touchSwipe.js","footer");
        $this->_add_js("js/libs/skrollr.js","footer");
        $this->_add_js("js/libs/jquery.fitvids.js","footer");
        $this->_add_js("js/libs/jquery.mousewheel.js","footer");
        $this->_add_js("js/libs/jquery.jscrollpane.min.js","footer");
        //$this->_add_js("js/libs/jquery.parallax.js","footer");
		//$this->_add_js("js/libs/binaryajax.js","footer");
		//$this->_add_js("js/libs/exif.js","footer");
		//$this->_add_js("js/libs/jcanvas.min.js","footer");
		//$this->_add_js("js/libs/load-image.min.js","footer");
		//$this->_add_js("js/oauth.js","footer");
		//$this->_add_js("js/upload.js","footer");


		$preloader = $this->load->view('main_preloader',$data,true);
		$loader = $this->load->view('main_loader',$data,true);

		
		$main = $this->load->view('main',$data,true);
		
		$foot = $this->load->view('main_foot',$data,true);

		$head = $this->load->view('main_head', $data, true);

		$this->output->append_output($head);
		$this->output->append_output($preloader);
		$this->output->append_output($loader);
		$this->output->append_output($main);
		$this->output->append_output($foot);
	}

	public function story() {
		$ua=getBrowser();
		if ($ua['device_type']=="mobile"){
			redirect( $this->config->item( 'mobile_redirect_url' ) );	
		}

		$data=array();

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

		
		$this->_add_css("css/normalize.min.css","head");
		$this->_add_css("css/jquery.jscrollpane.css","head");
        
        $this->_add_js("js/libs/jquery-1.10.1.min.js","head");
        $this->_add_js("js/libs/jquery.queryloader2.js","head");
        $this->_add_js("js/libs/modernizr-2.6.2-respond-1.1.0.min.js","head");



		//Javascript added at the end of the document
        $this->_add_js("js/libs/requestAnimationFrame.js","footer",array("weight"=>-200));
        $this->_add_js("js/libs/TweenMax.min.js","footer");
        $this->_add_js("js/libs/jquery.mousewheel.js","footer");
        $this->_add_js("js/libs/jquery.jscrollpane.min.js","footer");

		$preloader = $this->load->view('main_preloader',$data,true);
		$loader = $this->load->view('main_loader',$data,true);

		
		$main = $this->load->view('story',$data,true);
		
		$foot = $this->load->view('main_foot',$data,true);

		$head = $this->load->view('main_head', $data, true);

		$this->output->append_output($head);
		$this->output->append_output($preloader);
		$this->output->append_output($loader);
		$this->output->append_output($main);
		$this->output->append_output($foot);
	}


	public function charity() {
		$ua=getBrowser();
		if ($ua['device_type']=="mobile"){
			redirect( $this->config->item( 'mobile_redirect_url' ) );	
		}

		$data=array();

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

		
		$this->_add_css("css/normalize.min.css","head");
		$this->_add_css("css/jquery.jscrollpane.css","head");
        
        $this->_add_js("js/libs/jquery-1.10.1.min.js","head");
        $this->_add_js("js/libs/jquery.queryloader2.js","head");
        $this->_add_js("js/libs/modernizr-2.6.2-respond-1.1.0.min.js","head");



		//Javascript added at the end of the document
        $this->_add_js("js/libs/requestAnimationFrame.js","footer",array("weight"=>-200));
        $this->_add_js("js/libs/TweenMax.min.js","footer");
        $this->_add_js("js/libs/jquery.mousewheel.js","footer");
        $this->_add_js("js/libs/jquery.jscrollpane.min.js","footer");

		$preloader = $this->load->view('main_preloader',$data,true);
		$loader = $this->load->view('main_loader',$data,true);

		
		$main = $this->load->view('charity',$data,true);
		
		$foot = $this->load->view('main_foot',$data,true);

		$head = $this->load->view('main_head', $data, true);

		$this->output->append_output($head);
		$this->output->append_output($preloader);
		$this->output->append_output($loader);
		$this->output->append_output($main);
		$this->output->append_output($foot);
	}

	public function info(){
		$this->load->view('info');
	}
}

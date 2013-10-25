<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* Copyright 2013 Hammer Technology Services, Inc. */

class Status extends CI_Controller {
	public function index() {
		//Check features
		$this->load->library("features");
		$features=$this->config->item("features");
		$required_features=$this->config->item("required_features");

		foreach($features as $name=>$feature){			
			$class="";
			$feature["available"]=$this->features->checkByName($name);
			if ($feature["available"]){
				$class="available";
			}
			else{
				if (in_array($name,$required_features)){
					$class="required not-available";
				}
				else{
					$class="not-available";
				}
			}
			$feature["class"]=$class;
			$features[$name]=$feature;
		}


		//Check folders
		$check_folders=$this->config->item("check_folders");
		
		foreach($check_folders as $key=>$check_folder){
			$class="";
			$folder=$check_folder["folder"];
			$requires_write=$check_folder["requires_write"];

			if (is_dir($folder)){				
				if (is_writable($folder)){
					$class="exists writeable";
				}
				else{
					$class="exists not-writeable";
				}
			}
			else{
				$class="not-exists not-writeable";
			}

			if ($requires_write){
				$class=$class." requires-write";
			}
			$check_folder["class"]=$class;
			$check_folders[$key]=$check_folder;
		}
		 


		$data=array();
		$data["features"]=$features;
		$data["folders"]=$check_folders;

		$this->load->view("status",$data);

	}

}

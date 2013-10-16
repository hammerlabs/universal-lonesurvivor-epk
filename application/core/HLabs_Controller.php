<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * CodeIgniter HLabs Starter Kit Controller
 *
 */
 class HLabs_Controller extends CI_Controller
{

	protected $css_groups=array();
	protected $js_groups=array();
	protected $default_js_options=array("minify"=>true,"weight"=>0);
	protected $default_css_options=array("minify"=>true,"weight"=>0);

	public function __construct()
	{
		parent::__construct();
	}

	public function _add_css($css,$group="head",$options=array())
	{
		$options=array_replace($this->default_css_options,$options);
		$options["file"]=$css;
		$this->css_groups[$group][]=$options;
	}

	public function _add_js($js,$group="head", $options=array())
	{
		$options=array_replace($this->default_js_options,$options);
		$options["file"]=$js;
		$this->js_groups[$group][]=$options;
	}

	public function _js_includes($group="head"){
		minjs($this->_js_includes_array($group));
	}

	public function _css_includes($group="head"){
		minjs($this->_css_includes_array($group));	
	}


	public function _js_includes_array($group="head"){
		$js=$this->js_groups[$group];
		$js=$this->sortByColumn($js,"weight");

		return $this->arrayColumn($js,"file"); 
	}

	public function _css_includes_array($group="head"){
		$css=$this->css_groups[$group];
		$css=$this->sortByColumn($css,"weight");
		
		return $this->arrayColumn($css,"file"); 
	}


	public function _js_includes_string($group="head"){
		$includes="";
		$js=$this->js_groups[$group];

		$js=$this->sortByColumn($js,"weight");

		foreach ($js as $key => $js_include) {
			$includes.='<script src="'.$js_include["file"].'"></script>';
		}
		return $includes;
	}

	public function _css_includes_string($group="head"){
		$includes="";
		$css=$this->css_groups[$group];
		$css=$this->sortByColumn($css,"weight");

		foreach ($css as $key => $css_include) {
			$includes.='<link rel="stylesheet" href="'.$css_include["file"].'" />';
		}

		return $includes;
	}


	private function sortByColumn($array,$column="weight"){
		$sortItems=$this->arrayColumn($array,"weight"); 

		array_multisort($array,$sortItems);
		return $array;
	}

	private function arrayColumn($array,$column){
		$items=array();
		foreach ($array as $key=>$value){
			$items[$key]=$value[$column];
		}
		return $items;
	}

}
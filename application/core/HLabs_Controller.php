<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * CodeIgniter HLabs Starter Kit Controller
 *
 */
 class HLabs_Controller extends CI_Controller
{

	protected $css_groups=array();
	protected $js_groups=array();


	public function __construct()
	{
		parent::__construct();
	}

	public function _add_css($css,$group="head",$options=array())
	{
		$this->css_groups[$group][]=$css;
	}

	public function _add_js($js,$group="head", $options=array())
	{
		$this->js_groups[$group][]=$js;
	}

	public function _js_includes_array($group="head"){
		$js=$this->js_groups[$group];
		return $js;
	}

	public function _css_includes_array($group="head"){
		$css=$this->css_groups[$group];
		return $css;
	}


	public function _js_includes_string($group="head"){
		$includes="";
		$js=$this->js_groups[$group];

		foreach ($js as $key => $js_file) {
			$includes.='<script type="text/javascript" src="'.$js_file.'"></script>'."\n";
		}
		return $includes;
	}

	public function _css_includes_string($group="head"){
		$includes="";
		$css=$this->css_groups[$group];

		foreach ($css as $key => $css_file) {
			$includes.='<link rel="stylesheet" href="'.$css_file.'">'."\n";
		}

		return $includes;
	}



}
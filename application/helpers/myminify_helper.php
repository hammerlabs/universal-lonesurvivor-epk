<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* Copyright 2013 Hammer Technology Services, Inc. */

function minjs($jsarr) {
	minfiles("js", $jsarr);
}

function mincss($cssarr) {
	minfiles("css", $cssarr);
}

function minfiles($type, $filesarr) {
	$count = 0;

	// read config parameters
	$CI =& get_instance();
	$base = ($type == "js") ? $CI->config->item("minify_js_base_folder") : $CI->config->item("minify_css_base_folder");
	$minify = ($type == "js") ? $CI->config->item("minify_js") : $CI->config->item("minify_css");
	$combine = ($type == "js") ? $CI->config->item("combine_js") : $CI->config->item("combine_css");
	if (!$minify) $combine = false;


	// clean files (so far, this means removing non-existant files from list)
	$clean = array();
	foreach ($filesarr as $onefile) {
		$onefile = $base."/{$onefile}";
		if (checkFileExists($onefile) || !($minify)) {
			$clean[] = $onefile;
		}
	}


	// combine or not?
	$chunk_size = ($combine) ? 5 : 1;
	$chunks = array_chunk($clean, $chunk_size);

	// and now, minify
	foreach ($chunks as $chunk) {
		$chunkstring = implode(",", $chunk);
		if ($minify) {
			$chunkstring = "min/?f={$chunkstring}";
		} else {
			$chunkstring = "{$chunkstring}";
		}
		if ($type == "js") {
			echo "<script type=\"text/javascript\" src=\"{$chunkstring}\"></script>";
		} else {
			echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"{$chunkstring}\" media=\"screen\" />";
		}
	}
}

function checkFileExists($f) {
	$p = FCPATH;
	$path = "{$p}{$f}";
	return is_file($path);
}

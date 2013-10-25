<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* Copyright 2013 Hammer Technology Services, Inc. */

/*
 * look for a lang key, and print it
 */
function p($k) {
	echo _p($k);
}

/*
 * look for a lang key, and return it
 */
function _p($k) {
	$lang = getLang();
	$ks = getKeys($lang);
	if (isset($ks[$k])) return $ks[$k];
	return $k;
}

function getLang() {
	$uri = $_SERVER["REQUEST_URI"];
	$parts = explode("/", $uri);
	$CI =& get_instance();
	$available_langs = $CI->config->item("available_langs");
	$default_lang = $CI->config->item("default_lang");
	if (is_array($parts) && count($parts) > 1) {
		$lang = $parts[1];
		if (in_array($lang, $available_langs)) return $lang;
	}
	return $default_lang;
}

function getKeys($lang) {
	$allkeys = array();
	$values = parseLangFile($lang);
	foreach ($values as $k) {
		if (isKey($k)) {
			list($langKey, $langValue) = getPair($k);
			$allkeys[$langKey] = $langValue;
		}
	}
	return $allkeys;
}

function parseLangFile($lang) {
	$f = APPPATH . "language/{$lang}.xml";
	if (is_file($f)) {
		$string = read_file($f);
		$p = xml_parser_create();
		xml_parse_into_struct($p, $string, $values);
		xml_parser_free($p);
		return $values;		
	} else {
		return array();
	}
}

function isKey($d) {
	return ($d["tag"] == "KEY" && $d["type"] == "complete" && is_array($d["attributes"]) && isset($d["attributes"]["K"]) && isset($d["value"]));
}

function getPair($d) {
	return array($d["attributes"]["K"], $d["value"]);
}

var devices=Array();
devices["android 3"]="tablet";
devices["iphone"]="phone";
devices["android"]="phone";
devices["ipad"]="tablet";
devices["other"]="phone";

var parm='';

$(document).ready(function(){						   
	reviewScreen();	
});
//check screen orientation
window.onorientationchange = function() {
	reviewScreen();	
}

function getScreen() {
	var orientation = window.orientation;
	
	if (typeof orientation == "undefined") return 1;
	var uagent = navigator.userAgent.toLowerCase();

	if (uagent.search("android") > -1) {		
		switch (orientation) {
			case 90:
			case -90:
				return 1;//wide
				break ;
			default :
				return -1;//narrow
				break ;
		}
	} else {
		switch (orientation) {
			case 90:
			case -90:
				return 1;//wide
				break ;
			default :
				return -1;//narrow
				break ;
		}
	}

}

function reviewScreen() {

	if (getScreen() == -1) {
		setNarrowScreen();
	} else {
		setWideScreen();
	}
}


function initPage() {
	loadDevice();
	loadTemplate("location");
	pageNavigate();
	window.onhashchange = pageNavigate;
}



// Detects the current device.
function detectedDevice()
{
	var uagent = navigator.userAgent.toLowerCase();

	for (x in devices){
		if (uagent.search(x) > -1) return devices[x];
	}
	return devices["other"];
}

//Loads css for detected device
function loadDevice(){
	var device=detectedDevice();
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', css_base + device+'/style.css') );
        $('head').append( $('<script type="text/javascript" language="javascript"></script>').attr('src', js_base+device+'/hooks.js') );	
		//alert(js_base+device + " create JS file!! common JS");
}


//narrow
function setNarrowScreen() {
	$(".portrait_detected").show();
}

//wide
function setWideScreen() {
	$(".portrait_detected").hide();

}


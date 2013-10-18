(function( $ ) {


	// make console safe to use
	if (typeof console === "undefined"){
	    console={};
	    console.log = function(){
	        return;
	    }
	}


	window.isiPad = navigator.userAgent.match(/iPad/i) != null;

	//We want to detect swipe only if in iPad. Desktop browsers don't react exactly well with this
    if (window.isiPad){
		$(window).bind( 'orientationchange', function(e){
		    if ($.event.special.orientationchange.orientation() == "portrait") {
		        //Do whatever in portrait mode
		    } else {
		        //Do Whatever in landscape mode
		    }
		});

	}

	// support chrome and firefox by changing src to ogv in js instead of nested source tags
	var videorefs = $( "body" ).find("video");
	if (videoRefs[0] && !videorefs[0].canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) {
		videorefs.each(function() {
			$(this).src = $(this).src.replace(".mp4", ".ogv");
		});
	}



	//Code that needs to run only when DOM and scripts are loaded.
	$(document).ready(function () {

		window.preloader = $(".loader-container.preloader");
		window.mainloader=$(".loader-container.main-loader");
		window.maincontainer=$(".main-container");

		//Load preloader images
	   	window.mainloader.queryLoader2({barHeight: 2,onComplete:function(){
			
							    	
	    	//Once preloader is done, hide it and show the loader
	    	TweenLite.to(window.preloader, 1, {opacity:0});
	    	window.mainloader.css("opacity",0).show();
	    	TweenLite.to(window.mainloader, 1, {opacity:1});
	    				
			//Add source to deferred images to get them downloaded by browser
			//We do this to avoid the browser from delaying preloader because of loading imgs already at dom
			$("img").each(function(){
				var src=$(this).data("source")
				if (src!=""){
					$(this).attr("src",src);
				}
			});

			setTimeout(startMainLoader, 1000); 

	    }});

		// jQuery compatible initialization of Facebook JS SDK
		/*$.ajaxSetup({ cache: true });
		$.getScript('//connect.facebook.net/en_US/all.js', function(){
			// put all FB JS SDK initialization logic in here so that we ensure the FB API is available first
			FB.init({
				appId      : '000000000000000',                    // App ID from the app dashboard
				channelUrl : '//'+location.host+'/channel.html',   // Channel file for x-domain comms
				status     : true,                                 // Check Facebook Login status
				xfbml      : true                                  // Look for social plugins on the page
			});
			//$('#loginbutton,#feedbutton').removeAttr('disabled');
	    	//FB.getLoginStatus(updateStatusCallback);
		});*/


	});

	function startMainLoader(){
	    window.mainAssetsLoader=window.maincontainer.queryLoader2(
	    	{
	    		onComplete:function(){
			    	window.mainLoaderReady=true;
			    	window.maincontainer.css("opacity",0).show();
			    	TweenLite.to(window.mainloader, 1, {opacity:0});
			    	TweenLite.to(window.maincontainer, 1, {opacity:1,onComplete:function(){
			    		window.mainloader.remove();
			    		siteReady();
			    	}});

			    },
			    onProgress:function(percentage){
			    	//Do something with the percentage of loading that is complete.
			    	//$(".loader .loading-radar .text").html(percentage);
			    }
			}
		);

	}

	function siteReady(){
		console.log("siteReady", "now add click listeners and other initialization code to the UI, start build in animations, etc");
	}

	

}( jQuery ));

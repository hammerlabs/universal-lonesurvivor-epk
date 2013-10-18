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
	var videoRefs = $( "body" ).find("video");
	if (videoRefs && videoRefs[0] && !videoRefs[0].canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) {
		videoRefs.each(function() {
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
		$.ajaxSetup({ cache: true });
		$.getScript('//connect.facebook.net/en_US/all.js', function(){
			// put all FB JS SDK initialization logic in here so that we ensure the FB API is available first
			FB.init({
				appId      : '167842429947070',                    // App ID from the app dashboard
				channelUrl : '//'+location.host+'/channel.html',   // Channel file for x-domain comms
				status     : true,                                 // Check Facebook Login status
				xfbml      : true                                  // Look for social plugins on the page
			});
			//$('#loginbutton,#feedbutton').removeAttr('disabled');
	    	//FB.getLoginStatus(updateStatusCallback);
		});


	});

	function startMainLoader(){
	    window.mainAssetsLoader=window.maincontainer.queryLoader2(
	    	{
	    		onComplete:function(){
			    	window.mainLoaderReady=true;
			    	window.maincontainer.css("opacity",0).show();
			    	TweenLite.to(window.mainloader, 1, {opacity:0,onComplete:function(){
			    		window.mainloader.remove();
			    		window.preloader.remove();
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
    	TweenLite.from($( ".wrapper.head" ).show(), 1, {top:-100});
    	TweenLite.from($( ".wrapper.foot" ).show(), 1, {bottom:-100});
    	$( ".ui-fixed" ).show();
    	TweenLite.from($( "#logo" ).show(), .4, {marginRight:-300, opacity:0, delay: 1});
    	TweenLite.from($( "#showtimes-wrapper" ).show(), .4, {marginRight:-300, opacity:0, delay: 1.2});
    	TweenLite.from($( "#nav-wrapper" ).show(), .4, {marginRight:-300, opacity:0, delay: 1.4});
    	TweenLite.from($( "#flag_link" ).show(), .4, {marginRight:-300, opacity:0, delay: 1.6});
    	TweenLite.to($( ".main-container" ), 1, {opacity:1, delay: 2});
	/* ==========================================================================
	   add movie ticket look up feature
	   ========================================================================== */
		var zipSelector = "#zip";
		var fandangoSelector = "a.fandango";
		var movieticketsSelector = "a.movietickets";
		// setup tickets box
		$( zipSelector ).keyup(function () { 
		    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
		       this.value = this.value.replace(/[^0-9\.]/g, '');
		    }
		    if (this.value.length > 5) {
				this.value = this.value.substr(0, 5);
		    }
		});
		$( fandangoSelector ).click(function(e) {
			if ($( zipSelector ).val().length == 5) {
				e.preventDefault();
				window.open(this.href + "?location=" + $( zipSelector ).val(), "_blank")
			}
		})
		$( movieticketsSelector ).click(function(e) {
			if ($( zipSelector ).val().length == 5) {
				e.preventDefault();
				window.open(this.href + "&SearchZip=" + $( zipSelector ).val(), "_blank")
			}
		})


	/* ==========================================================================
	   add ambient music feature
	   ========================================================================== */
		var audioUrl = "assets/audio/ambience.mp3";
		var audioSelector = ".audio-control";
		//Add ambience sound
		window.amb_snd = new Audio( audioUrl ); // buffers automatically when created
		amb_snd.addEventListener('ended', function() {
		    this.currentTime = 0;
		    this.play();
		}, false);			
		amb_snd.play();

		//Add sound control behavior
		$( audioSelector ).addClass("noSwipe").click(function(){
			if ($(this).hasClass("off")){
				$(this).removeClass("off");
				amb_snd.play();
			}
			else{
				$(this).addClass("off");
				amb_snd.pause();
			}
		});			

		$(window).focus(function() {
			if (! $( audioSelector ).hasClass("off")){
				amb_snd.play();
			}
	    });

	    $(window).blur(function() {
	    	if (! $( audioSelector ).hasClass("off")){
		 		amb_snd.pause();		        
		 		//In iPad (and probably needed on other tablets), mark the audio as mutted cos user will need to tap to turn it back on
		 		if (window.isiPad){
		 			$( audioSelector ).addClass("off");
		 		}
		 	}
	    });
	}

	

}( jQuery ));

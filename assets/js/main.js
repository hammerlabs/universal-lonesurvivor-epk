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

	function clickScrollIndicator(index) {
		console.log("clicked box",index);
		var targetScroll = window.scrollDest[index];
		var curScroll = $(window).scrollTop();
		var scrollDiff = targetScroll - curScroll;
		var duration = Math.abs(scrollDiff / 1000);
		window.clickToScrollOn = true;

	   	TweenLite.to($( ".white_box" ), duration, {top:50*index + "px"});
    	TweenLite.to(window, duration, {scrollTo:{y:targetScroll}, onComplete:function() {window.clickToScrollOn=false;}});
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

    	// found in gallery.js
    	initGallery();
	    // video playlist events
		$("#nav_videos").on("click",function(e){
			$(".ui-fixed").fadeToggle();
			$(".main-container").fadeToggle();
			$(".video_playlist").fadeToggle();
			$(".video_playlist iframe").attr("src", "//www.youtube.com/embed/videoseries?list=PLuq_rgCzEP_MpPbSdaxTrDxG-QdplZ4jn&autoplay=1&modestbranding=1");
			$(".video_playlist").fitVids();
		});
		$(".video_playlist .close").on("click",function(e){
			$(".ui-fixed").fadeToggle();
			$(".main-container").fadeToggle();
			$(".video_playlist").fadeToggle();
			$(".video_playlist iframe").attr("src", "");
		});
		// scroll indicator events
		window.scrollDest = [0, 1120, 3130, 5120, 7115, 8720];
		window.scrollTest = [0, 680, 2670, 4680, 6700, 8720];
		window.clickToScrollOn = false;
		$("tr.indicator_box").on("click",function(e){
			clickScrollIndicator($(this).data('index'));
		});
		$( window ).scroll(function() {
			var curScroll = $(window).scrollTop();
		    if (location.host.indexOf(".local")) {
		    	$('#status').html( curScroll );
		    }
		    if (window.clickToScrollOn) return;
		    var curSectionIndex = 0;
		    var destSectionIndex = 0;
			$.each(window.scrollTest, function( index, value ) {
				if (curScroll <= value) {
					curSectionIndex = index;
				} else if (curScroll > value) {
					destSectionIndex = index;
				}
			});
			if (curSectionIndex != destSectionIndex) {
			    var duration = Math.abs((destSectionIndex - curSectionIndex) * .1);
				TweenLite.to($( ".white_box" ), duration, {top:50*destSectionIndex + "px"});
			}
		});
		//social bar events
		$(".social-wrapper span").on("click",function(e){
			if ($(this).hasClass('selected')) {
				// user clicked on selected social button to close the whole panel
				$(this).removeClass('selected');
				$(".socialcontent").addClass('hide');
			} else {
				// user selected an unselected social button
				$(".social-wrapper .selected").removeClass('selected');
				$(this).addClass('selected');
				$(".socialcontent").removeClass('hide');
				$(".socialcontent div.socialcontent-wrapper").addClass('hide');
				if ($(this).hasClass('facebook')) {
					$(".socialcontent").removeClass('hide');
					$(".socialcontent div.socialcontent-wrapper.facebook").removeClass('hide');
				} else if ($(this).hasClass('twitter')) {
					$(".socialcontent").removeClass('hide');
					$(".socialcontent div.socialcontent-wrapper.twitter").removeClass('hide');
				} else if ($(this).hasClass('instagram')) {
					$(".socialcontent").removeClass('hide');
					$(".socialcontent div.socialcontent-wrapper.instagram").removeClass('hide');
				};
				$(".socialcontent").data('jsp').reinitialise();
			}
		});
		$('.socialcontent').jScrollPane({
			showArrows: false,
			horizontalGutter: 10,
			verticalGutter: 8,
			mouseWheelSpeed: 50
		});
		$(".socialcontent").addClass('hide');
		$(".socialcontent div.socialcontent-wrapper").addClass('hide');

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
		var audioUrl = (location.host.indexOf(".local") != -1 ? "" : "assets/audio/ambience.mp3");
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

		window.scroller=skrollr.init({
			forceHeight: false,
			smoothScrolling:false,
			mobileDeceleration:0.1
		});


	}

	

}( jQuery ));

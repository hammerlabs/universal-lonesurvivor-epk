(function( $ ) {


	// make console safe to use
	if (typeof console === "undefined"){
	    console={};
	    console.log = function(){
	        return;
	    }
	}

	window.isiPad = navigator.userAgent.match(/iPad/i) != null;

	//Code that needs to run only when DOM and scripts are loaded.
	$(document).ready(function () {
		//check screen orientation on iPad only
	    if (window.isiPad){
			reviewScreen();	
			window.onorientationchange = function() {
				reviewScreen();	
			}
		}

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
				var src=$(this).data("source");
				if (src!="" && src != undefined) {
					if (window.isiPad && src.indexOf("/anim.gif") != -1) {
						src = src.replace("/anim.gif", "/quote-large-img.png")
					}
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
			    	if (percentage > 17) $(".loader span.box1").css({background: '#fff'});
			    	if (percentage > 34) $(".loader span.box2").css({background: '#fff'});
			    	if (percentage > 50) $(".loader span.box3").css({background: '#fff'});
			    	if (percentage > 67) $(".loader span.box4").css({background: '#fff'});
			    	if (percentage > 84) $(".loader span.box5").css({background: '#fff'});
			    	if (percentage > 99) $(".loader span.box6").css({background: '#fff'});
			    }
			}
		);

	}

	function siteReady(){
    	if (!window.isiPad) {
	    	TweenLite.from($( ".wrapper.head" ).show(), 1, {top:-100});
	    	TweenLite.from($( ".wrapper.foot" ).show(), 1, {bottom:-100});
	    	$( ".ui-fixed" ).show();
	    	TweenLite.from($( "#logo" ).show(), .4, {marginRight:-300, opacity:0, delay: 1});
	    	TweenLite.from($( "#showtimes-wrapper" ).show(), .4, {marginRight:-300, opacity:0, delay: 1.2});
	    	TweenLite.from($( "#nav-wrapper" ).show(), .4, {marginRight:-300, opacity:0, delay: 1.4});
	    	TweenLite.from($( "#flag_link" ).show(), .4, {marginRight:-300, opacity:0, delay: 1.6});
	    	TweenLite.to($( ".main-container" ), 1, {opacity:1, delay: 2});
    	} else {
	    	$( ".wrapper.head" ).show();
	    	$( ".wrapper.foot" ).show();
	    	$( ".ui-fixed" ).show();
	    	$( ".main-container" ).css("opacity", "1");
    	}

    	// temporary production notes behavior
    	$("#nav_prodnotes").on('mouseover', function(e) {
    		$("#nav_prodnotes").html("COMING SOON");
    	});
    	$("#nav_prodnotes").on('mouseout', function(e) {
    		$("#nav_prodnotes").html("PRODUCTION NOTES");
    	});
    	// make logo link to home
		$("#logo").on("click",function(e){
			location.href = "site";
		});	


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
				$(".socialcontent").data('jsp').scrollTo(0,0);
			}
		});
		(new Social()).build();
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
		var audioSelector = ".audio-control";
        window.audioTracks = ["assets/audio/LS1s.mp3", "assets/audio/LS1s.mp3", "assets/audio/LS1s.mp3", "assets/audio/LS1s.mp3", "assets/audio/LS1s.mp3", "assets/audio/LS2s.mp3", "assets/audio/LS2s.mp3", "assets/audio/LS2s.mp3", "assets/audio/LS2s.mp3", "assets/audio/LS2s.mp3"];

		window.amb_snd = new Audio( "assets/audio/LS1s.mp3" ); // buffers automatically when created
		var snd2 = new Audio("assets/audio/LS2s.mp3");
		amb_snd.addEventListener('ended', function() {
		    this.currentTime = 0;
		    this.src = window.audioTracks.shift();
		    window.audioTracks.push( this.src );
		    console.log("audio changing to", this.src);
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

    	// found in gallery.js
    	initGallery();
    	// found in home.js
    	if ( typeof initHome == 'function' ) initHome();
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
	//narrow
	function setNarrowScreen() {
		$(".portrait_detected").show();
		$("body").css({overflow: 'hidden'});
	}

	//wide
	function setWideScreen() {
		$(".portrait_detected").hide();
		$("body").css({overflow: 'auto'});
	}
	

}( jQuery ));

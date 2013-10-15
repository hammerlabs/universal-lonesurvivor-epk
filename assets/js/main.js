(function( $ ) {




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


	//Prepare callback function to remove overlay when resources finish loading
	var killOverlay=function(){
		//window.scroller.setScrollTop(1150);
		$(".navbar-fixed-top .container").show();
		TweenLite.to($(".main_overlay.loading"),1,{opacity:0,onComplete:function(){
			$(".main_overlay.loading").hide();	
		}})
	};



	//Code that needs to run only when DOM and scripts are loaded.
	$(document).ready(function () {




	    $(".loader-container").queryLoader2({barHeight: 2,onComplete:function(){

	    	$(".loader-container .loader").show();

			
			//Add source to secuence images to get them downloaded by browser
			$("img").each(function(){
				var src=$(this).data("source")
				if (src!=""){
					$(this).attr("src",src);
				}
			});

			setTimeout(startMainLoader, 1000); 

	    }});


	});

	function startMainLoader(){
	    window.mainLoader=$(".main-container").queryLoader2(
	    	{
	    		onComplete:function(){
			    	window.mainLoaderReady=true;
			    },
			    onProgress:function(percentage){
			    	//Do something with the percentage of loading that is complete.
			    	//$(".loader .loading-radar .text").html(percentage);
			    }
			}
		);

	}


	function allLoaded(){
		if (red_api.authenticated){
			if (!window.loginBehaviorReady){
				window.behaviors();
			}
			mainScreen();
		}
		else{
			login();
		}

		
    	$(".main-container").css("opacity",0).show();
    	TweenLite.to($(".loader-container"), 1, {opacity:0});
    	TweenLite.to($(".main-container"), 1, {opacity:1,onComplete:function(){
    		$(".loader-container").remove();
    	}});

	}

	function mainScreen(){

			//window.footer=$(".main-container footer").eqfooter();
			if (!window.screener){
				window.screener=$("#main_screener").stripScreener({
					onStartScreening:function(){
				//		window.footer.stop();
					},
					onEndScreening:function(){
				//		window.footer.start();
					}

				});

				$('.main-container').parallax({limitY: 20, scalarY:0.7});
			}

    	$("#main_screener").css("opacity",0).show();
    	TweenLite.to($(".main .login"), 1, {opacity:0});
    	TweenLite.to($(".main-title"), 1, {opacity:1});
    	TweenLite.to($(".login-btn"), 1, {opacity:1});
    	TweenLite.to($(".logout-btn"), 1, {opacity:1});
    	TweenLite.to($("#main_screener"), 1, {opacity:1,onComplete:function(){

    		$( ".main .login" ).hide();
    	}});


	}
	

}( jQuery ));

(function( $ ) {


		$(window).bind( 'orientationchange', function(e){
		    if ($.event.special.orientationchange.orientation() == "portrait") {
		        $('html, body').scrollTop(0);
		    } else {
		        $('html, body').scrollTop(200);
		    }
		});




	//Code that needs to run only when DOM and scripts are loaded.
	$(document).ready(function () {
		$("#main-home #content").css("opacity",0); 
		//Start the loader and let it read all the images
	    $("body").queryLoader2({barHeight: 2,onComplete:function(){


	    }});


	});

	window.showHome=function(){
			$("#main-login").css("opacity",0); 
			TweenLite.to($("#main-register"), 0.5, {opacity:0});
			TweenLite.to($("#main-login"), 0.5, {opacity:0, 
				onComplete:function(){
					$("body").removeClass("guest");
					$("body").removeClass("capitol");
					TweenLite.to($("#main-home #content"), 0.5, {opacity:1});
				}
			});
	}


}( jQuery ));

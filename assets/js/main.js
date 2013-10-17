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
			    	}});

			    },
			    onProgress:function(percentage){
			    	//Do something with the percentage of loading that is complete.
			    	//$(".loader .loading-radar .text").html(percentage);
			    }
			}
		);

	}

	

}( jQuery ));

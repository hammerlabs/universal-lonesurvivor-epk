function initHome() {
	// reset the scroll position so that the indicator and scroll position start in synch
	$(document).scrollTop(0);
	// scroll indicator events
	window.scrollDest = [0, 1120, 3130, 5120, 7115, 8986];
	window.scrollTest = [0, 680, 2670, 4680, 6700, 8720];
	window.clickToScrollOn = false;
	$("tr.indicator_box").on("click",function(e){
		clickScrollIndicator($(this).data('index'));
	});
	$( window ).resize(function() {
		resizeWindow();
	});
	$( window ).scroll(function() {
		var curScroll = $(window).scrollTop();
	    if (location.host.indexOf(".local")) {
	    	$('#status').html( curScroll );
	    }
	    if (curScroll > 1000) {
	    	$("video.video-bg")[0].pause();
	    } else {
	    	$("video.video-bg")[0].play();
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

	$(".job .icon").on("click",function(e){
		$(this).siblings('.job-content').slideToggle("fast");
	});

	TweenMax.to($(".job .icon"), 1, {opacity: .5, repeat: -1, yoyo:true});

	var videobg = $("video.video-bg");
	var videoDuration = videobg.prop('duration');

	var updateProgressBar = function(){
	    if (videobg.prop('readyState')) {
	        var buffered = videobg.prop("buffered").end(0);
	        var percent = 100 * buffered / videoDuration;

	        //Your code here
	        console.log("video completion", percent);

	        //If finished buffering buffering quit calling it
	        if (buffered >= videoDuration) {
	                clearInterval(watchBuffer);
	                videobg.css('opacity', "1");
	        }
	    }
	};
	var watchBuffer = setInterval(updateProgressBar, 500);

	if (!window.isiPad) {
		window.scroller=skrollr.init({
			forceHeight: false,
			smoothScrolling:false,
			mobileDeceleration:0.1
		});
	}

}

function resizeWindow() {
	var curWidth = $( window ).width();
	if (curWidth < 1680) {
		// video height isn't touching the content below
		$("video.video-bg")[0].css('height', $("div.marcus.section").position().top);
	} else if (curWidth < 1024) {
		// force video to tay at 978px wide as a minimum
	}

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


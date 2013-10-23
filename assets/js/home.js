function initHome() {

	
	
	//if (!window.isiPad) {
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
			scrollWindow();
		});
		initHomeVideo();
		$(".job .icon").on("click",function(e){
			console.log($(this).siblings('.job-content')[0]);
			$($(this).siblings('.job-content')[0]).slideToggle();
		});

		TweenMax.to($(".job .icon"), 1, {opacity: .5, repeat: -1, yoyo:true});

		window.scroller=skrollr.init({
			forceHeight: false,
			smoothScrolling:false,
			mobileDeceleration:0.1
		});
	//} else {
		/*$('.job-content').removeClass("hide");
		$(".indicator").remove();

		$("video").on("touchstart",function(e){
			alert("touched video");
			setVideoBgUrl();
			//TweenMax.to($("video.video-bg"), 1, {opacity: '1'});
			videobg.play();
		});*/
	//}

}

function initHomeVideo() {
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
	                TweenMax.to(videobg, 1, {opacity: '1'});
	                $(videobg[0]).play();
	        }
	    }
	};

	var watchBuffer = setInterval(updateProgressBar, 500);
}

function scrollWindow() {
	var curScroll = $(window).scrollTop();
    if (location.host.indexOf(".local") != -1 || location.host.indexOf("192.168") != -1) {
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
}

function resizeWindow() {
	/*var curWidth = $( window ).width();
	if (curWidth < 1680) {
		// video height isn't touching the content below
		$("video.video-bg")[0].css('height', $("div.marcus.section").position().top);
	} else if (curWidth < 1024) {
		// force video to tay at 978px wide as a minimum
	}*/

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

function setVideoBgUrl() {
	var videobg = $("video.video-bg");
	videobg.attr("src", "assets/video/ls_BG_V3_1600kbps.mp4");
	// support chrome and firefox by changing src to ogv in js instead of nested source tags
	if (!videobg[0].canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) {
		$(videobg[0]).attr("src", $(videobg[0]).attr("src").replace(".mp4", ".ogv"));
	}
}

// I'm setting window.isiPad here again because at one point i was worried that this file was 
// getting loaded before main.js.. need to figure out how to use weights
window.isiPad = navigator.userAgent.match(/iPad/i) != null;
//if (!window.isiPad) {
	setVideoBgUrl();
//}
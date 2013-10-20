function galleryThumbPrev() {
	window.galleryThumbPageIndex--;
	if (window.galleryThumbPageIndex < 0) {
		window.galleryThumbPageIndex = window.galleryThumbPages - 1;
	}
	gotoThumbPage(window.galleryThumbPageIndex);
	console.log("thumbPage", window.galleryThumbPageIndex);
}

function galleryThumbNext() {
	window.galleryThumbPageIndex++;
	if (window.galleryThumbPageIndex >= window.galleryThumbPages) {
		window.galleryThumbPageIndex = 0;
	}
	gotoThumbPage();
	console.log("thumbPage", window.galleryThumbPageIndex);
}

function gotoThumbPage() {
	var setMarginLeftTo = "-" + (window.galleryThumbPageIndex * 978) + "px";
    TweenLite.to($(".gallery .thumb-pages"), 1, {marginLeft: setMarginLeftTo, ease:Power2.easeOut});
}

function synchThumbsToPhotos() {
	window.galleryThumbPageIndex = Math.floor((window.galleryIndex) / window.thumbsPerPage);
	gotoThumbPage();
}

function galleryPrev() {
	gotoPhoto(window.galleryIndex - 1);
}

function galleryNext() {
	gotoPhoto(window.galleryIndex + 1);
}

function gotoPhoto(index) {
	$( $(".gallery img.photo")[window.galleryIndex] ).toggleClass('transparent');
	$(".thumb-holder.p" + window.galleryIndex).removeClass('selected');
	window.galleryIndex = index;
	if (window.galleryIndex >= window.galleryLength) {
		window.galleryIndex = 0;
	} else if (window.galleryIndex < 0) {
		window.galleryIndex = window.galleryLength - 1;
	}
	$( $(".gallery img.photo")[window.galleryIndex] ).toggleClass('transparent');
	$(".thumb-holder.p" + window.galleryIndex).addClass('selected');
	synchThumbsToPhotos();
	console.log("index", window.galleryIndex);
}

function initGallery() {
	window.galleryIndex = 0;
	window.galleryLength = $(".gallery img.photo").length;
	$("#nav_gallery").on("click",function(e){
		$(".ui-fixed").fadeToggle();
		$(".main-container").fadeToggle();
		$( $(".gallery img.photo")[window.galleryIndex] ).toggleClass('transparent');
		$(".gallery").fadeToggle();
	});
	$(".gallery .close").on("click",function(e){
		$(".ui-fixed").fadeToggle();
		$(".main-container").fadeToggle();
		$( $(".gallery img.photo")[window.galleryIndex] ).toggleClass('transparent');
		$(".gallery").fadeToggle();
	});
	$(".gallery .arrow.left").on("click",function(e){
		galleryPrev();
	});
	$(".gallery .arrow.right").on("click",function(e){
		galleryNext();
	});
	var thumbsInCurrentPage = 0;
	var thumbPageStart = "<span class='thumb-page'>";
	var thumbPageEnd = "</span>";
	var thumbContent = "";
	window.thumbsPerPage = 4;
	window.galleryThumbPages = 0;
	window.galleryThumbPageIndex = 0;
	$.each($(".gallery img.photo"), function(index, val) {
		if (thumbsInCurrentPage == 0) {
			thumbContent += thumbPageStart;
		}
		$(val)[0].id = "p" + index;
		var thumbSrc = $(val)[0].src.replace("/photos/", "/thumbs/");
		thumbContent += '<span class="thumb-holder p' + index + '"><img class="thumb p'+ index +'" data-index="' + index + '" src="'+ thumbSrc +'" /></span>';
		thumbsInCurrentPage++;
		if (thumbsInCurrentPage == window.thumbsPerPage || index == (window.galleryLength - 1)) {
			thumbsInCurrentPage = 0;
			thumbContent += thumbPageEnd;
			window.galleryThumbPages++;
		}
	});
	$(".gallery .thumb-pages").append(thumbContent);
	$(".thumb-holder.p" + window.galleryIndex).addClass('selected');
	$(".gallery .thumbarrow_box.left").on("click",function(e){
		galleryThumbPrev();
	});
	$(".gallery .thumbarrow_box.right").on("click",function(e){
		galleryThumbNext();
	});
	$(".gallery .thumb").on("click",function(e){
		gotoPhoto($(this).data('index'));
	});
}
	
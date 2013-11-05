/*
 * QueryLoader v2 - A simple script to create a preloader for images
 *
 * For instructions read the original post:
 * http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/
 *
 * Copyright (c) 2011 - Gaya Kessler
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  2.5
 * Last update: 15-09-2013
 *
 */
(function($){
    $.queryLoader2 = function(el, options){
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("queryLoader2", base);

        //declare variables
        base.qLimageContainer = "";
        base.qLoverlay = "";
        base.qLbar = "";
        base.qLpercentage = "";
        base.qLimages = [];
        base.qLbgimages = [];
        base.qLimageCounter = 0;
        base.qLdone = 0;
        base.qLdestroyed = false;

        base.init = function(){

            base.options = $.extend({},$.queryLoader2.defaultOptions, options);

            //find images
            base.getAllBackgroundImages();
            base.findImageInElement(base.el);
            if (base.options.deepSearch == true) {
                base.$el.find("*:not(script)").each(function() {
                    base.findImageInElement(this);
                });
            }

            //create containers
            base.createPreloadContainer();
            if (base.options.useOverlay) base.createOverlayLoader();
        };

        //the container where unbindable images will go
        base.createPreloadContainer = function() {
            base.qLimageContainer = $("<div></div>").appendTo("body").css({
                display: "none",
                width: 0,
                height: 0,
                overflow: "hidden"
            });

            //add background images for loading
            for (var i = 0; base.qLbgimages.length > i; i++) {
                base.addImageForPreload(base.qLbgimages[i]);
                continue;
                /*$.ajax({
                    url: base.qLbgimages[i],
                    type: 'HEAD',
                    complete: function (data) {
                        if (!base.qLdestroyed) {
                            base.addImageForPreload(this['url']);
                        }
                    }
                });*/
            }
        };

        base.addImageForPreload = function(url) {
            var image = $("<img />").attr("src", url);
            //binding load before the DOM adding
            base.bindLoadEvent(image);
            image.appendTo(base.qLimageContainer);
        };

        //create the overlay
        base.createOverlayLoader = function () {
            var overlayPosition = "absolute";

            if (base.$el.prop("tagName") == "BODY") {
                overlayPosition = "fixed";
            } else {
                //base.$el.css("position", "relative");
            }

            base.qLoverlay = $("<div id='" + base.options.overlayId + "'></div>").css({
                width: "100%",
                height: "100%",
                backgroundColor: base.options.backgroundColor,
                backgroundPosition: "fixed",
                position: overlayPosition,
                zIndex: 666999, //very high!
                top: 0,
                left: 0
            }).appendTo(base.$el);

            base.qLbar = $("<div id='qLbar' class='qLbar'></div>").css({
                height: base.options.barHeight + "px",
                marginTop: "-" + (base.options.barHeight / 2) + "px",
                backgroundColor: base.options.barColor,
                width: "0%",
                position: "absolute",
                top: "50%"
            }).appendTo(base.qLoverlay);

            /*base.qLbar2 = $("<div id='qLbar2' class='qLbar'></div>").css({
                height: base.options.barHeight + "px",
                marginTop: "-" + (base.options.barHeight / 2) + "px",
                backgroundColor: base.options.barColor,
                width: "0%",
                position: "absolute",
                top: "51%"
            }).appendTo(base.qLoverlay);


            $("<div id='qLbarFix1'></div>").css({
                height: base.options.barHeight + "px",
                marginTop: "-" + (base.options.barHeight / 2) + "px",
                backgroundColor: base.options.barColor,
                width: "100%",
                position: "absolute",
                top: "50%",
                opacity:0.3
            }).appendTo(base.qLoverlay);            

            $("<div id='qLbarFix2'></div>").css({
                height: base.options.barHeight + "px",
                marginTop: "-" + (base.options.barHeight / 2) + "px",
                backgroundColor: base.options.barColor,
                width: "100%",
                position: "absolute",
                top: "51%",
                opacity:0.3
            }).appendTo(base.qLoverlay);  */          


            if (base.options.percentage == true) {
                base.qLpercentage = $("<div id='qLpercentage'></div>").text("0%").css({
                    height: "40px",
                    width: "100px",
                    position: "absolute",
                    fontSize: "3em",
                    top: "50%",
                    left: "50%",
                    marginTop: "-" + (59 + base.options.barHeight) + "px",
                    textAlign: "center",
                    marginLeft: "-50px",
                    color: base.options.barColor
                }).appendTo(base.qLoverlay);
            }

            if (!base.qLimages.length) {
                base.destroyContainers();
            }
        };

        //destroy all containers created by QueryLoader
        base.destroyContainers = function () {
            base.qLdestroyed = true;
            base.qLimageContainer.remove();
            base.qLoverlay.remove();
        };

        base.findImageInElement = function (element) {
            var url = "";
            var obj = $(element);
            var type = "normal";

            if (obj.css("background-image") != "none") {
                url = obj.css("background-image");
                type = "background";
            } else if (typeof(obj.attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
                url = obj.attr("src");
            }

            if (url.indexOf("gradient") == -1) {
                url = url.replace(/url\(\"/g, "");
                url = url.replace(/url\(/g, "");
                url = url.replace(/\"\)/g, "");
                url = url.replace(/\)/g, "");

                var urls = url.split(", ");

                for (var i = 0; i < urls.length; i++) {
                    if (urls[i].length > 0 && base.qLimages.indexOf(urls[i]) == -1 && !urls[i].match(/^(data:)/i)) {
                        var extra = "";

                        if (base.isIE() || base.isOpera()){
                            //filthy always no cache for IE, sorry peeps!
                            extra = "?rand=" + Math.random();
                            base.qLbgimages.push(urls[i] + extra);
                        } else {
                            if (type == "background") {
                                base.qLbgimages.push(urls[i]);
                            } else {
                                if (obj.data("loaded")!="loaded"){
                                    base.bindLoadEvent(obj);
                                }
                                else{
                                    var ok="uff";
                                }
                            }
                        }

                        base.qLimages.push(urls[i]);
                    }
                }
            }
        }

        base.getAllBackgroundImages = function() {
            var sheetList = document.styleSheets;
            var ruleList;
            var i, j, k;
            var imageList = [];

            /* look through stylesheets in reverse order that
            they appear in the document */
            for (i=sheetList.length-1; i >= 0; i--) {
                try {
                    ruleList = sheetList[i].cssRules;
                } catch (e) {}
                if (!ruleList) continue;
                for (j=0; j<ruleList.length; j++) {
                    //console.log(ruleList[j].cssText, ruleList[j]);
                    if (ruleList[j].type == CSSRule.STYLE_RULE && 
                        ruleList[j].cssText.indexOf('background-image') != -1) {
                        var bgImageRule = ruleList[j].style["background-image"];
                        if (!bgImageRule) {
                            bgImageRule = ruleList[j].cssText.substring(ruleList[j].cssText.indexOf("background-image:")+17);
                        }
                        if (bgImageRule.indexOf("gradient") != -1) continue;
                        var bgImages = bgImageRule.split(",");
                        for (k = bgImages.length - 1; k >= 0; k--) {
                            // assuming there are no script file names in URL like index.html 
                            // and that location href ends in /
                            var bgImage = bgImages[k].replace("../", location.href);
                            var bgImage = bgImage.replace(/"/g,"").replace(/url\(|\)$/ig, "");
                            if ($.inArray(bgImage, base.qLbgimages) == -1) {
                                var extra = "";
                                if (base.isIE() || base.isOpera()) extra = "?rand=" + Math.random();
                                if ($.trim(bgImage) == "none") continue;
                                base.qLbgimages.push(bgImage + extra);
                                //console.log(bgImageRule, bgImage);
                            }
                        };
                    }   
                }
            }
            return null;
        }

        base.isIE = function () {
            return navigator.userAgent.match(/msie/i);
        };

        base.isOpera = function () {
            return navigator.userAgent.match(/Opera/i);
        };

        base.bindLoadEvent = function (element) {
            base.qLimageCounter++;
            element.bind("load error", function () {
                base.completeImageLoading(this);
            });
        }

        base.completeImageLoading = function (el) {
            base.qLdone++;

            var percentage = (base.qLdone / base.qLimageCounter) * 100;
            if (base.options.useOverlay) {
                base.qLbar.stop().animate({
                    width: percentage + "%",
                    minWidth: percentage + "%"
                }, 200);
                /*base.qLbar2.stop().animate({
                    width: percentage + "%",
                    minWidth: percentage + "%"
                }, 200);*/
            }

            if (base.options.onProgress) {
                base.options.onProgress(Math.ceil(percentage));                
            }


            if (base.options.percentage == true) {
                base.qLpercentage.text(Math.ceil(percentage) + "%");
            }

            if (base.qLdone == base.qLimageCounter) {
                base.endLoader();
            }
        };

        base.endLoader = function () {
            base.qLdestroyed = true;
            base.onLoadComplete();
        };

        base.onLoadComplete = function() {
            if (!base.options.useOverlay) {
                //base.destroyContainers();
                base.options.onComplete();
            } else if (base.options.completeAnimation == "grow") {
                var animationTime = 500;

                /*base.qLbar2.stop().animate({
                    "width": "100%"
                });*/
                base.qLbar.stop().animate({
                    "width": "100%"
                }, animationTime, function () {
                    $(this).animate({
                        top: "0%",
                        width: "100%",
                        height: "100%"
                    }, 500, function () {
                        $('#' + base.options.overlayId).fadeOut(500, function () {
                            $(this).remove();
                            base.destroyContainers();
                            base.options.onComplete();
                        })
                    });
                });
            } else {
                $('#' + base.options.overlayId).fadeOut(500, function () {
                    $('#' + base.options.overlayId).remove();
                    base.destroyContainers();
                    base.options.onComplete();
                });
            }
        }

        // Run initializer
        base.init();
    };

    //The default options
    $.queryLoader2.defaultOptions = {
        onComplete: function() {},
        onProgress: function() {},
        backgroundColor: "#000",
        useOverlay: true,
        barColor: "#FFF",
        overlayId: 'qLoverlay',
        barHeight: 1,
        percentage: false,
        deepSearch: true,
        completeAnimation: "fade",
        minimumTime: 500
    };

    //function binder
    $.fn.queryLoader2 = function(options){
        return this.each(function(){
            (new $.queryLoader2(this, options));
        });
    };
})(jQuery);

//HERE COMES THE IE SHITSTORM
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0)
            ? Math.ceil(from)
            : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}
/* Copyright 2013 Hammer Technology Services, Inc. */

(function ( $ ) {
 
    $.fn.stripScreener = function( options ) {
        var self=this; 
        var tweening=false;
        // This is the easiest way to have default options.

        var settings = $.extend({
            // These are the defaults. 
            parallax:{limitY: 20, scalarY:0.7, scalarX:1.3},
            fade:{
                transitionTimeOut:0.3,         
                transitionTimeIn:0.8,
                waitIn: 0.5,
                waitOut:1.3,
                easing:"Power1.easeOut",
            },
            move:{
                transitionTime:1.6,         
                easing:"Circ.easeInOut",
            },
            screens:{
                visible:2,
                css:{
                    "background-repeat":"no-repeat",
                    "background-size":"100% 100%",
                    width: 166,
                    height: 100,
                    margin: "auto",
                    position: "absolute",
                    top: 0,
                    bottom: 0
                }
            },
            main_screen:{
                css:{
                    "background-repeat":"no-repeat",
                    "background-size":"100% 100%",
                    width: 591,
                    height: 379,
                    margin: "auto",
                    position: "absolute",
                    top: 0,
                    bottom: 0                                       
                }
            },
            css:{
                "max-width":"2140px",
                "min-width":"1024px",               
                "min-height":"500px",
                position:"absolute",
                width:"2140px",
                margin:"-345px 0 0 -1070px",
                left:"50%",
                overflow:"hidden",                
                top: "50%"
                
            },
            jump:"-190px"
        }, options );
		
		setSettings=function(newSettings){
			settings=$.extend(settings, newSettings);
		}

        goNext=function(){
            if (tweening) return;
            tweening=true;
            settings.center_idx+=1;
            if (settings.center_idx>=settings.screens.length) settings.center_idx=0;
            strip_center.find(".entering").removeClass("entering").addClass("leaving");
            var newCenterScreen=$(getScreen(settings.center_idx)).clone(true);
            newCenterScreen.addClass("entering")
                .append($("<div>").addClass("border"));
            newCenterScreen.find(".content-screen-bg").css("opacity",0);
            newCenterScreen.find(".parallax_layer").addClass("layer");
            newCenterScreen.parallax(settings.parallax);
        
            strip_center.append(newCenterScreen);

            
            strip_left.append(newLeft=$(getScreen(settings.center_idx-1)).clone(true))
            strip_right.append(newRight=$(getScreen(settings.center_idx+1)).clone(true));


            scale(newLeft,0.71);
            scale(newRight,0.71);
            $(".top-glow").empty();
            //Setup screen prior to making it visible
            var animations=strip_center.find(".entering.screen").attr("data-animations");
            if (animations){

                if (window.screen_setup[animations]){
                    window.screen_setup[animations](strip_center.find(".entering.screen").find(".content"));
                }
            }

            TweenLite.to(strip_center.find(".leaving .content-bg"), 0.8, {opacity:"0",ease:settings.fade.easing,delay:0.8});
            TweenLite.to(strip_center.find(".leaving .content-screen-bg"), settings.fade.transitionTimeOut, {opacity:"0",ease:settings.fade.easing,delay:settings.fade.waitOut});
            TweenLite.to(strip_center.find(".entering .content-screen-bg"), settings.fade.transitionTimeIn, {opacity:"1",ease:settings.fade.easing,delay:settings.fade.waitIn, onComplete:function(){
                    if (animations){
                        if (window.animations[animations]){
                            window.animations[animations](strip_center.find(".content"));
                        }
                    }
                }
            });
                    
             //First, transition out the current screen.
            strip_center.find(".leaving div[data-transition-move]").each(function(){
                var move=$(this).attr("data-transition-move");
                if (move){
                    TweenLite.to($(this), settings.move.transitionTime, {left:"-="+move,ease:settings.move.easing});
                }                
            });

            strip_center.find(".leaving div[data-transition-fade]").each(function(){
                var fade=$(this).attr("data-transition-fade");
                var fadeFactor=parseFloat(fade);
                if (fade){                    
                    TweenLite.to($(this), settings.move.transitionTime*fade, {opacity:"0",ease:settings.move.easing});
                }                
            });


            strip_center.find(".leaving div[data-transition-top]").each(function(){
                var move=$(this).attr("data-transition-top");                
                if (move){                    
                    TweenLite.to($(this), settings.move.transitionTime/2, {top:"-="+move,ease:settings.easing,delay:settings.fade.waitOut});
                }                
            });
            strip_center.find(".leaving div[data-transition-bottom]").each(function(){
                var move=$(this).attr("data-transition-bottom");                
                if (move){                    
                    TweenLite.to($(this), settings.move.transitionTime/2, {bottom:"-="+move,ease:settings.easing,delay:settings.fade.waitOut});
                }                
            });



             //Now transition in the new screen
            if (settings.onStartScreening){
                settings.onStartScreening();
            }


            strip_center.find(".entering div[data-transition-move]").each(function(){
                var move=$(this).attr("data-transition-move");
                if (move){
                    //Get current position, then move the item away, and animate it back into its original position                    
                    $(this).css("left","+="+move);                    
                    TweenLite.to($(this), settings.move.transitionTime, {left:"-="+move,ease:settings.move.easing});
                }                
            });

            strip_center.find(".entering div[data-transition-fade]").each(function(){
                var fade=$(this).attr("data-transition-fade");
                var fadeFactor=parseFloat(fade);
                if (fade){                    
                    TweenLite.to($(this), settings.move.transitionTime*fade, {opacity:"1",ease:settings.move.easing});
                }                
            });

            strip_center.find(".entering div[data-transition-top]").each(function(){
                var move=$(this).attr("data-transition-top");                
                if (move){  
                    $(this).css("top","-="+move);                   
                    TweenLite.to($(this), settings.move.transitionTime/2, {top:"+="+move,ease:settings.easing,delay:settings.fade.waitIn});
                }                
            });
            strip_center.find(".entering div[data-transition-bottom]").each(function(){
                var move=$(this).attr("data-transition-bottom");                
                if (move){                    
                    $(this).css("bottom","-="+move);
                    TweenLite.to($(this), settings.move.transitionTime/2, {bottom:"+="+move,ease:settings.easing,delay:settings.fade.waitIn});
                }                
            });



            //These are the transitions for the small screens. Should move them to a function for clarity
            TweenLite.to(strip_left, settings.move.transitionTime, {left:"-=590px",ease:settings.move.easing});
            TweenLite.to(strip_right, settings.move.transitionTime, {left:"-=590px",ease:settings.move.easing,
                onComplete:function(){
                    strip_center.css("left","0px").find(".screen").first().remove();
                    strip_left.css("left","0px").find(".screen").first().remove();
                    strip_right.css("left","0px").find(".screen").first().remove();
                    tweening=false;
                    if (settings.onEndScreening){
                        settings.onEndScreening();
                    }

                }
            });
            
            strip_center.find(".leaving").removeClass("leaving");
            return false;
        };

        goPrev=function(){
            if (tweening) return;
            tweening=true;
            settings.center_idx-=1;
            if (settings.center_idx<0) settings.center_idx=settings.screens.length-1;
            strip_center.find(".entering").removeClass("entering").addClass("leaving");
            var newCenterScreen=$(getScreen(settings.center_idx)).clone(true);
            newCenterScreen.addClass("entering")
                .append($("<div>").addClass("border"));
            newCenterScreen.find(".content-screen-bg").css("opacity",0);
            newCenterScreen.find(".parallax_layer").addClass("layer");
            newCenterScreen.parallax(settings.parallax);

            strip_center.append(newCenterScreen);
            strip_left.prepend( newLeft=$(getScreen(settings.center_idx-1)).clone(true)).css("left","-590px")
            strip_right.prepend( newRight= $(getScreen(settings.center_idx+1)).clone(true)).css("left","-590px");

            scale(newLeft,0.71);
            scale(newRight,0.71);
            $(".top-glow").empty();
            var animations=strip_center.find(".entering.screen").attr("data-animations");
            if (animations){
                if (window.screen_setup[animations]){
                    window.screen_setup[animations](strip_center.find(".entering.screen").find(".content"));
                }
            }



            TweenLite.to(strip_center.find(".leaving .content-bg"), 0.8, {opacity:"0",ease:settings.fade.easing,delay:0.8});
            TweenLite.to(strip_center.find(".leaving .content-screen-bg"), settings.fade.transitionTimeOut, {opacity:"0",ease:settings.fade.easing,delay:settings.fade.waitOut});
            TweenLite.to(strip_center.find(".entering .content-screen-bg"), settings.fade.transitionTimeIn, {opacity:"1",ease:settings.fade.easing,delay:settings.fade.waitIn, onComplete:function(){
                    if (animations){
                        if (window.animations[animations]){
                            window.animations[animations](strip_center.find(".content"));
                        }
                    }

                }  
            });


            //First, transition out the current screen.
            strip_center.find(".leaving div[data-transition-move]").each(function(){
                var move=$(this).attr("data-transition-move");
                if (move){
                    TweenLite.to($(this), settings.move.transitionTime, {left:"+="+move,ease:settings.move.easing});
                }                
            });

            strip_center.find(".leaving div[data-transition-fade]").each(function(){
                var fade=$(this).attr("data-transition-fade");
                var fadeFactor=parseFloat(fade);
                if (fade){                    
                    TweenLite.to($(this), settings.move.transitionTime*fade, {opacity:"0",ease:settings.move.easing});
                }                
            });

            strip_center.find(".leaving div[data-transition-top]").each(function(){
                var move=$(this).attr("data-transition-top");                
                if (move){                    
                    TweenLite.to($(this), settings.move.transitionTime/2, {top:"-="+move,ease:settings.easing,delay:settings.fade.waitOut});
                }                
            });
            strip_center.find(".leaving div[data-transition-bottom]").each(function(){
                var move=$(this).attr("data-transition-bottom");                
                if (move){                    
                    TweenLite.to($(this), settings.move.transitionTime/2, {bottom:"-="+move,ease:settings.easing,delay:settings.fade.waitOut});
                }                
            });




             //Now transition in the new screen


            strip_center.find(".entering div[data-transition-move]").each(function(){
                var move=$(this).attr("data-transition-move");
                if (move){
                    //Get current position, then move the item away, and animate it back into its original position                    
                    $(this).css("left","-="+move);                    
                    TweenLite.to($(this), settings.move.transitionTime, {left:"+="+move,ease:settings.move.easing});
                }                
            });

            strip_center.find(".entering div[data-transition-fade]").each(function(){
                var fade=$(this).attr("data-transition-fade");
                var fadeFactor=parseFloat(fade);
                if (fade){                    
                    TweenLite.to($(this), settings.move.transitionTime*fade, {opacity:"1",ease:settings.move.easing});
                }                
            });

            strip_center.find(".entering div[data-transition-top]").each(function(){
                var move=$(this).attr("data-transition-top");                
                if (move){  
                    $(this).css("top","-="+move);                   
                    TweenLite.to($(this), settings.move.transitionTime/2, {top:"+="+move,ease:settings.easing,delay:settings.fade.waitIn});
                }                
            });
            strip_center.find(".entering div[data-transition-bottom]").each(function(){
                var move=$(this).attr("data-transition-bottom");                
                if (move){                    
                    $(this).css("bottom","-="+move);
                    TweenLite.to($(this), settings.move.transitionTime/2, {bottom:"+="+move,ease:settings.easing,delay:settings.fade.waitIn});
                }                
            });



            if (settings.onStartScreening){
                settings.onStartScreening();
            }
           
            //These are the transitions for the small screens. Should move them to a function for clarity
            TweenLite.to(strip_left, settings.move.transitionTime, {left:"+=590px",ease:settings.move.easing});
            TweenLite.to(strip_right, settings.move.transitionTime, {left:"+=590px",ease:settings.move.easing,
                onComplete:function(){
                    strip_center.find(".screen").first().remove();
                    strip_left.find(".screen").last().remove();
                    strip_right.find(".screen").last().remove();
                    tweening=false;
                    if (settings.onEndScreening){
                        settings.onEndScreening();
                    }

                }
            });
            


            strip_center.find(".leaving").removeClass("leaving");

            return false;
        };

        function scale(el,ratio){
            return;
            el.find(".content *").each(function(){
                if ($(this).hasClass("content-bg")) return;

                if ($(this.hasAttribute("left"))){
                    var left=$(this).css("left");
                    left=parseInt(left.replace("px",""));
                    $(this).css("left",left*ratio);
                }
                if ($(this.hasAttribute("right"))){
                    var right=$(this).css("right");
                    right=parseInt(right.replace("px",""));
                    $(this).css("right",right*ratio);
                }
                if ($(this.hasAttribute("top"))){
                    var top=$(this).css("top");
                    top=parseInt(top.replace("px",""));
                    $(this).css("top",top*ratio);
                }
                if ($(this.hasAttribute("bottom"))){
                    var bottom=$(this).css("bottom");
                    bottom=parseInt(bottom.replace("px",""));
                    $(this).css("bottom",bottom*ratio);
                }

                if ($(this.hasAttribute("font-size"))){
                    var font=$(this).css("font-size");
                    font=parseInt(font.replace("px",""));
                    $(this).css("font-size",Math.floor(font*ratio));
                }


                var width=$(this).width();
                $(this).css("width",width*ratio);
                var height=$(this).height();
                $(this).css("height",height*ratio);

            })
        }



        swipe=function(direction){
            if (direction=="left"){
                goNext();
            }
            if (direction=="right"){
                goPrev();
            }
        }
 

        getScreen=function(idx){
            if (idx>= settings.screens.length){
                return settings.screens[idx-settings.screens.length];
            }
            if (idx<0){
                return settings.screens[settings.screens.length+idx];   
            }
            return settings.screens[idx];   
        }

        this.css(settings.css);


        settings.screens=this.find(".screen");
        settings.center_idx=settings.screens.index(this.find(".screen.center"));
        
        var strip_center=$("<div>").addClass("strip_center").css({width:2445,height:585,position:"relative"});
        var strip_left=$("<div>").addClass("strip").css({width:1790,height:585,position:"relative"});
        var strip_right=$("<div>").addClass("strip").css({width:1790,height:585,position:"relative"});               
        
        var left_container=$("<div>").addClass("small_container left_container layer");        
        var center_container=$("<div>").addClass("center_container layer");        
        var center_inner=$("<div>").addClass("center_inner");        
        var rigth_container=$("<div>").addClass("small_container right_container layer");        

        center_container.append(center_inner);
        center_container.append($("<div>").addClass("top-glow"));
        center_container.append($("<div>").addClass("bottom-glow"));

        strip_center.append(startCenter=$(getScreen(settings.center_idx)).clone(true).addClass("entering"));
        strip_left.append(getScreen(settings.center_idx-1))
        strip_right.append(getScreen(settings.center_idx+1));

        this.append(left_container);        
        this.append(rigth_container);
        this.append(center_container)
        left_container.append(strip_left);
        center_inner.append(strip_center);
        //strip_center.addClass("noSwipe");
        //center_container.append(frame=$("<div>").addClass("frame"));
        rigth_container.append(strip_right)
        
        left_container.attr("data-depth","0.70");
        center_container.attr("data-depth","0.70");
        rigth_container.attr("data-depth","0.70");


        strip_center.css("left",0);

        var viewportWidth = $(window).width();
        var viewportHeight = $(window).height();
        
        center_container.swipe( {
            swipe:function(event, direction, distance, duration, fingerCount) {                        
                if (tweening) return;
                if (direction=="left") {
                    goNext();
                }
                if (direction=="right"){
                    goPrev();
                }
                
            },
            threshold:100,
            maxTimeThreshold:1000,
            fingers:'all',
            allowPageScroll:"none"
        }); 
        
        left_container.click(goPrev);
        rigth_container.click(goNext);

        startCenter.find(".parallax_layer").addClass("layer");
        startCenter.parallax(settings.parallax);

        window.animations["correspondence"](strip_center.find(".content"));
        window.screen_setup["correspondence"](strip_center.find(".content"));

        this.screens=settings.screens;
        this.next=goNext;
        this.prev=goPrev;
        this.swipe=swipe;
		this.setSettings=setSettings;
        return this;
 
    };
 
}( jQuery ));
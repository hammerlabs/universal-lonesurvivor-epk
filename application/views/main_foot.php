
            <div class="main_preloads hide">
            </div>



        <script src="assets/js/main.js"></script>
        <script src="assets/js/libs/requestAnimationFrame.js"></script>  
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
        
        <script src="assets/js/libs/jquery.touchSwipe.js" type="text/javascript"></script>  
        <script src="assets/js/libs/jquery.parallax.js" type="text/javascript"></script>  

		<?php
		minjs( array(
			"js/libs/binaryajax.js",
			"js/libs/exif.js",
			"js/libs/jcanvas.min.js",
			"js/libs/load-image.min.js",
			"js/oauth.js",
			"js/upload.js"
		) );
		?>

        <script type="text/javascript">
            if (window.ga_account!=""){        
                var _gaq = _gaq || [];
                _gaq.push(['_setAccount', window.ga_account]);
                _gaq.push(['_trackPageview']);

                (function() {
                    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
                })();
            }
        </script>

    </body>
</html>

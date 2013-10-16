
            <div class="main_preloads hide">
            </div>


		<?php
            $CI =& get_instance(); 
    		minjs( $CI->_js_includes_array("footer"));
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

            <div class="ui-fixed hide">
                <div class="content">
                    <div class="right">
                        <div id="logo">
                            <h1 id="site-title" class="ir">Lone Survivor</h1>
                            <img onload="$(this).data('loaded', 'loaded');" onerror="$(this).data('loaded', 'loaded');" class="release-date" data-source="assets/img/nav/release-date.png" />
                        </div>
                        <!--
                        <div id="showtimes-wrapper">
                            <div id="showtimes">
                                <span class="tickets-text">TICKETS &amp; SHOWTIMES:</span>
                                <input type="text" id="zip" placeholder="Enter ZIP" pattern="\d*" />
                                <a href="http://www.fandango.com/lonesurvivor_165416/movietimes" target="_blank" class="fandango">FANDANGO</a>
                                <a href="http://www.movietickets.com/movie?mid=161135" target="_blank" class="movietickets">MOVIETICKETS</a>
                            </div>
                        </div>
                        -->
                        <div id="nav-wrapper">
                            <div id="nav">
                                <a id="nav_story" href="story">STORY</a>
                                <a id="nav_videos">VIDEOS</a>
                                <a id="nav_gallery">GALLERY</a>
                                <a id="nav_prodnotes">PRODUCTION NOTES</a>
                                <a id="nav_support" href="charity">SUPPORT OUR HEROES</a>
                            </div>
                        </div>
                        <a id="flag_link" target="_blank" href="http://www.honorflight.org/programs/flags.cfm"> FLAG OF<br />SERVICE</a>
                    </div>
                    <div class="left">
                        <div class="indicator">
                            <div class="slider">
                                <div class="white_box"></div>
                                <div class="boxes">
                                    <table>
                                        <tr class="indicator_box" data-index="0"><td>&nbsp;</td></tr>
                                        <tr class="indicator_box" data-index="1"><td>&nbsp;</td></tr>
                                        <tr class="indicator_box" data-index="2"><td>&nbsp;</td></tr>
                                        <tr class="indicator_box" data-index="3"><td>&nbsp;</td></tr>
                                        <tr class="indicator_box" data-index="4"><td>&nbsp;</td></tr>
                                        <tr class="indicator_box" data-index="5"><td>&nbsp;</td></tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="social-wrapper">
                            <div class="social_feeds">
                                <span class="socialbutton facebook">FACEBOOK<span></span></span>
                                <span class="socialbutton twitter">TWITTER<span></span></span>
                                <span class="socialbutton instagram">INSTAGRAM<span></span></span>
                                <div class="socialcontent scroll-pane">
                                    <div class="socialcontent-wrapper facebook"></div>
                                    <div class="socialcontent-wrapper twitter"></div>
                                    <div class="socialcontent-wrapper instagram"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gallery hide">
                <?php echo $gallery_photos; ?>
                <img class="arrow left" onload="$(this).data('loaded', 'loaded');" onerror="$(this).data('loaded', 'loaded');" class="quote-top-img" data-source="assets/img/gallery/arrow_left.png">
                <img class="arrow right" onload="$(this).data('loaded', 'loaded');" onerror="$(this).data('loaded', 'loaded');" class="quote-top-img" data-source="assets/img/gallery/arrow_right.png">
                <img class="close" onload="$(this).data('loaded', 'loaded');" onerror="$(this).data('loaded', 'loaded');" class="quote-top-img" data-source="assets/img/gallery/close.png">
                <div class="thumbs">
                    <div class="thumbarrow_box left"><img class="thumbarrow"  onload="$(this).data('loaded', 'loaded');" onerror="$(this).data('loaded', 'loaded');" class="quote-top-img" data-source="assets/img/gallery/arrow_left.png"></div>
                    <div class="thumbarrow_box right"><img class="thumbarrow"  onload="$(this).data('loaded', 'loaded');" onerror="$(this).data('loaded', 'loaded');" class="quote-top-img" data-source="assets/img/gallery/arrow_right.png"></div>
                    <div class="thumb-pages"></div>
                </div>
            </div>
            <div class="video_playlist hide">
                <iframe src="" frameborder="0" allowfullscreen></iframe>
                <img class="close" onload="$(this).data('loaded', 'loaded');" onerror="$(this).data('loaded', 'loaded');" class="quote-top-img" data-source="assets/img/gallery/close.png">
            </div>
            <div class="wrapper head hide">
                <div class="content">
                    <div class="left">
                        <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="457" data-height="31" data-colorscheme="dark" data-layout="standard" data-action="like" data-show-faces="false" data-send="true"></div>
                    </div>
                    <div class="right">
                        <span id="hashtag">#LONESURVIVOR</span>
                        <a href="https://www.facebook.com/lonesurvivorfilm" target="_blank" id="facebook-btn" class="share-btn"></a>
                        <a href="https://twitter.com/LoneSurvivorUSA" id="twitter-btn" target="_blank" class="share-btn"></a>
                        <a href="https://plus.google.com/+LoneSurvivorFilm/posts" id="google-btn" target="_blank" class="share-btn"></a>
                        <a href="http://lonesurvivorfilm.tumblr.com/" id="tumblr-btn" target="_blank" class="share-btn"></a>
                        <a href="http://instagram.com/LoneSurvivorFilm" id="instagram-btn" target="_blank" class="share-btn"></a>
                        <a href="http://www.youtube.com/LoneSurvivorFilm" id="youtube-btn" target="_blank" class="share-btn share-btn-last"></a>
                        <a class="audio-control"></a>
                    </div>
                </div>
            </div>
            <div class="wrapper foot hide">
                <div class="content">
                    <div class="left">
                        <img onload="$(this).data('loaded', 'loaded');" onerror="$(this).data('loaded', 'loaded');" data-source="assets/img/nav/universal-logo.png" />
                        <img onload="$(this).data('loaded', 'loaded');" onerror="$(this).data('loaded', 'loaded');" class="eff_logo" data-source="assets/img/nav/eff-logo.png" />
                        <div>
                            <a href="http://www.universalpictures.com/legal/privacy.html" target="_blank">PRIVACY POLICY</a> | 
                            <a href="http://www.universalpictures.com/legal/index.html" target="_blank">TERMS OF USE</a> | 
                            <a href="http://www.universalstudios.com/contact_form.php" target="_blank">CONTACT US</a><br/>
                            &copy; 2013 UNIVERSAL PICTURES, A DIVISION OF NBC UNIVERSAL. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                    <div class="right">
                        <img onload="$(this).data('loaded', 'loaded');" onerror="$(this).data('loaded', 'loaded');" class="rating" data-source="assets/img/nav/rating.png" />
                        <div>
                            <a href="http://filmratings.com/" target="_blank">FILMRATINGS.COM</a> | 
                            <a href="http://mpaa.org/" target="_blank">MPAA.ORG</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portrait_detected hide">
            </div>
            <div id="status"></div>

            <div class="main_preloads hide">
            <?php echo $gallery_thumbs; ?>
            </div>


		<?php
            $CI =& get_instance(); 
    		$CI->_js_includes("footer");
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

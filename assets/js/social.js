function Social() {   
	this.get_data();
}  

Social.prototype.get_data = function () {   
	 
	
	this.data = [];  
	
	this.facebook_feed  = [
	{ "profile_image_url":"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-prn2/q71/s720x720/970156_685104214850014_313131357_n.jpg" , 
	  "description":'How did the cast prepare for Lone Survivor? Peter Berg sits down with HuffPost Live. SHARE their story: <a href="http://ow.ly/nywER" target="_blank">http://ow.ly/nywER</a>',
	  "screen_name":"Lone Survivor",
	  "url":"https://www.facebook.com/photo.php?fbid=685104214850014&set=a.685153138178455.1073741828.673743292652773&type=1&theater"
	},
	{ "profile_image_url":"https://sphotos-a.xx.fbcdn.net/hphotos-frc1/q82/999155_10152081919803508_1564007156_n.jpg" , 
	  "description":'Mark Wahlberg stars in "Lone Survivor" an incredible Navy SEAL true story; WATCH the Moviefone exclusive premiere of the trailer now: <a href="http://aol.it/18SkiCN" target="_blank">http://aol.it/18SkiCN</a>',
	  "screen_name":"Lone Survivor",
	  "url":"http://facebook.com/LoneSurvivorFilm" 
	},
	];
	
    this.data.push({
		id:"facebook",   
		feed:this.facebook_feed,
		}); 
	
	
	this.twitter_feed  = [
	{ "profile_image_url":"https://si0.twimg.com/profile_images/3221799176/bbdd90f6d08aea6744f6954ee2a738c5_normal.png" , 
	  "description":'The director of <a href="http://twitter.com/LoneSurvivorUSA" target="_blank">@<b>LoneSurvivorUSA</b></a> talks to <a href="/HuffPostLive" class="twitter-atreply pretty-link" dir="ltr" >@<b>HuffPostLive</b></a> about the difficult journey it took to the screen: <a href="http://t.co/FuAxKgLvJG" rel="nofollow" dir="ltr" data-expanded-url="http://aol.it/14m9kDQ" class="twitter-timeline-link" target="_blank" title="http://aol.it/14m9kDQ" ><span class="tco-ellipsis"></span><span class="invisible">http://</span><span class="js-display-url">aol.it/14m9kDQ</span><span class="invisible"></span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span></span></a>',
	  "screen_name":"moviefone",
	  "url":"https://twitter.com/moviefone/status/363143631320145920" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/933613298/entertainment_normal.png" , 
	  "description":'Why director Peter Berg made &quot;Lone Survivor&quot; <a href="http://t.co/EXYAfFKbRG" rel="nofollow" dir="ltr" data-expanded-url="http://huff.to/1ceRk0k" class="twitter-timeline-link" target="_blank" title="http://huff.to/1ceRk0k" ><span class="tco-ellipsis"></span><span class="invisible">http://</span><span class="js-display-url">huff.to/1ceRk0k</span><span class="invisible"></span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span></span></a>',
	  "screen_name":"HuffPostEnt",
	  "url":"https://twitter.com/HuffPostEnt/status/363070403545419776" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/3390220032/08b1250baa0aec29528a3c29647aa06f_normal.jpeg" , 
	  "description":'The lone survivor trailer looks good. Tells a story that needs to be told <a href="http://twitter.com/search?q=%23lonesurvivor&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>lonesurvivor</b></a>',
	  "screen_name":"bsp017",
	  "url":"https://twitter.com/bsp017/status/362721120304119811" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000166411173/8e5d93737155715386df0f4166716112_normal.jpeg" , 
	  "description":'what do you think of the trailer for my new film? <a href="http://twitter.com/search?q=%23LoneSurvivor&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>LoneSurvivor</b></a> <a href="http://twitter.com/search?q=%23veryexcited&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>veryexcited</b></a> about this film truly moving story',
	  "screen_name":"alexanderludwig",
	  "url":"https://twitter.com/alexanderludwig/status/362693154710880256" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000221345275/1a7a64e9c3935b1e845ff22d887cd663_normal.jpeg" , 
	  "description":'Based on true acts of courage. Watch &amp; RT the <a href="http://twitter.com/search?q=%23LoneSurvivor&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>LoneSurvivor</b></a> trailer starring <a href="http://twitter.com/mark_wahlberg" class="twitter-atreply pretty-link" dir="ltr" >@<b>mark_wahlberg</b></a>! <a href="http://t.co/B3myYdEqVR" rel="nofollow" dir="ltr" data-expanded-url="http://bit.ly/LoneSurvivorTrailer" class="twitter-timeline-link" target="_blank" title="http://bit.ly/LoneSurvivorTrailer" ><span class="tco-ellipsis"></span><span class="invisible">http://</span><span class="js-display-url">bit.ly/LoneSurvivorTr</span><span class="invisible">ailer</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span>…</span></a>',
	  "screen_name":"LoneSurvivorUSA",
	  "url":"https://twitter.com/LoneSurvivorUSA/status/363023227297083392" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/902499829/DSC06305-1-3_normal.jpg" , 
	  "description":'Exclusive trailer for <a href="http://twitter.com/search?q=%23LoneSurvivor&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>LoneSurvivor</b></a> &amp; Operation Redwing. One of the most amazing books I&#39;ve ever read. <a href="http://twitter.com/us_navyseals" target="_blank" class="twitter-atreply pretty-link" dir="ltr" >@<b>us_navyseals</b></a>  ',
	  "screen_name":"_StarrHall_",
	  "url":"https://twitter.com/_StarrHall_/status/362798592441860097" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/1497554336/36824_1355011515887_1249436292_30818325_7685629_n_normal.jpg" , 
	  "description":'The book was amazing, heartbreaking, &amp; inspirational.  Teared up just watching the trailer. <a href="http://twitter.com/search?q=%23LoneSurvivor&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>LoneSurvivor</b></a> <a href="http://t.co/yzu5LuYkec" rel="nofollow" dir="ltr" data-expanded-url="http://m.huffpost.com/us/entry/3682843/" class="twitter-timeline-link" target="_blank" title="http://m.huffpost.com/us/entry/3682843/" ><span class="tco-ellipsis"></span><span class="invisible">http://</span><span class="js-display-url">m.huffpost.com/us/entry/36828</span><span class="invisible">43/</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span>…</span></a>',
	  "screen_name":"ginmarie0313",
	  "url":"https://twitter.com/ginmarie0313/status/362710740748075008" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/3199581794/7e6a4bfe3d12c5e9f6ac8ad20a49b763_normal.jpeg" , 
	  "description":'Cannot wait to see Lone Survivor. Looks Unreal',
	  "screen_name":"Nowicks7",
	  "url":"https://twitter.com/Nowicks7/status/367058143777263616" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/1113429391/45705_484745963915_679103915_6847533_4084698_n_normal.jpg" , 
	  "description":'<a href="http://twitter.com/JonahFoundGold" target="_blank">@<b>JonahFoundGold</b></a> check my Facebook for this new Wahlberg movie Lone Survivor, that&#39;s gonna be awesome',
	  "screen_name":"MaxBard",
	  "url":"https://twitter.com/MaxBard/status/367052402030940160" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000283732730/3d13072ea84610f6a44e4dafdc6c1889_normal.jpeg" , 
	  "description":'<a href="http://t.co/pK7B6ei79f" rel="nofollow" dir="ltr" data-expanded-url="http://youtu.be/5Q-uKId2W0M" class="twitter-timeline-link" target="_blank" title="http://youtu.be/5Q-uKId2W0M" ><span class="tco-ellipsis"></span><span class="invisible">http://</span><span class="js-display-url">youtu.be/5Q-uKId2W0M</span><span class="invisible"></span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span></span></a> via <a href="http://twitter.com/youtube" target="_blank">@<b>youtube</b></a>&#10;The new Mark Wahlberg movie &quot;Lone Survivor&quot; based on the true story of the lost hero&#39;s of Seal Team 10',
	  "screen_name":"IanTorrForShore",
	  "url":"https://twitter.com/IanTorrForShore/status/367055583783825408" 
	},
	
	{ "profile_image_url":"https://si0.twimg.com/profile_images/3487330791/faedf8e0c01f817c6b5192e080653814_normal.jpeg" , 
	  "description":'Can&#39;t wait too see Lone Survivor!',
	  "screen_name":"SLICK_LIVNG",
	  "url":"https://twitter.com/SLICK_LIVNG/status/367049740221165568" 
	},
	
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000265589083/a1d41de70c090d746a97491e0711deb3_normal.jpeg" , 
	  "description":'Lone Survivor loooooks so gooood <a href="http://twitter.com/search?q=%23CantWait&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>CantWait</b></a>',
	  "screen_name":"TomMacca93",
	  "url":"https://twitter.com/TomMacca93/status/367035386616217600" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/3454237062/93b4145680fbc373ccbeded1fc9bb329_normal.jpeg" , 
	  "description":'Mark Wahlberg&#39;s new movie Lone Survivor looks too good <a href="http://twitter.com/Smoochy_Wallace" target="_blank">@<b>Smoochy_Wallace</b></a>',
	  "screen_name":"AC_Claypool24",
	  "url":"https://twitter.com/AC_Claypool24/status/367030383705329664" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000229753515/3774bd85e4c5fbc580c58d77dad173f6_normal.jpeg" , 
	  "description":'<a href="http://twitter.com/mark_wahlberg" target="_blank">@<b>mark_wahlberg</b></a> just seen the trailer for <a href="http://twitter.com/search?q=%23lonesurvivor&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>lonesurvivor</b></a> looking forward to it. Looks great',
	  "screen_name":"pbradyp",
	  "url":"https://twitter.com/pbradyp/status/367018275089027072" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000272201522/23c986226b3fee8a0eb1f285b8410417_normal.jpeg" , 
	  "description":'LONE SURVIVOR LOOKS GR8',
	  "screen_name":"MightyTyler",
	  "url":"https://twitter.com/MightyTyler/status/367007920883380225" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000194801892/c124465eee1b94539abb96d75434d87c_normal.jpeg" , 
	  "description":'The movie lone survivor &gt;&gt;&gt; shit will be seen man .. WILL',
	  "screen_name":"sniperkc",
	  "url":"https://twitter.com/sniperkc/status/367007445840703489" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000177040157/fafbe2d54eda15cde335412e00868664_normal.jpeg" , 
	  "description":'Lone Survivor looks incredible. I can already see Mark Wahlberg holding up an Oscar for it.',
	  "screen_name":"Chris_Mikulas",
	  "url":"https://twitter.com/Chris_Mikulas/status/366960952056360963" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000112464262/dc11db5396698b9356d5ab947378ed17_normal.jpeg" , 
	  "description":'Just watched the trailer for <a href="http://twitter.com/search?q=%23LoneSurvivor&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>LoneSurvivor</b></a> &amp; it looks awesome! Read the book can&#39;t wait to see the movie 🇺🇸',
	  "screen_name":"MShawnalmond",
	  "url":"https://twitter.com/MShawnalmond/status/366936004805922816" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000102001759/1f0aa937d205f027e80361b8463be8a9_normal.jpeg" , 
	  "description":'Lone Survivor looks like an awesome movie <a href="http://twitter.com/search?q=%23CantWait&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>CantWait</b></a>',
	  "screen_name":"PlanetMaherz",
	  "url":"https://twitter.com/PlanetMaherz/status/366922014998528000" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/3781801573/338f328e9b85c0a007a644f6acd330b0_normal.jpeg" , 
	  "description":'Lone Survivor is about to be a great movie! <a href="http://twitter.com/mark_wahlberg" target="_blank">@<b>mark_wahlberg</b></a>',
	  "screen_name":"Dom_Rosati",
	  "url":"https://twitter.com/Dom_Rosati/status/366901285179506688" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000267865514/83b6d001fb3b860817c59e179537a5f1_normal.jpeg" , 
	  "description":'Lone Survivor with mark wahlberg boutta make me cry already know it',
	  "screen_name":"whiteloser",
	  "url":"https://twitter.com/whiteloser/status/366877562661642242" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/3616150785/32c44ec1cd3b7035ed43f9275546984d_normal.jpeg" , 
	  "description":'Lone Survivor (2013) <a href="http://t.co/zcEXskhrTt" rel="nofollow" dir="ltr" data-expanded-url="http://www.imdb.com/title/tt1091191/" class="twitter-timeline-link" target="_blank" title="http://www.imdb.com/title/tt1091191/" ><span class="tco-ellipsis"></span><span class="invisible">http://www.</span><span class="js-display-url">imdb.com/title/tt109119</span><span class="invisible">1/</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span></span></a> <a href="http://twitter.com/search?q=%23IMDb&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>IMDb</b></a> looks like another great Mark Wahlberg film',
	  "screen_name":"nmorris76",
	  "url":"https://twitter.com/nmorris76/status/366830877054996481" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000278174728/483bd90ffd798e8be6784feb958381b6_normal.jpeg" , 
	  "description":'Lone survivor is so good',
	  "screen_name":"kyle_sattler",
	  "url":"https://twitter.com/kyle_sattler/status/366795175718166528" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000223443708/b7b3b1f58cab3c982ab0af84c020f19d_normal.jpeg" , 
	  "description":'151 days until the lone survivor movie comes out <a href="http://twitter.com/MarcusLuttrell" target="_blank">@<b>MarcusLuttrell</b></a>',
	  "screen_name":"Whitesell003",
	  "url":"https://twitter.com/Whitesell003/status/366771829970440192" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/3039957017/45b3b8e4f0eca09b1e33a2a2d19d1ec4_normal.jpeg" , 
	  "description":'Lone Survivor movie coming.  It&#39;s gonna be epic.  True Heroes.',
	  "screen_name":"CopDog1",
	  "url":"https://twitter.com/CopDog1/status/366771828439527425" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000277653591/a2317679a25b2947f817e0683641121a_normal.jpeg" , 
	  "description":'I cannot wait to see &quot;Lone Survivor&quot;. Watching the trailer makes me pumped!',
	  "screen_name":"Lo_Jo1",
	  "url":"https://twitter.com/Lo_Jo1/status/366760445970886656" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000278174728/483bd90ffd798e8be6784feb958381b6_normal.jpeg" , 
	  "description":'Lone survivor is going to be the sickest movie!!!!!',
	  "screen_name":"kyle_sattler",
	  "url":"https://twitter.com/kyle_sattler/status/366738429939163137" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/3254988721/2c849c808670ab2f148e126487af7b26_normal.jpeg" , 
	  "description":'I have to say I am so ready to watch The Lone Survivor!',
	  "screen_name":"HaydenRogers1",
	  "url":"https://twitter.com/HaydenRogers1/status/366727369026846720" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000283018073/6bb8e56d62b6bf7c25fc63162932dd81_normal.jpeg" , 
	  "description":'Omg I wanna see Lone Survivor !',
	  "screen_name":"ninaa4xo",
	  "url":"https://twitter.com/ninaa4xo/status/366724061188988929" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000135382330/8c805caaf355c02c95321ed668f61a65_normal.jpeg" , 
	  "description":'Lone survivor looks like such a good movie!',
	  "screen_name":"aschydzik",
	  "url":"https://twitter.com/aschydzik/status/366712996308860931" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000145444854/38674e1d61ee9f14b7d28289f33ded8b_normal.jpeg" , 
	  "description":'Lone Survivor looks like a good ass movie',
	  "screen_name":"sexyginger17",
	  "url":"https://twitter.com/sexyginger17/status/366711837250682880" 
	},
	{ "profile_image_url":"https://si0.twimg.com/profile_images/378800000275415970/51dd75377eaf33aeb8294bb5a5a0ef6d_normal.jpeg" , 
	  "description":'<a href="http://twitter.com/search?q=%23LoneSurvivor&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>LoneSurvivor</b></a> looks absolutely amazing!!! <a href="http://twitter.com/search?q=%23cantwait&amp;src=hash" data-query-source="hashtag_click" target="_blank" class="twitter-hashtag pretty-link js-nav" dir="ltr" >#<b>cantwait</b></a> <a href="http://t.co/61zLbnIGty" rel="nofollow" dir="ltr" data-expanded-url="http://trailers.apple.com/trailers/universal/lonesurvivor/" class="twitter-timeline-link" target="_blank" title="http://t.co/61zLbnIGty" ><span class="tco-ellipsis"></span><span class="invisible">http://</span><span class="js-display-url">http://t.co/61zLbnIGty</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span></span></a>',
	  "screen_name":"sacsy918",
	  "url":"https://twitter.com/sacsy918/status/366707217249996802" 
	},
	];
	
    this.data.push({
		id:"twitter",   
		feed:this.twitter_feed,
		}); 
		
		
	this.instagram  = [
	{ "profile_image_url":"http://distilleryimage0.ak.instagram.com/203fbe26fa2311e2b7ba22000aaa2161_7.jpg" , 
	  "description":'Based on true acts of #courage. Go to <a href="http://instagram.com/moviefone" target="_blank">@moviefone</a> for the exclusive #trailer of #LoneSurvivor. #movie <a href="http://instagram.com/pberg44" target="_blank">@pberg44</a> #markwahlberg',
	  "screen_name":"lonesurvivorfilm",
	  "url":"http://instagram.com/p/cccWx9uPX8" 
	},
	];
	
    this.data.push({
		id:"instagram",   
		feed:this.instagram,
		});  
	
}

Social.prototype.build = function () {   
	console.log("Social build")
	for (var i=0;i<this.data.length;i++)
	{       
		console.log("Social build for " + this.data[i].id)

		$(".socialcontent-wrapper."+this.data[i].id).append('<div id="'+this.data[i].id+'_social_holder"></div>');    
		$("#"+this.data[i].id+"_social_holder").css({    
			"float":"left",
			"width":"330px",
			"overflow":"hidden"
			});
		
		for (var j=0;j<this.data[i].feed.length;j++)         	
		{       
		    $("#"+this.data[i].id+"_social_holder").append('<div id="'+this.data[i].id+'_feed_'+j+'"></div>');    
			$("#"+this.data[i].id+"_feed_"+j).css({    
				"border-bottom":"1px solid #333",
				"padding":"0px 10px 10px 10px",
				"min-height":"70px",   
				"margin":"0px 0px 10px 10px"
				});  
			$("#"+this.data[i].id+"_feed_"+j).append('<div class="feed_img"><a href="'+this.data[i].feed[j].url+'" target="_blank"><img src="'+this.data[i].feed[j].profile_image_url+'" /></a></div>');   
			$("#"+this.data[i].id+"_feed_"+j).append('<div id="'+this.data[i].id+'_feed_desc_'+j+'"></div>');   
            $("#"+this.data[i].id+"_feed_desc_"+j).css({    
				"min-height":"60px"
				});     
				                                                                          
			var at_sign = "";
			if(this.data[i].id != "facebook") at_sign = "@";
			$("#"+this.data[i].id+"_feed_desc_"+j).append('<div class="feed_screen_name"><a href="'+this.data[i].feed[j].url+'" target="_blank">'+at_sign+this.data[i].feed[j].screen_name+'</a></div><br/><div class="feed_desc">'+this.data[i].feed[j].description+'');   
			
			$(".feed_img").css({ 
				"float":"left",  
				"height":"100%",  
				"min-height":"80px",
				"margin":"0px 10px 10px 0px"  
				}); 
			$(".feed_img img").css({ 
				"width":"100%",
				"height":"auto" 
				}); 
			$(".feed_screen_name").css({ 
				"font-size":"14px",
				"margin":"5px 10px 0px 0px"  
				});   
			$(".feed_desc").css({ 
				"color":"#FFF",
				"font-size":"12px"  
				});  
		}  
		console.log("this.data[screen_name] = "+this.data[i].feed[0]["screen_name"])
	}
}

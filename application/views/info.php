<!DOCTYPE html>

<html xmlns:fb="http://ogp.me/ns/fb#">   
<head>  
	<?php        
	$ua=getBrowser();
	$urlinfo=getUrl();
	$releaseDateInfo=getReleaseDateInfo($urlinfo);
	
	$title = "The Capitol - The Official Government of Panem"; 
	$desc = "The Official Government of Panem"; 
	$url = "http://www.thecapitol.pn/"; 
	$image = "http://www.thecapitol.pn/cptl_thmb.jpg"; 
	$facebook_url = "https://www.facebook.com/thecapitol";    
	$keywords = "whatsmydistrict, what's my district, district, my district, hungergames, hunger, games, Hunger Games, Panem, Capitol, CapitolPN, identifyyourself, identify, yourself, identify yourself, thecapitol, register, card, teaser, thecapitolpn, pn, DIP, pass, card, TheCapitol, tessera, tesserae, gross district product, gdp, President Snow, presidentsnow, snow, president, 74th";    
	$og_title = "The Capitol";
	?>
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title><?php echo $title; ?></title>      
	<link rel="canonical" href="<?php echo $url; ?>" />
	<meta name="description" content="<?php echo $desc; ?>">
	<meta name="keywords" content="<?php echo $keywords; ?>"> 
	<meta name="viewport" content="<?php echo $ua['view_port']; ?>">      
	
	<meta property="og:title" content="<?php echo $og_title; ?>" />  
	<meta property="og:description" content="<?php echo $desc; ?>" />
	<meta property="og:url" content="<?php echo $url; ?>" />
	<meta property="og:image" name="thumb" content="<?php echo $image; ?>" />  
	<meta property="og:type" content="movie" />
	<meta property="og:site_name" content="<?php echo $title; ?>" />  
	
	<?php minjs(array("js/demo.js", "js/example.js")) ?>
	<?php mincss(array("css/welcome.css")) ?>

	<script type="text/javascript">
		var cdn = "<?php echo $urlinfo['cdn']; ?>"; 
		var debugging = Boolean("<?php echo $urlinfo['debugging']; ?>");  
		var days_to_release = "<?php echo $releaseDateInfo['days_to_release']; ?>";   
		var release_date = "<?php echo $releaseDateInfo['release_date_string']; ?>"
		var user_browser = "<?php echo $ua['browser_name']; ?>";     
		var device_type = "<?php echo $ua['device_type']; ?>"; 
		var site_url = "<?php echo $url; ?>";    
		
		var browser_type = "<?php echo $ua['browser_type']; ?>"; 
		var modern_browser = "<?php echo $ua['modern_browser']; ?>";
		var countrycode = "<?php echo $urlinfo['countrycode']; ?>"; 
		
		var isInternational = Boolean("<?php echo $urlinfo['isInternational'] ?>");   
	
		var feedUrl = "http://www.sonypictures.net/movies/onedirection/channel_net.xml";     
		absolutePathForResources = true;
	</script>  
</head>
<body>  
	
	<div id="container">
		<h1>welcome to capitol.pn!</h1>
		<div id="body">
			<p><?php echo "Your browser: " . $ua['name'] . " " . $ua['version'] . " on " .$ua['platform'] . " reports: <br >" . $ua['userAgent'] . $ua['view_port'];?></p>
			<p><?php echo "Your url: " . $urlinfo['current_url'];?></p>
		</div>
		<p class="footer">
			Page rendered in <strong>{elapsed_time}</strong> seconds
		</p>
	</div>

	<script type="text/javascript">
		/*
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-31651-230']);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
		*/
	</script>
</body>


</html>
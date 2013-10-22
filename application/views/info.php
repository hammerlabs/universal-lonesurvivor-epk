<!DOCTYPE html>

<html xmlns:fb="http://ogp.me/ns/fb#">   
<head>  
	<?php        
	$ua=getBrowser();
	$urlinfo=getUrl();
	?>
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Test Information</title>      

	<script type="text/javascript">
	</script>  
</head>
<body>  
	
	<div id="container">
		<div id="body">
			<p><?php echo "Your browser: " . $ua['name'] . " " . $ua['version'] . " on " .$ua['platform'] . " reports: <br >" . $ua['userAgent'] . $ua['view_port'];?></p>
			<p><?php echo "Your url: " . $urlinfo['current_url'];?></p>
		</div>
		<div id="phpinfo">
			<?php print phpinfo(); ?>
		</div>
		<p class="footer">
			Page rendered in <strong>{elapsed_time}</strong> seconds
		</p>

	</div>

	<script type="text/javascript">
	</script>

</body>


</html>
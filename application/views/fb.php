<!doctype html>
<html xmlns:fb="http://www.facebook.com/2008/fbml">
	<head>
		<title>Facebook</title>
	</head>
	<body>
		<?php if ($user) { ?>
			<script src="/assets/js/libs/jquery-1.10.1.min.js"></script>
			<script>
				$( function() {
					var data = {
						provider: "<?php echo $provider ?>",
						user_id: "<?php echo $user_id ?>",
						user_name: "<?php echo $user_name ?>"
					};
					if ( window.opener && !window.opener.closed ) {
						window.opener.capitol_oauth.okCallback( data );
						window.close();
					}
				} )
			</script>
		<?php } else { ?>
			<script>
				window.location = "<?php echo $login_url; ?>";
			</script>
		<?php } ?>
	</body>
</html>

<!DOCTYPE html>
<html>
	<head>
		<title>Authorization</title>
	</head>
	<body>
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
	</body>
</html>
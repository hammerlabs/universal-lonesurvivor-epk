<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>
	<!--<script type="text/javascript" src="/minify/compile/js/demo.js,example.js"></script>-->
	<?php minjs(array("js/demo.js", "js/example.js")) ?>
	<?php mincss(array("css/welcome.css")) ?>
</head>
<body>

<div id="container">
	<h1><?php p("welcome_to_ci") ?>!</h1>
	<div id="body">
		<p><?php p("the_page_youre_looking_at") ?>.</p>
		<p><?php p("complex_text") ?></p>
	</div>
	<p class="footer">
		<a href="/en/welcome">EN</a> |
		<a href="/es/welcome">ES</a> |
		Page rendered in <strong>{elapsed_time}</strong> seconds
	</p>
</div>

</body>
</html>
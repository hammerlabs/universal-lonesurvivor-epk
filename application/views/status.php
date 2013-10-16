<html>
	<head>
		<title>Compatibility Status</title>
		<link rel="stylesheet" type="text/css" href="/assets/css/status.css" media="screen">
	</head>
	<body>
		<h1>Compatibility Status</h1>

		<h3>Server Features</h3>
		<ul>
		<?php foreach ($features as $feature):?>

		<li class="<?php echo $feature["class"];?>"><?php echo $feature["title"];?></li>

		<?php endforeach;?>
		</ul>


		<h3>Server Folders</h3>
		<ul>
		<?php foreach ($folders as $folder):?>

		<li class="<?php echo $folder["class"];?>"><?php echo $folder["folder"];?></li>

		<?php endforeach;?>
		</ul>


	</body>
</html>

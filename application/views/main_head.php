<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		

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

        <script type="text/javascript">
            window.ga_account = "<?php echo $ga_account; ?>"; 
        </script>  


        <?php
            $CI =& get_instance();
            $CI->_css_includes("head"); 
            $CI->_js_includes("head"); 
        ?>

		
    </head>
    <body class="guest">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->


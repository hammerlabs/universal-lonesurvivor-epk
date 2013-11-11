<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">
            window.device_type = "<?php echo $device_type ?>";
            if(window.device_type == "mobile") {
                self.location="<?php echo $mobile_redirect_url ?>"; 
            }
       
            if( /iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                window.location.href = "<?php echo $mobile_redirect_url ?>";  
            }
        </script>  
    </head>
    <body>
    </body>
</html>
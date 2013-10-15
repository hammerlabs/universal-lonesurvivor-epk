$( function() {

	window.capitol_upload = {

		init: function() {
			var me = this;
			$( "#file-input" ).change( function( e ) {
				me.getOrientation( e, function( o ) {
					me.imgLoad( e, o, function( img ) {
						me.imgDraw( img );
					} );
					$( this ).val( '' ); // just in case the user uploads the same file twice
				} );

			} );
		},

		getOrientation: function( e, cbk ) {
			var me = this;
			var reader = new FileReader();
			reader.onload = function( event ) {
				var base64 = event.target.result.replace( /^.*?,/, '' );
				var binary = atob( base64 );
				var exif = EXIF.readFromBinaryFile( new BinaryFile( binary ) );
				cbk( exif.Orientation )
			}
			var reader_file = e.target.files[ 0 ];
			reader.readAsDataURL( reader_file );
		},

		imgLoad: function( e, orientation, cbk ) {
			var me = this;
			var W = $( "#upload-canvas" ).width();
			var H = $( "#upload-canvas" ).height();
			loadImage(
				e.target.files[ 0 ],
				function ( img ) {
					cbk( img );
				}, {
					maxWidth: W,
					maxHeight: H,
					canvas: true,
					orientation: orientation
				}
			);
		},

		imgDraw: function( img, cbk ) {
			var me = this;
			var W = $( "#upload-canvas" ).width();
			var H = $( "#upload-canvas" ).height();
			var canvas = document.getElementById( 'upload-canvas' );
			var ctx = canvas.getContext( '2d' );
			ctx.fillStyle = "#000";
			ctx.fillRect( 0, 0, W, H );
			var width = img.width;
			var height = img.height;
			var scalew = W / width;
			var scaleh = H / height;
			var scale = ( scalew < scaleh ) ? scalew : scaleh;
			width = width * scale;
			height = height * scale;
			var xpos = ( width >= W ) ? 0 : ( W - width ) / 2;
			var ypos = ( height >= H ) ? 0 : ( H - height ) / 2;
			$( "#upload-canvas" ).drawImage( {
				source: img,
				x: xpos,
				y: ypos,
				width: width,
				height: height,
				fromCenter: false,
				load: function() {
					if ( typeof cbk == "function" ) cbk();
				}
			} );
		},

		imgUpload: function( cbk ) {
			var me = this;
			var post_data = {
				provider: window.capitol_oauth.user_data.provider,
				user_id: window.capitol_oauth.user_data.user_id,
				base64url: $( "#upload-canvas" ).getCanvasImage( "jpeg", 0.9 )
			}
			$.ajax( {
				type: "POST",
				dataType: 'json',
				url: '/api/red/image',
				data: post_data
			} ).done( function( data ) {
				if ( data.status ) {
					if ( typeof cbk == "function" ) cbk( data );
				}
			} );
		}

	};

	window.capitol_upload.init();

} );


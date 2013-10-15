$( function() {

	window.capitol_oauth = {
		user_data: [],
		init: function() {
			var me = this;
			$( ".login .twitter-btn, #main-login #twitter" ).click( function() {
				//$( "#main-register" ).fadeIn( "slow" ); return;
				if (!$(".audio-control").hasClass("off") ) {
					if (typeof amb_snd!="undefined") amb_snd.play();
				}
				window.open( '/oauth/twitter/index/1', 'oauth_twitter', 'toolbar=0,status=0,width=548,height=325' );
			} );
			$( ".login .fb-btn, #main-login #facebook" ).click( function() {
				 if (!$(".audio-control").hasClass("off") ) {
				 	if (typeof amb_snd!="undefined") amb_snd.play();
				 }
				 window.open( '/oauth/fb', 'oauth_fb', 'toolbar=0,status=0,width=1000,height=600' );
				//$( ".register" ).fadeIn( "slow" );
			} );
			$( "div.register div.submit-btn" ).click( function() {
				me.register();
			} );
			$( "#main-register div.submit-btn" ).click( function() {
				//window.showHome();return;
				me.mobile_register();
			} );

		},
		okCallback: function( data ) {
			this.user_data = data;
			this.redLogin();
		},
		mobile_register: function() {
			var me = this;
			var user_name = $.trim( $( "#main-register #register_username" ).val() );
			var user_email = $.trim( $( "#main-register #register_email" ).val() );
			var gender = $("#main-register input[name='gender']:checked").val();
			var terms = $( "#main-register #terms" ).is(":checked");
			var opt_in = $( "#main-register #notifications" ).is(":checked");
			if ( terms ) {
				var valid_email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test( user_email );
				var valid_name = /^[A-Za-z0-9_]{3,25}$/.test( user_name );
				if ( valid_email && valid_name ) {
					window.capitol_upload.imgUpload( function( data ) {
						var badge = "";
						if ( typeof data.file == "string" ) {
							badge = data.file;
						}
						me.redRegister( {
							user_name: user_name,
							user_email: user_email,
							gender: gender,
							badge: badge
						} );
					} );
				}
			}
		},

		register: function() {
			var me = this;
			var user_name = $.trim( $( "div.register #register_username" ).val() );
			var user_email = $.trim( $( "div.register #register_email" ).val() );
			var gender = $( "div.gender div.radio.checked" ).data( 'userGender' );
			var terms = $( "div.checkbox.terms" ).hasClass( "checked" );
			var opt_in = $( "div.checkbox.opt-in" ).hasClass( "checked" );
			if ( terms ) {
				var valid_email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test( user_email );
				var valid_name = /^[A-Za-z0-9_]{3,25}$/.test( user_name );
				if ( valid_email && valid_name ) {
					window.capitol_upload.imgUpload( function( data ) {
						var badge = "";
						if ( typeof data.file == "string" ) {
							badge = data.file;
						}
						me.redRegister( {
							user_name: user_name,
							user_email: user_email,
							gender: gender,
							badge: badge
						} );
					} );
				}
			}
		},
		redRegister: function( in_data ) {
			in_data.provider = this.user_data.provider;
			in_data.user_id = this.user_data.user_id;
			var me = this;
			$.ajax( {
				type: "POST",
				dataType: 'json',
				url: '/api/red/register',
				data: in_data
			} ).done( function( data ) {
				if ( data.status && typeof data.red_response.social_ids == "object" ) {
					window.red_api.loadProfile( data.red_response );
				}
			} );
		},
		redLogout: function() {
			$.ajax( {
				type: "GET",
				dataType: 'json',
				url: '/api/red/logout'
			} ).done( function( data ) {
				if ( data.status ) {
					window.location.reload();
				}
			} );
		},
		redLogin: function() {
			var me = this;
			if (window.loginShowMessage) loginShowMessage( "INITIALIZING", "USER PROFILE" );
			$.ajax( {
				type: "GET",
				dataType: 'json',
				url: '/api/red/login',
				data: {
					provider: this.user_data.provider,
					user_id: this.user_data.user_id
				}
			} ).done( function( data ) {
				if ( data.status ) {
					console.log( 'signin', data );
					$("body").data("network",me.user_data.provider);
					if ( typeof data.red_response == "object" ) {
						if ( typeof data.red_response.error == "string" ) {
							if ( data.red_response.error == "Unknown social id" ) {
								$( "#register_username" ).val( me.user_data.user_name );
								$( "#main-register" ).fadeIn( "slow" );
							}
							else{
								if (window.loginShowMessage) window.loginShowMessage("initialization error.",data.red_response.error,2000);
							}
						} else if ( typeof data.red_response.social_ids == "object" ) {
							window.red_api.loadProfile( data.red_response );
						}
					}
				}
			} );
		}
	};

	window.capitol_oauth.init();

} );


define(['wysiwyg','./plugins/wysiwyg/wysiwyg-editor.js'], function(wysiwyg) {
	console.log(wysiwyg)
	$('#editor1').each(function(index, element) {
		$(element).wysiwyg({
				'class': 'fake-bootstrap',
				buttons: {
					
					// Dummy-Button-Plugin
					dummybutton2: index != 1 ? false : {
						title: 'Dummy',
						image: '\uf1e7',
						click: function($button) {
							// We simply make 'bold'
							if ($(element).wysiwyg('shell').getSelectedHTML())
								$(element).wysiwyg('shell').bold();
							else
								alert('No text selected');
						},
						//showstatic: true,    // wanted on the toolbar
						showselection: false // wanted on selection
					},
					insertimage: {
						title: 'Insert image',
						image: '\uf030', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
					},
					insertvideo: {
						title: 'Insert video',
						image: '\uf03d', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
					},
					insertlink: {
						title: 'Insert link',
						image: '\uf08e' // <img src="path/to/image.png" width="16" height="16" alt="" />
					},

					bold: {
						title: 'Bold (Ctrl+B)',
						image: '\uf032', // <img src="path/to/image.png" width="16" height="16" alt="" />
						hotkey: 'b'
					},
					italic: {
						title: 'Italic (Ctrl+I)',
						image: '\uf033', // <img src="path/to/image.png" width="16" height="16" alt="" />
						hotkey: 'i'
					},
					underline: {
						title: 'Underline (Ctrl+U)',
						image: '\uf0cd', // <img src="path/to/image.png" width="16" height="16" alt="" />
						hotkey: 'u'
					},
					strikethrough: {
						title: 'Strikethrough (Ctrl+S)',
						image: '\uf0cc', // <img src="path/to/image.png" width="16" height="16" alt="" />
						hotkey: 's'
					},
					forecolor: {
						title: 'Text color',
						image: '\uf1fc' // <img src="path/to/image.png" width="16" height="16" alt="" />
					},
					alignleft: {
						title: 'Left',
						image: '\uf036', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
						showselection: false // wanted on selection
					},
					aligncenter: {
						title: 'Center',
						image: '\uf037', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
						showselection: false // wanted on selection
					},
					alignright: {
						title: 'Right',
						image: '\uf038', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
						showselection: false // wanted on selection
					},
					alignjustify: {
						title: 'Justify',
						image: '\uf039', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
						showselection: false // wanted on selection
					},
					subscript: {
						title: 'Subscript',
						image: '\uf12c', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
						showselection: true // wanted on selection
					},
					superscript: {
						title: 'Superscript',
						image: '\uf12b', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
						showselection: true // wanted on selection
					},
					indent: {
						title: 'Indent',
						image: '\uf03c', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
						showselection: false // wanted on selection
					},
					outdent: {
						title: 'Outdent',
						image: '\uf03b', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
						showselection: false // wanted on selection
					},
					orderedList: {
						title: 'Ordered list',
						image: '\uf0cb', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
						showselection: false // wanted on selection
					},
					unorderedList: {
						title: 'Unordered list',
						image: '\uf0ca', // <img src="path/to/image.png" width="16" height="16" alt="" />
						//showstatic: true,    // wanted on the toolbar
						showselection: false // wanted on selection
					},
					removeformat: {
						title: 'Remove format',
						image: '\uf12d' // <img src="path/to/image.png" width="16" height="16" alt="" />
					}
				},
				// Submit-Button
				submit: {
					title: 'Submit',
					image: '\uf00c' // <img src="path/to/image.png" width="16" height="16" alt="" />
				},
				// Other properties
				selectImage: 'Click or drop image',
				placeholderUrl: 'www.example.com',
				placeholderEmbed: '<embed/>',
				maxImageSize: [600, 200],
				//filterImageType: callback( file ) {},
				onKeyDown: function(key, character, shiftKey, altKey, ctrlKey, metaKey) {
					// E.g.: submit form on enter-key:
					//if( (key == 10 || key == 13) && !shiftKey && !altKey && !ctrlKey && !metaKey ) {
					//    submit_form();
					//    return false; // swallow enter
					//}
				},
				onKeyPress: function(key, character, shiftKey, altKey, ctrlKey, metaKey) {},
				onKeyUp: function(key, character, shiftKey, altKey, ctrlKey, metaKey) {},
				onAutocomplete: function(typed, key, character, shiftKey, altKey, ctrlKey, metaKey) {
					if (typed.indexOf('@') == 0) // startswith '@'
					{
						var usernames = [
							'Evelyn',
							'Harry',
							'Amelia',
							'Oliver',
							'Isabelle',
							'Eddie',
							'Editha',
							'Jacob',
							'Emily',
							'George',
							'Edison'
						];
						var $list = $('<div/>').addClass('wysiwyg-plugin-list')
							.attr('unselectable', 'on');
						$.each(usernames, function(index, username) {
							if (username.toLowerCase().indexOf(typed.substring(1).toLowerCase()) !== 0) // don't count first character '@'
								return;
							var $link = $('<a/>').attr('href', '#')
								.text(username)
								.click(function(event) {
									var url = 'http://example.com/user/' + username,
										html = '<a href="' + url + '">@' + username + '</a> ';
									var editor = $(element).wysiwyg('shell');
									// Expand selection and set inject HTML
									editor.expandSelection(typed.length, 0).insertHTML(html);
									editor.closePopup().getElement().focus();
									// prevent link-href-#
									event.stopPropagation();
									event.preventDefault();
									return false;
								});
							$list.append($link);
						});
						if ($list.children().length) {
							if (key == 13) {
								$list.children(':first').click();
								return false; // swallow enter
							}
							// Show popup
							else if (character || key == 8)
								return $list;
						}
					}
				},
				onImageUpload: function(insert_image) {
					// A bit tricky, because we can't easily upload a file via
					// '$.ajax()' on a legacy browser without XMLHttpRequest2.
					// You have to submit the form into an '<iframe/>' element.
					// Call 'insert_image(url)' as soon as the file is online
					// and the URL is available.
					// Example server script (written in PHP):
					/*
					<?php
					$upload = $_FILES['upload-filename'];
					// Crucial: Forbid code files
					$file_extension = pathinfo( $upload['name'], PATHINFO_EXTENSION );
					if( $file_extension != 'jpeg' && $file_extension != 'jpg' && $file_extension != 'png' && $file_extension != 'gif' )
					    die("Wrong file extension.");
					$filename = 'image-'.md5(microtime(true)).'.'.$file_extension;
					$filepath = '/path/to/'.$filename;
					$serverpath = 'http://domain.com/path/to/'.$filename;
					move_uploaded_file( $upload['tmp_name'], $filepath );
					echo $serverpath;
					*/
					// Example client script (without upload-progressbar):
					var iframe_name = 'legacy-uploader-' + Math.random().toString(36).substring(2);
					$('<iframe>').attr('name', iframe_name)
						.load(function() {
							// <iframe> is ready - we will find the URL in the iframe-body
							var iframe = this;
							var iframedoc = iframe.contentDocument ? iframe.contentDocument :
								(iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
							var iframebody = iframedoc.getElementsByTagName('body')[0];
							var image_url = iframebody.innerHTML;
							insert_image(image_url);
							$(iframe).remove();
						})
						.appendTo(document.body);
					var $input = $(this);
					$input.attr('name', 'upload-filename')
						.parents('form')
						.attr('action', '/script.php') // accessing cross domain <iframes> could be difficult
						.attr('method', 'POST')
						.attr('enctype', 'multipart/form-data')
						.attr('target', iframe_name)
						.submit();
				},
				forceImageUpload: false, // upload images even if File-API is present
				videoFromUrl: function(url) {
					// Contributions are welcome :-)

					// youtube - http://stackoverflow.com/questions/3392993/php-regex-to-get-youtube-video-id
					var youtube_match = url.match(/^(?:http(?:s)?:\/\/)?(?:[a-z0-9.]+\.)?(?:youtu\.be|youtube\.com)\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/)([^\?&\"'>]+)/);
					if (youtube_match && youtube_match[1].length == 11)
						return '<iframe src="//www.youtube.com/embed/' + youtube_match[1] + '" width="640" height="360" frameborder="0" allowfullscreen></iframe>';

					// vimeo - http://embedresponsively.com/
					var vimeo_match = url.match(/^(?:http(?:s)?:\/\/)?(?:[a-z0-9.]+\.)?vimeo\.com\/([0-9]+)$/);
					if (vimeo_match)
						return '<iframe src="//player.vimeo.com/video/' + vimeo_match[1] + '" width="640" height="360" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

					// dailymotion - http://embedresponsively.com/
					var dailymotion_match = url.match(/^(?:http(?:s)?:\/\/)?(?:[a-z0-9.]+\.)?dailymotion\.com\/video\/([0-9a-z]+)$/);
					if (dailymotion_match)
						return '<iframe src="//www.dailymotion.com/embed/video/' + dailymotion_match[1] + '" width="640" height="360" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

					// undefined -> create '<video/>' tag
				}
			})
			.change(function() {
				if (typeof console != 'undefined')
				; //console.log( 'change' );
			})
			.focus(function() {
				if (typeof console != 'undefined')
				; //console.log( 'focus' );
			})
			.blur(function() {
				if (typeof console != 'undefined')
				; //console.log( 'blur' );
			});
	})
})
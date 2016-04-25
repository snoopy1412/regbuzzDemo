define(['bootstrap','summernote'],function(common,summernote){
	    $('#summernote').summernote({              // set editor height
			  minHeight: 200,             // set minimum height of editor
			  maxHeight: null,             // set maximum height of editor
			  focus: true,                 // set focus to editable area after initializing 
			  toolbar: [
			    ['style', ['style','bold', 'italic', 'underline']],
			    ['font', [ 'superscript', 'subscript']],
			    ['Insert',['picture','link']],
			    ['para', ['ul', 'ol']],
			    ['style', ['clear']],
			  ],
	          code : '',
	          popover: {
	            },
				  styleTags: ['h1', 'h2', 'h3'],
			  	  placeholder: 'Write here...',
	          	  dialogsFade: true,
	          icons: {
	            'align': 'fa fa-align-center',
	            'bold': 'fa fa-bold',
	            'eraser': 'fa fa-eraser',
	            'italic': 'fa fa-italic',
	            'link': 'fa fa-link',
	            'unlink': 'fa fa-chain-broken',
	            'magic': 'fa fa-header',
	            'orderedlist': 'fa fa-list-ol',
	            'picture': 'fa fa-file-image-o',
	            'subscript': 'fa fa-subscript',
	            'superscript': 'fa fa-superscript',
	            'unorderedlist': 'fa fa-list-ul',
	            'alignCenter': 'note-icon-align-center',
	            'alignJustify': 'note-icon-align-justify',
	            'alignLeft': 'note-icon-align-left',
	            'alignRight': 'note-icon-align-right',
	            'indent': 'note-icon-align-indent',
	            'outdent': 'note-icon-align-outdent',
	            'arrowsAlt': 'note-icon-arrows-alt',
	            'caret': 'note-icon-caret',
	            'circle': 'note-icon-circle',
	            'close': 'note-icon-close',
	            'code': 'note-icon-code',
	            'font': 'note-icon-font',
	            'frame': 'note-icon-frame',
	            'menuCheck': 'note-icon-check',
	            'minus': 'note-icon-minus',
	            'pencil': 'note-icon-pencil',
	            'question': 'note-icon-question',
	            'redo': 'note-icon-redo',
	            'square': 'note-icon-square',
	            'strikethrough': 'note-icon-strikethrough',
	            'table': 'note-icon-table',
	            'textHeight': 'note-icon-text-height',
	            'trash': 'note-icon-trash',
	            'underline': 'fa fa-underline',
	            'undo': 'note-icon-undo',
	            'video': 'note-icon-video'
	          	},
	airMode : false
	});

	$('#btn').on('click',function(){
	    console.log( $('#summernote').summernote('code') );
	})
})
define(['jquery','WebUploader'],function($,WebUploader){
	// var  WebUploader = upload.WebUploader;
	// console.log(WebUploader)
  		var $upload = $('#upload'), 
  			$list = $('#thelist'),
	        $btn = $('#ctlBtn'),
	        state = 'pending',
	        uploader;
		var uploader = WebUploader.create({

		    // swf文件路径
		    swf: '/js/Uploader.swf',

		    // 文件接收服务端。
		    server: './server/fileupload.php',

		    // 选择文件的按钮。可选。
		    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
		    pick: '#picker',

		    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
		    resize: false
		});

		uploader.on( 'fileQueued', function( file ) {
		    var list = $list.find('.table');
		    if($btn.css('display') === 'none'){
		    	$btn.show();
		    }
		    list.append(
		    			"<tr id='"+ file.id +"'>" +
		    				"<td width='40%'><h4 class='info' style='margin:2px'>" + file.name + "</h4></td>" +  				
		    				"<td width='50%'>" +
		    				"<div class='progress progress-striped active' style='margin-bottom:0'>" +
		          				"<div class='progress-bar' style='width: 0%''>" +
		          			"</div>" +
		          			"<td width='10%'><span class='state'><span class='label label-default'>等待上传</span></span></td>" +
		          			"</td>" +
	    			"</tr>" 
		    		)
				});

		// 文件全部上传完毕
		uploader.on('uploadFinished',function(){
			$btn.fadeOut();
		})
		// 文件上传过程中创建进度条实时显示。
		uploader.on( 'uploadProgress', function( file, percentage ) {
		    var $li = $( '#'+file.id ),
		        $percent = $li.find('.progress .progress-bar');

		    // 避免重复创建
		    if ( !$percent.length ) {
		        $percent = $('<div class="progress progress-striped active">' +
		          '<div class="progress-bar" role="progressbar" style="width: 0%">' +
		          '</div>' +
		        '</div>').appendTo( $li ).find('.progress-bar');
		    }

		    $li.find('.state').html("<span class='label label-info'>上传中</span>");

		    $percent.css( 'width', percentage * 100 + '%' );
		});
		uploader.on( 'uploadSuccess', function( file ) {
		    $( '#'+file.id ).find('.state').html("<span class='label label-success'>上传成功</span>");
		});

		uploader.on( 'uploadError', function( file ) {
		    $( '#'+file.id ).find('.state').html("<span class='label label-danger'>上传出错</span>");
		});

		uploader.on( 'uploadComplete', function( file ) {
		    $( '#'+file.id ).find('.progress').fadeOut();
		});

		uploader.on( 'all', function( type ) {
	        if ( type === 'startUpload' ) {
	            state = 'uploading';
	        } else if ( type === 'stopUpload' ) {
	            state = 'paused';
	        } else if ( type === 'uploadFinished' ) {
	            state = 'done';
	        }

	        if ( state === 'uploading' ) {
	            $btn.text('暂停上传');
	        } else {
	            $btn.text('开始上传');
	        }
	    });


	    $btn.on( 'click', function() {
	        if ( state === 'uploading' ) {
	            uploader.stop(true);
	        } else {
	            uploader.upload();
	        }
	    });

})
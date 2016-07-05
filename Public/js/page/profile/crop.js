define(['jquery', 'WebUploader'], function($, WebUploader) {

	var $container = $('#person-avatar-preview'),
		$loading = $('.profile-avatar-loading'), // 加载遮罩
		$upload = $('.profile-avatar-upload'), // 上传遮罩
		$uploaderror = $('.profile-avatar-error'), //上传错误提示

		//记录的uploadfile,用于动态删除预览图及初始化上传组件
		uploadfile,

		// 优化retina, 在retina下这个值是2
		ratio = window.devicePixelRatio || 1,

		// 缩略图大小
		thumbnailWidth = 1 * ratio,
		thumbnailHeight = 1 * ratio,

		// Web Uploader实例
		uploader,

		state = 'pending',

		// 上传按钮
		$submitBtn = $('#upload-avator');

	// 头部头像区域hover出现
	$('.profile-avatar').hover(function() {
		if ($loading.css('display') === 'none') {
			$upload.show();
		}
	}, function() {
		$upload.hide();
	});

	// 初始化Web Uploader
	// 修改了webuploader 1776行 refresh方法，并为pick元素赋值宽高,
	// 这是目前的折中办法，得不偿失，建议慎重
	uploader = WebUploader.create({

		// swf文件路径
		swf: './plugins/webuploader/swf/Uploader.swf',

		// 文件接收服务端。
		server: './server/fileupload.php',

		// 选择文件的按钮。可选。
		// 内部根据当前运行是创建，可能是input元素，也可能是flash.
		pick: {
			id: '#filePicker',
			multiple: false
		},

		fileNumLimit: 1,

		// 只允许选择图片文件。
		accept: {
			title: 'Images',
			extensions: 'gif,jpg,jpeg,bmp,png',
			mimeTypes: 'image/*'
		},
		fileSizeLimit: 3 * 1024 * 1024
	});

	// 当文件被加入队列之前
	uploader.on('beforeFileQueued', function() {

		// 清空上一次的文件
		if (uploadfile) {
			uploader.removeFile(uploadfile);
		}
	})

	// 当有文件添加进来的时候
	uploader.on('fileQueued', function(file) {

		// 将文件对象缓存给uploadfile,用于清空上一次文件对象
		uploadfile = file;

		$container.find('.img-crop').html('');

		var $img = $(
			'<img id="' + file.id + '-crop">'
		)

		// $list为容器jQuery实例
		$container.find('.img-crop').html($img);

		// 创建缩略图
		// 如果为非图片文件，可以不用调用此方法。
		// thumbnailWidth x thumbnailHeight 为 100 x 100
		var compression;
		uploader.makeThumb(file, function(error, src) {
			if (error) {
				$img.replaceWith('<span>不能预览</span>');
				return;
			}

			$img.attr('src', src);

			// 计算图片的宽高
			var originImgId = $("#" + file.id + "-crop");

			var cropWidth = originImgId.width(),
				cropHeight = originImgId.height();

			if (cropWidth <= 0 || cropHeight <= 0) {
				return false;
			}

			if (cropWidth >= cropHeight) {
				originImgId.css({
					width: '100%',
					height: 'auto'
				})

				// 计算更新的压缩比
				compression = originImgId.width() / cropWidth;

			} else {
				originImgId.css({
					height: '100%',
					width: 'auto'
				})

				// 计算更新的压缩比
				compression = originImgId.height() / cropHeight;
			}
		}, thumbnailWidth, thumbnailHeight);


		// 开始裁剪
		// var originImgId = $("#" + file.id + "-crop"),
		// 	previewImgId = $("#" + file.id + "-preview-crop"),
		// 	$pcnt = $("#" + file.id + "-preview"),
		// 	xsize = $pcnt.width(),
		// 	ysize = $pcnt.height();
		// var jcrop = originImgId.Jcrop({
		// 	aspectRatio: 1,
		// 	minSize: [20, 20],
		// 	onChange: function() {

		// 		var self = this;
		// 		var c = this.tellSelect();
		// 		var $pimg = previewImgId;
		// 		if (parseInt(c.w) > 0) {
		// 			var rx = xsize / c.w;
		// 			var ry = ysize / c.h;
		// 			$pimg.css({
		// 				width: Math.round(rx * self.getBounds()[0]) + 'px',
		// 				height: Math.round(ry * self.getBounds()[1]) + 'px',
		// 				marginLeft: '-' + Math.round(rx * c.x) + 'px',
		// 				marginTop: '-' + Math.round(ry * c.y) + 'px'
		// 			});
		// 		}
		// 		cropData = {
		// 			x: this.tellSelect().x / compression,
		// 			y: this.tellSelect().y / compression,
		// 			x2: this.tellSelect().x2 / compression,
		// 			y2: this.tellSelect().y2 / compression,
		// 			w: this.tellSelect().w / compression,
		// 			h: this.tellSelect().h / compression
		// 		}

		// 		console.log(cropData.x, this.tellSelect().x)
		// 	}
		// }, function() {
		// 	jcrop_api = this;
		// 	jcrop_api.animateTo([0, 0, 200, 200]);
		// });
	});

	// 上传前发生的错误
	uploader.on('error', function(code) {
		switch (code) {
			case 'Q_EXCEED_SIZE_LIMIT':
				alert('上传的图片体积过大！')
				break;
		}
	});

	// 综合上传事件
	uploader.on('all', function(type) {
		if (type === 'startUpload') {
			state = 'uploading';
		} else if (type === 'stopUpload') {
			state = 'paused';
		} else if (type === 'uploadFinished') {
			state = 'done';
		}

		if (state === 'uploading') {
			$submitBtn.text('stop');
		} else {
			$submitBtn.text('upload');
		}
	});

	// 触发上传事件
	$submitBtn.on('click', function(e) {
		e.stopPropagation();
		if (state === 'uploading') {
			uploader.stop();
		} else {
			uploader.upload();

			// 关闭模态框
			$('#person-avatar-crop').modal('hide');
		}
	});

	// 上传成功
	uploader.on('uploadSuccess', function(file, response) {

		//上传后的回调，主要用于头像的替换
		$.ajax({
			url: '',
			type: 'post',
			beforeSend: function() {
				$('.profile-avatar-loading').show();
			},
			success: function(data) {
				//如果data就是数据
				if (data.src) {
					$('.profile-avatar').find(img).attr('src', data.src)
				}
			},
			error: function() {
				showError($uploaderror)
			},
			complete: function() {
				$('.profile-avatar-loading').hide();
			}
		})
	})

	// 上传失败
	uploader.on('uploadError', function(file, reason) {
		switch (reason) {
			case 'http':
				alert('上传路径错误！')
				break;
		}
		showError($uploaderror)
	})



	// bootstrap 中 模态框 自定义 隐藏模态框 事件，在此事件中，对裁剪框初始化
	$('#person-avatar-crop').on('hidden.bs.modal', function(e) {
		$container.find('.img-crop').html('');
		// $container.find('.img-preview-origin').html('');
		uploader.reset();
		$('#filePicker').show();
	})

})

/**
 * 上传错误
 * @param  {[type]}  node  [dom节点]
 * @param  {Boolean} isAway  [是否消失]
 */
function showError(node, isAway) {
	var isAway = isAway || true;
	node.fadeIn(500);
	if (isAway) {
		setTimeout(function() {
			node.fadeOut(1000)
		}, 3000)
	}

}
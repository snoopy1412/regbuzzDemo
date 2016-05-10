define(['jquery', 'WebUploader', 'jcrop'], function($, WebUploader, jcrop) {
	// 头部头像区域hover出现
	$('.profile-avatar').hover(function() {
		$('.profile-avatar-upload').show();
	}, function() {
		$('.profile-avatar-upload').hide();
	});

	// 修改了webuploader 1776行 refresh方法，并为pick元素赋值宽高,
	// 这是目前的折中办法，得不偿失，建议慎重
	var $container = $('#person-avatar-preview'),
		// 优化retina, 在retina下这个值是2
		ratio = window.devicePixelRatio || 1,

		// 缩略图大小
		thumbnailWidth = 1 * ratio,
		thumbnailHeight = 1 * ratio,

		// Web Uploader实例
		uploader,

		state = 'pending',

		// 上传按钮
		$submitBtn = $('#upload-avator'),

		// 默认裁剪数据
		cropData = {
			x: 0,
			y: 0,
			x2: 200,
			y2: 200,
			w: 200,
			h: 200
		};

	// 初始化Web Uploader
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
		}
	});

	// 当有文件添加进来的时候
	uploader.on('fileQueued', function(file) {
		// $('#filePicker').hide();
		var $li = $(
				'<div id="' + file.id + '">' +
				'<img id="' + file.id + '-crop">' +
				'</div>'
			),
			$img = $li.find('img');

		// $list为容器jQuery实例
		$container.find('.img-crop').html($li);

		var $imgOrigin = $('#' + file.id + '-crop');

		var $liPreview = $(
				'<div id="' + file.id + '-preview" class="preview-container">' +
				'<img id="' + file.id + '-preview-crop">' +
				'</div>'
			),

			$imgPreview = $liPreview.find('img');


		// 预览图
		$container.find('.img-preview-origin').html($liPreview);

		// 创建缩略图
		// 如果为非图片文件，可以不用调用此方法。
		// thumbnailWidth x thumbnailHeight 为 100 x 100
		var compression;
		uploader.makeThumb(file, function(error, src) {
			if (error) {
				$img.replaceWith('<span>不能预览</span>');
				$imgPreview.replaceWith('<span>不能预览</span>');
				return;
			}

			$img.attr('src', src);
			$imgPreview.attr('src', src);

			// 计算图片的宽高？
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
		var originImgId = $("#" + file.id + "-crop"),
			previewImgId = $("#" + file.id + "-preview-crop"),
			$pcnt = $("#" + file.id + "-preview"),
			xsize = $pcnt.width(),
			ysize = $pcnt.height();
		var jcrop = originImgId.Jcrop({
			aspectRatio: 1,
			minSize: [20, 20],
			onChange: function() {

				var self = this;
				var c = this.tellSelect();
				var $pimg = previewImgId;
				if (parseInt(c.w) > 0) {
					var rx = xsize / c.w;
					var ry = ysize / c.h;
					$pimg.css({
						width: Math.round(rx * self.getBounds()[0]) + 'px',
						height: Math.round(ry * self.getBounds()[1]) + 'px',
						marginLeft: '-' + Math.round(rx * c.x) + 'px',
						marginTop: '-' + Math.round(ry * c.y) + 'px'
					});
				}
				cropData = {
					x: this.tellSelect().x / compression,
					y: this.tellSelect().y / compression,
					x2: this.tellSelect().x2 / compression,
					y2: this.tellSelect().y2 / compression,
					w: this.tellSelect().w / compression,
					h: this.tellSelect().h / compression
				}

				console.log(cropData.x, this.tellSelect().x)
			}
		}, function() {
			jcrop_api = this;
			jcrop_api.animateTo([0, 0, 200, 200]);
		});
	});



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

	$submitBtn.on('click', function(e) {
		e.stopPropagation();
		if (state === 'uploading') {
			uploader.stop();
		} else {

			// option.formData 输出给后台裁剪的坐标信息，用于后台裁剪数据使用
			uploader.option('formData', {
				x: cropData.x,
				y: cropData.y,
				x2: cropData.x2,
				y2: cropData.y2,
				w: cropData.w,
				h: cropData.h
			});
			uploader.upload();
		}
	});

	// bootstrap 中 模态框 自定义 隐藏模态框 事件，在此事件中，对裁剪框初始化
	$('#person-avatar-crop').on('hidden.bs.modal', function(e) {
		$container.find('.img-crop').html('');
		$container.find('.img-preview-origin').html('');
		uploader.reset();
		$('#filePicker').show();
	})

})
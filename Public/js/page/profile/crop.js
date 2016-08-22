define(['jquery', 'WebUploader'], function($, WebUploader) {

	var $container = $('#person-avatar-preview'),
		$loading = $('.profile-avatar-loading'), // 加载遮罩
		$upload = $('.profile-avatar-upload'), // 上传遮罩
		$uploaderror = $('.profile-avatar-error'), //上传错误提示

		//记录的uploadfile,用于动态删除预览图及初始化上传组件
		uploadfile,

		// Web Uploader实例
		uploader,

		state = 'pending';

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
			id: '#profile-avatar-upload',
			multiple: false
		},

		auto:true,

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
	});

	// 上传前发生的错误
	uploader.on('error', function(code) {
		switch (code) {
			case 'Q_EXCEED_SIZE_LIMIT':
				alert('上传的图片体积过大！')
				break;
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
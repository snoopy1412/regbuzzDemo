define(function(require) {

	var $ = require('jquery');


	// 头部编辑区域hover高亮处理
	$('.edit-start').hover(function() {
		$(this).find('.edit-text').css('background-color', '#dcf2fc');
		$(this).find('.edit-handle').css('background-color', '#dcf2fc');
	}, function() {
		$(this).find('.edit-text').css('background-color', 'transparent');
		$(this).find('.edit-handle').css('background-color', 'transparent');
	})


	// 内容区域hover显示编辑按钮? 
	// 移动端没有hover事件
	$(document).on('mouseover', '.profile-info-item', function() {
		$(this).find('.handle').show();
	})
	$(document).on('mouseout', '.profile-info-item', function() {
		$(this).find('.handle').hide()
	})

	require('./raty');
	require('./crop');
	require('./hire');
	require('./controller');
});
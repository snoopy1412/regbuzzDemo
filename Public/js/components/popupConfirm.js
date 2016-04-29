define(['jquery', 'layer', '../layerInit'], function($) {

	$(document).on('click', '#release', function() {
		layer.confirm('is not?', {
			title: "延迟"
		}, function(index) {

		}, function() {

		});
	})

	// function popupConfirm(node, options) {
	// 	this.obj = $(obj);
	// 	this.options = $.extend({}, popupConfirm.defaults, options);

	// }

	// popupConfirm.defaults = {
	// 	modalContainer : '',
	// 	confirmBtns : ''
	// };	
	// popupConfirm.prototype = {
	// 	constructor: PopoverCustom,

	// 	init: function() {
	// 		this.elements(); //初始化元素
	// 	},
	// 	elements: function() {
	// 		this.userId = '';
	// 		this.projectId = '';
	// 		this.projectStatus = '';
	// 	},
	// 	bindEvent : function(){

	// 		// 配合bootstrap 的 modal 自定义事件
	// 		$(this.options.modalContainer).on('show.bs.modal',function(){

	// 		})
	// 	}
	// };

})
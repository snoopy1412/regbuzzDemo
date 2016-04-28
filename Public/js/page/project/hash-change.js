define(function(require) {
	var $ = require('jquery');

	var hashChange = {
		init: function() {
			this.bindEvent();

			// 初始化页面
			$(function() {
				$(document).trigger('hash.show');
			})
		},
		bindEvent: function() {
			this.subscribe();
		},
		publich: function() {
			// 自定义事件，改变hash值
			$('[data-toggle="tab"]').on('hash.change', function() {
				var originUrl = window.location.pathname,
					hash = $(this).attr('href'),
					newUrl = originUrl + hash;
				window.location.hash = hash;
			})

			// 自定义事件，配合hashchange
			$(window).on('hash.show', function() {
				var hash = window.location.hash;
				var $tabs = $('[data-toggle="tab"]');
				var $containers = $('.tab-pane');

				$containers.each(function(i, item) {
					this.index = i;
					if ($(this).attr('id') === hash.substr(1)) {
						$(this).addClass('active').siblings().removeClass('active');
						$tabs.eq(this.index).parent().addClass('active').siblings().removeClass('active');
					}
				})
			})
		},
		subscribe: function() {	
			this.publich(); // 引入自定义事件

			// 触发hash.change
			$('[data-toggle="tab"]').on('click', function() {
				$(this).trigger('hash.change');
			})

			// 触发hash.show
			$(window).on('hashchange', function() {
				$(this).trigger('hash.show');
			})
		}
	}

	return {
		hashChange: hashChange
	}

})
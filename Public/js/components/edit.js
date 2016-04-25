define(function() {
	function Edit(start,options) {
		this.options = $.extend({},Edit.defaluts,options);
		switch (start) {
			case 'string':
				this.start = $(start);
				break;
			case 'object':
				this.start = start;
				break;
			default:
				this.start = $(start);
				break;
		}
		this.show = $('.js-show', this.start);
		this.hide = $('.js-hide', this.start);		
		this.edit = this.start.find(this.options.editEl);
		this.delete = this.start.find(this.options.deleteEl);
		this.text = this.start.find(this.options.textEl);
		this.save = this.start.find(this.options.svaeEl);
		this.cancel = this.start.find(this.options.cancelEl);
		this.textarea = this.start.find(this.options.textareaEl);
		this.originalData = '';

		// 阻止默认事件及阻止冒泡
		this._default = function(event) {
			event.preventDefault();
			event.stopPropagation();
		};

		//隐藏与展现
		this._showHidden = function(show, hide) {
			show.css('display', 'block');
			hide.css('display', 'none');
		};

		// 初始化
		this.init();
	}
	Edit.defaluts = {
		editEl:'.js-edit-edit',
		deleteEl :'.js-edit-delete',
		textEl:'.js-edit-text',
		svaeEl:'.js-edit-save',
		cancelEl:'.js-edit-cancel',
		textareaEl:'.js-edit-textarea',
		hoverColor:'',
		isDelete:false
	};

	Edit.prototype = {
		constructor: Edit,
		init: function() {
			this.hover();
			this.editData();
			if(this.options.isDelete){
				this.deleteData();
			}	 
		},
		hover:function(){
			var _this = this;
			if(this.options.hoverColor){	
				this.edit.hover(function(){
					_this.edit.each(function(){
						$(this).css('background-color',_this.options.hoverColor);
					});
				},function(){
					_this.edit.each(function(){
						$(this).css('background-color','transparent');
					});
				});					
			}		
		},
		editData: function() {
			var _this = this;
			this.edit.on('click', function(event) {
				var that = this;
				_this.editFn(that, event);
			});
		},
		editFn: function(that, event) {
			this._default(event);
			this.originalData = this.text.text();

			// 隐藏与展现
			this._showHidden(this.hide, this.show);

			// 绑定data数据
			this.text.data('original', this.originalData);

			// 改变textarea的内部值
			this.textarea.val(this.originalData);
			if (this.hide.css('display') === 'block') {
				this.saveData();
				this.cancelData();
			}
		},
		saveData: function() {
			var _this = this;
			this.save.on('click', function(event) {
				var that = this;
				_this.saveFn(that, event);
			});
		},
		saveFn: function(that, event) {
			this._default(event);
			var newData = this.textarea.val().trim();
			if (newData) {
				this.text.text(newData);
			}

			// 隐藏与展现
			this._showHidden(this.show, this.hide);
		},		
		cancelData: function() {
			var _this = this;
			this.cancel.on('click', function(event) {
				var that = this;
				_this.cancelFn(that, event);
			});
		},
		cancelFn: function(that, event) {
			this._default(event);
			this.text.text(this.text.data('original'));

			// 隐藏与展现
			this._showHidden(this.show, this.hide);
		},
		deleteData:function(){
			var _this = this;
			this.delete.on('click',function(event){
				var that = this;
				_this.deleteFn(that,event);
			});
		},
		deleteFn: function(that,event){
			this._default(event);
			this.start.remove();
		}
	};

	// 生成jquery插件
	$.fn.extend({
		edit: function(options) {
			this.each(function(i, item) {
				new Edit(this,options);
			});
			return this;
		}
	});
});
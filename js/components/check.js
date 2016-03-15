define(['jquery'], function($) {

	//全选插件
	//checkall_name   操作全选的复选框name
	//checkbox_name   被操作的复选框的name  name值可不统一 设置包含值 以XXX开头 自己修改

	$.check = function(options) {
		var defaults = {
				checkall_name: "checkall_name", //全选框name
				checkbox_name: "checkbox_name" //被操作的复选框name
			},
			options = $.extend(defaults, options),
			e = $("input[name='" + options.checkall_name + "']"), //全选
			f = $("input[name='" + options.checkbox_name + "']"), //单选
			g = f.length; //被操作的复选框数量

		f.click(function() {
			var checkedSize = $("input[name ='" + options.checkbox_name + "']:checked").length, //选中的checkbox
				allSize = $("input[name='" + options.checkbox_name + "']").length; //全部checkbox

			if (checkedSize == allSize) {
				e.prop("checked", !0);
			} else {
				e.prop("checked", !1);
			}
		});

		e.click(function() {
			for (i = 0; g > i; i++) f[i].checked = this.checked;
		});
	};
})
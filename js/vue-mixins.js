define(['Vue'], function(Vue) {
	var select2Mixin = {
		created: function() {
			var newArr = [];
			this.originData.forEach(function(element) {
				newArr.push(Object.assign({}, element, {
					isForbid: false
				}));
			});

			this.resultData = newArr;
		},
		ready: function() {
			var self = this;

			$(window).on('click', function(event) {
				event.stopPropagation();
				if (!self.select2IsHide) {
					self.select2IsHide = true;
				}
			});
		},
		computed: {
			select2SearchResult: function() {
				var self = this,
					newArr = [],
					text = this.select2SearchText.trim().toLowerCase();

				if (this.resultData.length !== 0) {
					this.resultData.forEach(function(element, index) {

						if (!element.isForbid) {
							if (text) {
								var str = element['text'].toLowerCase();
								if (str.indexOf(text) !== -1) {
									newArr.push(element);
								}
							} else {
								newArr.push(element)
							}
						}
					});
				}
				return newArr;
			}
		},
		remove2SelectList: function(index) {
			var originIndex = this.select2List[index].index;
			this.resultData[originIndex].isForbid = false;
			this.select2List.splice(index, 1);
		}
	}
	return {
		select2Mixin : select2Mixin
	}
})
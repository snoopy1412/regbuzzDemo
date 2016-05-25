const select2Mixin = {
	props: {
		dataUrl: {
			type: String,
			require: true
		},
		hiddenName: {
			type: String
		}
	},
	data() {
		return {
			originData: [],
			select2IsHide: false,
			select2SearchText: '',
			resultData: [],
			select2SearchResult: [],
			select2List: []
		}
	},
	created: function() {
		var self = this;
		$.ajax({
			type: 'GET',
			url: self.dataUrl,
			success: function(data) {
				var data = data.data;
				self.originData = data;

				self.originData.forEach(function(element) {
					self.resultData.push(Object.assign({}, element, {
						isForbid: false
					}));
				});
			},
			error: function(state) {
				console.log('数据加载失败')
			}
		})
	},
	ready: function() {
		var self = this;

		$(window).on('click', function(event) {
			event.stopPropagation();
			if (self.select2IsHide) {
				self.select2IsHide = false;
				self.select2SearchText = '';
			}
		});
	},
	computed: {
		choiceIds: function() {
			var array = this.select2List,
				ids = [];
			for (var i = 0; i < array.length; i++) {
				ids.push(array[i].id)
			}
			return ids;
		},
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
	methods: {
		remove2SelectList: function(index) {
			var originIndex = this.select2List[index].index;
			this.resultData[originIndex].isForbid = false;
			this.select2List.splice(index, 1);
		},
	}
}

export default select2Mixin;
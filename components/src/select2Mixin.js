const select2Mixin = {
	props: {
		originData: {
			type: Array,
			require: true
		}
	},
	data() {
		return {
			select2IsHide: false,
			select2SearchText: '',
			resultData: [],
			select2SearchResult: [],
			select2List: []
		}
	},
	created: function() {
		var self = this;
		this.originData.forEach(function(element) {
			self.resultData.push(Object.assign({}, element, {
				isForbid: false
			}));
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

	methods: {
		remove2SelectList: function(index) {
			var originIndex = this.select2List[index].index;
			this.resultData[originIndex].isForbid = false;
			this.select2List.splice(index, 1);
		},
	}
}

export default select2Mixin;
define(['Vue', 'VueComponent'], function(Vue, VueComponent) {
	var wordcount = VueComponent.wordcount;

	// open-waiting-add
	new Vue({
		el: '#open-waiting-add',
		components: {
			wordcount: wordcount
		},
		data: {
			totalCount: 1000,
			colsNum: 100,
			wordsCountId: 'js_111_content'
		}
	})

	// work-refund
	new Vue({
		el: '#work-refund',
		components: {
			wordcount: wordcount
		},
		data: {
			totalCount: 1000,
			colsNum: 100,
			wordsCountId: 'work-refund-reason_add'
		}
	})

	// work-payed-reviews
	new Vue({
		el: '#work-payed-reviews',
		components: {
			wordcount: wordcount
		},
		data: {
			totalCount: 1000,
			colsNum: 100,
			wordsCountId: 'js_351-content'
		}
	})

	// past-success-comment
	new Vue({
		el: '#past-success-comment',
		components: {
			wordcount: wordcount
		},
		data: {
			totalCount: 1000,
			colsNum: 100,
			wordsCountId: 'js_411-content'
		}
	})

	// past-success-comment
	new Vue({
		el: '#past-dispute',
		components: {
			wordcount: wordcount
		},
		data: {
			totalCount: 1000,
			colsNum: 100,
			wordsCountId: 'js_dispute-description-4'
		}
	})

})
define(['Vue','../data/languages.js','../data/linkage.js'],function(Vue){

	// 项目发布
	var pubVm = new Vue({
		el:"#vue-pubController",
		data:{
			// 两级联动
			// selected:'Please select...',
			selectedBudget:'',
			customBudget:false,
			// lists:[
			// 	{
			// 		text:'Please select...',
			// 		subset:[
			// 			{
			// 				text : 'Please select...'
			// 			}
			// 		]
			// 	},
			// 	{
			// 		text:'Chemicals',
			// 		subset:[
			// 			{
			// 				text : 'SDS/MSDS and labelling'
			// 			},
			// 			{
			// 				text : 'Chemical Notification'
			// 			},
			// 			{
			// 				text : 'Chemical Registration'
			// 			},
			// 			{
			// 				text : 'Others'
			// 			}
			// 		]
			// 	}
			// ],

			// 输入数字
			totalWords : 20,
			textareaCount : '',
			isOvermax : false,

			// 数据提示
			searchLanguge : '',
			languagesData : languagesData,
			languagesResult : [],
			languagelist: [],
			maxlanguage: 3,
			isShow: false,
			promptMessage: false,
			isError : false,
		},

		computed : {

			// 两级联动
			selection : function(){
				for (var i = 0; i < this.lists.length; i++) {
	                if (this.lists[i].text === this.selected) {
	                    return this.lists[i].subset;
	                }
            	}
			},
			customBudget:function(){
				if(this.selectedBudget === 'custom'){
					return true
				}else{
					return false
				}
			},

			// 输入数字
			currentWords : function(){
				return this.textareaCount.length;
			},
			isOvermax : function(){
				return this.currentWords > this.totalWords ? true : false;
			},


		},
		ready: function(){
			var self = this;			 
			 window.addEventListener('click',function(event){
			 	if(self.isShow){
			 		self.isShow = false;
			 		self.searchLanguge = '';
			 	}
			 },false);
		},


		created : function(){
			this.selectedData = linkageData;
		},
		methods : {

			// 数据提示 也可引入ajax
			search : function(){

				var size = this.languagelist.length;
				if(size >= this.maxlanguage){
					if(this.searchLanguge.trim() !== ''){
						this.isError = true;
					}else{
						this.isError = false;
					}
					return false;
				}else{
					this.isError = false;
				}

				this.languagesResult = [];

				var self = this,
					text = this.searchLanguge.trim().toLowerCase();
				
				if(text){
					this.isShow = true;
					this.languagesData.forEach(function(element,index){
						var str = element['en'].toLowerCase();

						if( str.indexOf(text) !== -1 ){
						    var newStr =  str.replace(new RegExp('('+text+')', 'gi'), '<strong>$1</strong>');
						    self.languagesResult.push({
						    	origin : element['en'],
						    	show : newStr
						    })
						}
					});
					this.promptMessage = this.languagesResult.length > 0 ? false : true;
				}else{
					this.isShow = false;
				}
			},
			addInLanguageList : function(data){
				var size = this.languagelist.length;
				if(size == this.maxlanguage){
					return false;
				}
				this.languagelist.push(data);
				this.searchLanguge = '';
				this.isShow = false;
			},
			remove : function(index){
				this.languagelist.splice(index,1);
				this.searchLanguge = '';
				var size = this.languagelist.length;
				if(size <= this.maxlanguage){
					this.isError = false;
				}
			}
		}
		
	})


})

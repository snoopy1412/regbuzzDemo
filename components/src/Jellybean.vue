<template>
	<div class="jellybean" :class="{'error':isError}">
		<ul class='jellybean-container clearfix'>
			<li class="jellybean-container-item" v-for='item in jellybeanList' track-by="$index">
				<span class="jellybean-suggest-show">
					<span class="value" v-text='item'></span>
					<button type="button" class="remove" @click='remove($index)'>×</button>
				</span>
			</li>
			<li class="jellybean-container-item">
				<span class="jellybean-suggest-input">
					<input type="text" class="jellybean-input" :placeholder="placeholder" v-model='searchText' @keyup='search | debounce 500'>
					<ul class='jellybean-result' :class="{'show':isShow}">
						<li v-for='item in searchResult | filterBy searchText'>
							<a href="javascript:;" class="jellybean-result-link" v-html='item.show | capitalize' @click='addInjellybeanList(item.origin)'></a>
						</li>
						<li v-if='promptMessage'>
							<a href='javascript:;' class='jellybean-result-link text-center' v-text='msgCustom'>
							</a>
						</li>
					</ul>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
	props : {
		jellybeanData : {
			type : Array,
			require : true
		},
		jellybeanMax: {
			type : Number
		},
		placeholder : {
			type : String
		},
		msgCustom : {
			type : String
		}
	},
	data() {
		return {				
			// 数据提示
			searchText : '',
			searchResult : [],
			jellybeanList: [],
			isShow: false,
			promptMessage: false,
			isError : false,
			}
		},	
	ready: function(){
			console.log(this.msgCustom)
			var self = this;	

			// 标准浏览器		  
			 window.addEventListener('click',function(event){
			 	if(self.isShow){
			 		self.isShow = false;
			 		self.searchText = '';
			 	}
			 },false);
		},
		methods : {

			// 数据提示 也可引入ajax
			search : function(){

				var size = this.jellybeanList.length;

				if(this.jellybeanMax){

					if(size >= this.jellybeanMax){
						if(this.searchText.trim() !== ''){
							this.isError = true;
						}else{
							this.isError = false;
						}
						return false;
					}else{
						this.isError = false;
					}
				}
				
				this.searchResult = [];

				var self = this,
					text = this.searchText.trim().toLowerCase();
				
				if(text){
					this.isShow = true;
					this.jellybeanData.forEach(function(element,index){
						var str = element.toLowerCase();

						if( str.indexOf(text) !== -1 ){
						    var newStr =  str.replace(new RegExp('('+text+')', 'gi'), '<strong>$1</strong>');
						    self.searchResult.push({
						    	origin : element,
						    	show : newStr
						    })
						}
					});
					this.promptMessage = this.searchResult.length > 0 ? false : true;
				}else{
					this.isShow = false;
				}
			},
			addInjellybeanList : function(data){
				var size = this.jellybeanList.length;

				if(this.jellybeanMax){
					if(size == this.jellybeanMax){
						return false;
					}
				}
				
				this.jellybeanList.push(data);
				this.searchText = '';
				this.isShow = false;
			},
			remove : function(index){
				this.jellybeanList.splice(index,1);
				this.searchText = '';
				var size = this.jellybeanList.length;

				if(this.jellybeanMax){
					if(size <= this.jellybeanMax){
						this.isError = false;
					}
				}
			}
		}
	}
</script>

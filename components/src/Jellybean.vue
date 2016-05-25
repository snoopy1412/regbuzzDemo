<template>
	<div class="jellybean" :class="{'error':jellybeanMaxError}">
		<ul class='jellybean-container clearfix'>
			<li class="jellybean-container-item" v-for='item in select2List' track-by="$index">
				<span class="jellybean-suggest-show">
					<span class="value" v-text='item.text'></span>
					<button type="button" class="remove" @click='remove2SelectList($index)'>×</button>
				</span>
			</li>
			<li class="jellybean-container-item">
				<span class="jellybean-suggest-input">
					<input type="text" class="jellybean-input" :placeholder="placeholder" v-model='select2SearchText' debounce="500" @click.stop>					
					<ul class='jellybean-result' :class="{'show':select2IsHide}" v-cloak>					
						<li v-for='item in select2SearchResult' track-by="$index" v-if='!promptMessage'>
							<a href="javascript:;" :title="item.text" class="jellybean-result-link" v-html='item.text | highlight select2SearchText' @click='Add2Select2List(item.text)'>
							</a>
						</li>		
						<li v-if='promptMessage'>
							<span class='jellybean-result-link jellybean-result-error text-center' v-text='msgCustom'>
							</span>
						</li>
					</ul>
				</span>
			</li>
		</ul>
		<!-- 隐藏域，上传选中的语言的id -->
		<input type="hidden" name="{{hiddenName}}" value="{{choiceIds}}">
	</div>
</template>

<script>
	import Select2Mixin from './select2Mixin.js';
	
	export default {
	mixins: [Select2Mixin],
	props : {
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
			  jellybeanMaxError : false
			}
		},	
		computed : {
			select2IsHide : function(){
				if(!this.jellybeanMaxError){
					return this.select2SearchText.trim() !== '' ? true : false;
				}else{
					return false;
				}	
			},
			jellybeanMaxError : function(){
				var size = this.select2List.length;
				if(this.jellybeanMax){
					if(size >= this.jellybeanMax && this.select2SearchText.trim()!== ''){
						return true;
					}
				}
				return false;
			},
			promptMessage : function(){
				return this.select2SearchResult.length === 0 ? true : false;
			}
		},
		methods : {		
			Add2Select2List: function(str) {
				if(this.jellybeanMaxError){
					return false;
				}
				var self = this,
					newArr = [];

				this.resultData.forEach(function(element, index) {
					newArr.push(element.text);
				});
				var isIndex = $.inArray(str, newArr);
				if (isIndex !== -1) {
					this.select2List.push({
						text: self.resultData[isIndex].text,
						local: self.resultData[isIndex].local,
						id:self.resultData[isIndex].id,
						index: isIndex
					});

					this.resultData[isIndex].isForbid = true;

				}
				this.select2SearchText = '';
			}
		}		
	}

</script>

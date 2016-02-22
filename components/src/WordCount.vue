<template>
	<div class='words-count'>
		<textarea class='form-control words-input' rows="5" v-model='inputText'></textarea>
		<div class='words-count-area'>
			<span class='current-words' :class="{'overmax':isOverMax}" v-text='currentCount'></span> / <span class='total-words' v-text='totalCount'></span>
		</div>
	</div>
</template>

<script>
	export default {
		props : {	
			totalCount: {
				type : Number,
				default : 20
			},
			inputText : {
				default : '',
			}
		},
		data(){
			return {
				isOverMax : false
			}
		},
		computed : {
			currentCount : function(){
				return this.inputText.length;
			},
			isOverMax : function(){
				return this.currentCount > this.totalCount ? true : false;
			}
		}
	}
</script>

<style lang='sass'>
.words-count{
	
	position: relative;
	
	.word-input{
		left: 0;
		top: 0;
	}
	
	.words-count-area{
		position: absolute;
		z-index: 100;
		right: 20px;
		bottom: 10px;
		color:#808080;
		color:rgba(#808080,0.8);
		font-style: italic;
		font-weight: 600;
	}
	
	.current-words.overmax{
		color:rgba(#db2828,0.8);
	}
}
</style>
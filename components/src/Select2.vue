<template>
	<div id="select2">
		<div class="select2">
			<a href="javascript:;" title="select" class='select2-choice' @click.stop='select2IsHide = !select2IsHide'>
				Any Location
				<i class="fa" :class="{'fa-angle-down':!select2IsHide,'fa-angle-up':select2IsHide}"></i>
			</a>
			<div class='select2-drop' :class="{'select2-drop-hide':!select2IsHide , 'select2-drop-show':select2IsHide}" v-cloak>
				<div class='select2-search'>
					<input type="text" name="" value="" placeholder="" class='form-control' v-model='select2SearchText' @click.stop>
				</div>
				<ul class='select2-content'>
					<li v-for='country in select2SearchResult' track-by="$index">
						<a href="javascript:;" :title="country.text" v-html='country.text | highlight select2SearchText' @click='Add2Select2List(country.text)'>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<ul class='checkbox-list'>		
			<li class="checkbox" v-for='item in select2List' v-cloak>
	        	<label class="c-input c-checkbox" data-toggle="tooltip" data-placement="right" title="{{item.text}}" for="{{item.short}}" @mouseup='remove2SelectList($index)'>
				  <input type="checkbox" id='{{item.short}}' value='{{item.text}}' v-model='select2CheckedNames'>
				  <span class="c-indicator"></span>
				  <span v-text='item.text'></span>
				</label>
			</li>
		</ul>
	</div> 								
</template>

<script>
 import Select2Mixin from './select2Mixin.js';
 export default {
   mixins: [Select2Mixin],
   data() {
     return {
       select2CheckedNames: []
     }
   },
   methods: {
     Add2Select2List: function(str) {
       var self = this,
         newArr = [];

       this.resultData.forEach(function(element, index) {
         newArr.push(element.text);
       });

       var isIndex = $.inArray(str, newArr);

       if (isIndex !== -1) {
         this.select2CheckedNames.push(self.resultData[isIndex].text);
         this.select2List.push({
           text: self.resultData[isIndex].text,
           short: self.resultData[isIndex].short,
           index: isIndex
         });
         this.resultData[isIndex].isForbid = true;
       }
       this.select2SearchText = '';
     }
   }
 }
</script>
<template>
	<div class="row row--no-padding">
		<div class="col-md-6">
			<select class='form-control' v-model='initSelect'>
				<option v-for='linkage in linkageData' v-bind:value='linkage.firstData' v-text='linkage.firstData'></option>
			</select>
		</div>
		<div class="col-md-6">
			<select class='form-control'>
				<option v-for='secondSy in selection' v-bind:value='secondSy.text' v-text='secondSy.text'></option>
			</select>
		</div>
	</div>
</template>

<script>
	export default{
		props : {
			initSelect : {
				type : String,
				default : 'Please select...'
			},
			dataUrl:{
				type:String,
				require:true
			}
		},
		data() {
			return {
				linkageData:[]
			}
		},
		ready:function(){
			var self = this;
			$.ajax({
				type: 'GET',
				url: self.dataUrl,
				success: function(data) {
					var data = data.data;
					self.linkageData = data;
				},
				error: function(state) {
					console.log('数据加载失败')
				}
			})
		},
		computed : {

			// 两级联动
			selection() {
				if(this.linkageData.length){
					for (var i = 0; i < this.linkageData.length; i++) {
		                if (this.linkageData[i].firstData === this.initSelect) {
		                    return this.linkageData[i].secondData;
		                }
	            	}
				}				
			}
		}
	}
</script>
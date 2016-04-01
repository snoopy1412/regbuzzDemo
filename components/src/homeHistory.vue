<template>
	<div class="home-history text-right">
		<div class="btn-group" data-toggle="buttons" id='change-role'>
	  		<label v-for='role in historyRoles' class="btn btn-secondary" :class="{'active':$index === autoindex}" @click='changeView($index)' v-text="role.name | capitalize">
		    	<input type="radio" name="options" :value='role.name' >
		  	</label>
		 </div>
		  <div class="history-content tab-content">
		  	<div v-for='role in historyRoles' transition="fadeIn" class='view' :class="{'active':$index === autoindex}">
				<ul class='history-content-item history-content-employer'>
					<li>
						<span class='pull-left'  v-text="role.context.project.title"></span> <span class='pull-right right' v-text="role.context.project.num"></span>
					</li>
					<li>
						<span class='pull-left' v-text="role.context.question.title"></span> <span class='pull-right right' v-text="role.context.question.num"></span>
					</li>
				</ul>
			</div>	
		</div>
	</div>
</template>
<script>
	export default {
		props : {
			historyRoles : {
				type : Array,
				require : true 
			}
		},
		data(){
			return {
				autoindex : 0
			}
		},
		methods : {
			changeView:function(index){
				this.autoindex = index;
			}
		}
	}
</script>
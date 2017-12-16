<style lang="stylus">
.switch-page {
	margin 100px;
}	
</style>

<template>
	<div class="switch-page" v-title data-title="switch">
		<x-switch 
			@change="handleChange" 
			:disabled="false" 
			value="0" 
			width="60"
			activeColor="#13ce66" 
			inactiveColor="#ff4949"
		></x-switch>
	</div>
</template>

<script>
export default {
	methods: {
		handleChange (val) {
			console.log(val)
		}
	}
}
</script>

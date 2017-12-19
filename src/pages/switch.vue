<style lang="stylus">
@import '../stylus/_common.styl';
.switch-page {
	.x-switch {
		margin-top: -7px;
	}
}
</style>

<template>
	<div class="switch-page" v-title data-title="switch">
		<ul class='x-list'>
      <li>
        <label>默认switch，值：{{val1}}</label>
    		<div><x-switch v-model="val1"></x-switch></div>
      </li>
      <li>
        <label>设置宽高，默认选中，值：{{val2}}</label>
    		<div><x-switch @change="handleChange" v-model="val2" width="50" height="30"></x-switch></div>
      </li>
      <li>
        <label>禁止点击，值：{{val3}}</label>
    		<div><x-switch :disabled="true"></x-switch></div>
      </li>
      <li>
        <label>禁止点击，值：{{val4}}</label>
    		<div><x-switch :disabled="true" v-model="val4"></x-switch></div>
      </li>
    </ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			val1: true,
			val2: false,
			val3: false,
			val4: true,
		}
	},
	methods: {
		handleChange (val, oldVal) {
			console.log('val:'+val, 'oldVal:'+oldVal)
		}
	}
}
</script>

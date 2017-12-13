<style scoped>
  .x-search-list {
    width: 100%;
    min-height: 100%;
    text-align: left;
    position: absolute;
    left: 0;
    top: 30px;
    z-index: 9;
  }
	.x-search-list li {
		padding: 20px 15px;
		border-bottom: 1px solid #f2f2f2;
	}
</style>

<template>
	<ul class="x-search-list">
    <li v-for="(item, index) in result" :key="index" @click="listSearch(index)">
  		<slot name="list-item" :slotValue="item">{{item}}</slot>
	  </li>
  </ul>
</template>

<script>
import Emitter from '../../js/emitter.js';
export default {
	name: 'x-search-list',
  mixins: [Emitter],
	props: {
		result: Array
	},
	data () {
		return {
      visible: false
		}
	},
	methods: {
		listSearch (index) {
			this.visible = false
			this.dispatch('x-search', 'clear');
			this.$emit('listSearch', index)
		}
	}
}
</script>
<style lang="stylus" scoped>
	.x-switch {
    position: relative;
    border: 1px solid;
	}
	.x-switch.disabled {
		opacity: 0.6;
	}
  .x-switch .x-switch_button {
    width: calc(50% - 3px);
    height: calc(100% - 2px);
    position: absolute;
    left: 1px;
    top: 1px;
    border-radius: 100%;
    transition: 0.3s;
    background: #fff;
  }
</style>

<template>
	<div :class="['x-switch', {'disabled': disabled}]" @click="handleChange" :style="{ background: bgColor, 'border-color': bgColor, width: width+'px', height: height, 'border-radius': radius }">
		<span class="x-switch_button" :style="{ transform }"></span>
	</div>
</template>

<script>
export default {
	name: 'XSwitch',
	props: {
		width: {
			type: [Number, String],
			default: 60
		},
		disabled: {
			type: Boolean,
			default: false
		},
		value: {
			type: [Boolean, Number, String],
			default: false
		},
		activeColor: {
      type: String,
      default: '#ff6f5c'
    },
    inactiveColor: {
      type: String,
      default: '#999'
    },
	},
	data () {
		return {
			inactiveValue: true
		}
	},
	computed: {
		height () {
			return ~~this.width/2 + 'px'
		},
		radius () {
			return ~~this.width/4 + 'px'
		},
    checked () {
    	return  ~~this.value === ~~this.inactiveValue
    },
    transform() {
      return this.checked ? `translate3d(${ ~~this.width/2 }px, 0, 0)` : '';
    },
    bgColor () {
    	return this.checked ? this.activeColor : this.inactiveColor;
    },
  },
	methods: {
		handleChange () {
			if (this.disabled) return
			this.inactiveValue = !this.inactiveValue
			this.$emit('change', this.checked)
		}
	},
	created () {
		this.$emit('change', this.checked)
	}
}
</script>

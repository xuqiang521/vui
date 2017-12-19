<style lang="stylus" scoped>
	.x-switch {
    display: block;
    position: relative;
    transition: border-color 0.3s, background-color 0.3s;
	}
  .x-switch > input {
    width: 0;
    height: 0;
    display: none;
  }
  .x-switch .x-switch_scale {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    background-color: #FDFDFD;
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.45, 1, 0.4, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.3s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.3s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.3s cubic-bezier(0.45, 1, 0.4, 1);
  }
  .x-switch.checked .x-switch_scale {
    transform: scale(0)
  }
  .x-switch .x-switch_button {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    transition: 0.3s;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }
	.x-switch.disabled {
		opacity: 0.6;
	}
  .x-switch.active {
    border: 1px solid #ff6f5c;
    background: #ff6f5c;
  }
  .x-switch.inactive {
    border: 1px solid #DFDFDF;
    background: #FDFDFD;
  }
</style>

<template>
	<label
    :class="['x-switch', {'disabled': disabled}, currentVal?['checked', activeClass]:inactiveClass]"
    :style="{
      width: width+'px',
      height: pheight+'px',
      borderRadius: radius
    }"
  >
    <input type="checkbox" v-model="currentVal" @change="$emit('change', !currentVal, currentVal)" :disabled="disabled">
    <p :class="['x-switch_scale']"></p>
		<span class="x-switch_button" :style="{ transform, width: cwidth+'px' }"></span>
	</label>
</template>

<script>
export default {
	name: 'XSwitch',
	props: {
		width: {
			type: [Number, String],
			default: 60
		},
    height: [Number, String],
    activeClass: {
      type: String,
      default: 'active'
    },
    inactiveClass: {
      type: String,
      default: 'inactive'
    },
		disabled: {
			type: Boolean,
			default: false
		},
		value: {
			type: [Boolean, Number, String],
			default: false
		}
	},
	computed: {
		pheight () {
      if (!this.height) {
        return ~~this.width/2
      } else {
        return ~~this.height
      }
		},
    cwidth () {
      return this.pheight - 2
    },
		radius () {
			return ~~this.pheight + 'px'
		},
    transform() {
      return this.currentVal ? `translate3d(${ ~~this.width - ~~this.pheight }px, 0, 0)` : '';
    },
    bgColor () {
    	return this.currentVal ? this.activeColor : this.inactiveColor;
    },
    currentVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

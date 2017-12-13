
<style scoped>
  .x-search {
    width: 100%;
    height: 30px;
    display: inline-block;
    text-align: center;
    position: relative;
    box-sizing: border-box;
  }
  .x-search form {
    position: relative;
  }
  .x-search input {
    width: 100%;
    height: 30px;
    padding-left: 32px;
    border: 1px solid #DCDCDC;
    border-radius: 15px;
    font-size: 14px;
  }
  .x-search .icon {
    width: 14px;
    height: 14px;
  }
  .x-search .icon img {
    width: 100%;
  }
  .x-search .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%)
  }
  .x-search .close-icon{
    position :absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%)
  }
</style>
<template>
  <div class="x-search" :style="styles" :clear="clear">
    <form action="#" onsubmit="return false;">
      <input type="search"
        ref="input"
        class="x-search-input"
        v-model='model'
        :placeholder="placeholder"
        @keyup="searchKeyupFn"
        @click="searchFocusFn"
        @keyup.enter="searchEnterFn"
        @blur="searchBlurFn"
      />
      <div class="icon search-icon">
        <img src="../../assets/search.png" alt="">
      </div>
      <div class="icon close-icon" v-show="showClose" @click="closeFn">
        <img src="../../assets/close.png" alt="">
      </div>
    </form>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'x-search',
  componentName: 'x-search',
  props: {
    // 搜索节流时长
    timeout: {
      type: Number,
      default: 100
    },
    async: {
      type: Boolean,
      default: true
    },
    styles: Object,
    placeholder: {
      type: String,
      default: '搜索'
    },
    clear: {
      type: Boolean,
      default: false
    },
    autofocus: Boolean, // iOS移动端autofocus无效
  },
  data() {
    return {
      id: null,
      timer: null,
      showClose: false,
      searchFlag: true, // 搜索节流
      model: ''
    };
  },
  watch: {
    model (val) {
      if (val) {
        this.showClose = true;
      } else {
        this.showClose = false;
      }
      if (this.searchFlag) {
        this.$emit('search', this.model)
      }
    }
  },
  created () {
    this.$on('clear', () => {
      this.model = '';
    });
  },
  methods: {
    searchKeyupFn() {
      let self = this;
      this.searchFlag = false;

      if (!this.async) {
        this.searchFlag = true;
        return
      }

      clearTimeout(this.timer)
      this.timer = setTimeout(function() {
        self.searchFlag = true
      }, this.timeout)
    },
    searchEnterFn (e) {
      this.$emit('enter', this.model)
      this.$refs.input.blur()
      if (this.clear) {
        this.model = '';
      }
    },
    searchBlurFn () {
      // do something for blur
    },
    closeFn () {
      this.model = '';
      this.showClose = false;
      this.$emit('close', this.model)
    },
    searchFocusFn () {
      this.$emit('focus')
    }
  },
  mounted () {
    this.autofocus && this.$refs.input.focus();
  }
};
</script>

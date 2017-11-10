
<style lang="stylus" scoped>
  textarea::-webkit-input-placeholder, input::-webkit-input-placeholder { /* WebKit browsers */
      color: #CCC;
  }
  textarea:-moz-placeholder ,input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
     color: #CCC;
     opacity:  1;
  }
  textarea::-moz-placeholder, input::-moz-placeholder { /* Mozilla Firefox 19+ */
     color: #CCC;
     opacity:  1;
  }
  textarea:-ms-input-placeholder, input:-ms-input-placeholder { /* Internet Explorer 10+ */
     color: #CCC;
  }
  input[type=search], input[type=tel], input[type=text], input {
    -webkit-appearance: none;  /*去除系统默认的样式*/
    -webkit-box-sizing: content-box;
    font-family: inherit;
    font-size: 100%;
    box-sizing: border-box;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none;
  }
  .y-search{
    width: 100%;
    height: 42px;
    display: inline-block;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    input {
      width: 100%;
      height: 30px;
      padding-left: 32px;
      border: 1px solid #DCDCDC;
      border-radius: 15px;
      font-size: 14px;
    }
    .icon {
      width: 14px;
      height: 14px;
      img {
        width: 100%;
      }
    }
    .search-icon {
      position absolute
      left: 15px;
      top: 6px;
    }
    .close-icon{
      position :absolute;
      right: 15px;
      top: 6px;
    }
  }
</style>
<template>
  <div class="y-search" :style="styles" :clear="clear">
    <form action="#" onsubmit="return false;">
      <input type="search"
        class="y-search-input"
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
  </div>
</template>
<script>
export default {
  name: 'ySearch',
  componentName: 'ySearch',
  props: {
    // 搜索节流时长
    searchDelay: {
      type: Number,
      default: 100
    },
    styles: Object,
    placeholder: String,
    clear: {
      type: Boolean,
      default: false
    }
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
    },
  },
  created () {
    this.$on('clear', () => {
      this.model = '';
    });
  },
  methods: {
    disabled () {
      return false
    },
    searchKeyupFn() {
      let self = this;
      this.searchFlag = false;

      clearTimeout(this.timer)
      this.timer = setTimeout(function() {
        self.searchFlag = true
      }, this.searchDelay)
    },
    searchEnterFn (e) {
      this.$emit('enter', this.model)
      document.getElementsByClassName('y-search-input')[0].blur()
      if (this.clear) {
        this.model = '';
      }
    },
    searchBlurFn () {

    },
    closeFn() {
      this.model = '';
      this.showClose = false;
      this.$emit('close', this.model)
    },
    searchFocusFn () {
      this.$emit('focus')
    }
  }
};
</script>

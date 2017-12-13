
<style scoped>
  .x-select {
    display: block;
    float: left;
    height: 42px;
  }
  .x-select .select-list {
    display: block;
    overflow: hidden;
    height: 42px;
    padding: 11px 0;
  }
  .x-select .select-list .select-item {
    display: block;
    float: left;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    position: relative;
  }
  .x-select .select-list .select-item .drop-title {
    display: inline-block;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }
  .x-select .select-list .select-item .select-arrow-icon {
    display: inline-block;
    width: 8px;
    border-width: 5px;
    border-style: solid;
    vertical-align: middle;
    position: relative;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    margin-top: 2px;
    margin-left: 5px;
    margin-right: 3px;
  }
  .x-select .select-list .select-item .select-arrow {
    display: inline-block;
    bottom: -36px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    width: 14px;
  }
  .select-a-line, .select-a-bg {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 7px;
    border-style: solid;
    border-bottom-color: #f2f2f2;
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    font-size: 0;
    line-height: 0;
    vertical-align: top;
  }
  .select-a-bg {
    position: relative;
    margin-top: -19px;
    border-bottom-color: #fff;
  }
  .x-select .select-list .select-item-on {
    color: #ff6f5c;
  }
  .x-select .select-list .select-item-on .select-arrow-icon {
    border-top-color: transparent;
    border-bottom-color: #ff6f5c;
    color: #ff6f5c;
    margin-top: -7px;
    margin-right: 3px;
  }
  .x-select .select-content {
    display: block;
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    z-index: 100;

  }
  .x-select .select-content .select-item {
    display: block;
    height: 55px;
    line-height: 55px;
    font-size: 14px;
    padding: 0 16px;
    position: relative;
    border-bottom: 1px solid #f2f2f2;
  }
  .x-select .select-content .select-item .select-icon {
    position: absolute;
    right: 16px;
    top: 0;
  }
  .select-item-on {
    color: #ff6f5c;
  }
  .x-select .select-layout {
    position: fixed;
    top: 42px;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
<template>
  <div class="x-select" v-clickoutside="hide" :style="{width: width}">
    <ul class="select-list">
      <li class="select-item" :class="{'select-item-on':selectStatus}" @click="selectDown()">
        <span class="drop-title" :style="{'max-width': ellipsisWidth}" v-if="title && showTitle">{{title}}</span>
        <span class="drop-title" :style="{'max-width': ellipsisWidth}" v-else>{{selectData[currentIndex].name || selectData[currentIndex]}}</span>
        <span class="select-arrow-icon"></span>
        <span class="select-arrow" v-show="selectStatus">
          <i class="select-a-line"></i>
          <em class="select-a-bg"></em>
        </span>
      </li>
    </ul>

    <ul class="select-content" v-show="selectStatus">
      <li class="select-item" v-for="(item, index) in selectData" :key="index"
        :class="{'select-item-on': selectClass(index)}"
        @click="selectSubDown(index, item.id)" >
        {{item.name || item}}
        <span class="select-icon" v-show="selectClass(index)">
        	选中
        </span>
      </li>
    </ul>
    <div class="select-layout" v-show="selectStatus" @click="hide"></div>
  </div>
</template>
<script>
import Clickoutside from "../../js/clickoutside";

export default {
  name: "XSelect",
  directives: { Clickoutside },
  props: {
    selectData: Array,
    title: String,
    alwaysShowTitle: Boolean,
    defaultValue: [Number, String],
    width: {
      type: String,
      default: '100%'
    },
    ellipsisWidth: {
      type: String,
      default: '120px'
    }
  },
  data() {
    return {
      selectStatus: false,
      currentIndex: 0,
      showTitle: true
    };
  },
  created () {
    this.currentIndex = ~~this.defaultValue
  },
  methods: {
    hide () {
      this.selectStatus = false;
    },
    selectDown() {
      this.selectStatus = !this.selectStatus;
    },
    selectClass(index) {
      return this.currentIndex === index;
    },
    selectSubDown(currentIndex, id) {
      this.alwaysShowTitle ? this.showTitle = true : this.showTitle = false;
      this.selectStatus = false;
      this.currentIndex = currentIndex;
      this.$emit("search", currentIndex, id);
    }
  }
};
</script>

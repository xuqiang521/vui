<template>
  <div class="x-modal x-mask-dialog" v-if="show">
    <div class="modal-content">
      <div class="wrap">
        <img :src="closeImgSrc" alt="" v-show='showCloseIcon' class="close" @click.stop="closeModal(false, onCancel)">
        <div class="title" v-show="title">
          {{ title }}
        </div>
        <div class="content" v-if="content" v-html="content"></div>
        <slot></slot>
      </div>
      <div :class="{'footer': true, 'fullWidth': !cancelText||!okText}">
        <div v-show='cancelText' class="cancel" @click.stop="closeModal(false, onCancel)">{{ cancelText }}</div>
        <div v-show='okText' class="ok" @click.stop='closeModal(false, onOk)'>{{ okText }}</div>
      </div>
    </div>
    <div class="x-mask-layout" @click.stop="closeModal(false)"></div>
  </div>
</template>

<script>
export default {
  name: 'x-modal',
  props: {
    show: Boolean,
    title: String,
    onOk: Function,
    content: String,
    // width: Number,
    // afterClose: Function,
    onCancel: Function,
    cancelText: String,
    okText: String,
    showCloseIcon: {
      type: Boolean,
      default: true
    },
    data: Object,
  },
  data() {
    return {
      closeImgSrc: require('assets/close.png'),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped >
.x-mask-dialog {
  background-color: rgba(0, 0, 0, .4);
  position: fixed;
  z-index: 999;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.x-modal {
  font-size: 14px;
  .x-mask-layout{
    background-color: rgba(0, 0, 0, 0.4);
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9;
    left: 0;
  }
  .modal-content {
    background: #FFF;
    border-radius: 6px;
    text-align :left;
    color: #333;
    width: 85%;
    animation: zoomIn .15s ease forwards;
    overflow: hidden;
    z-index: 10;
  }
  .close {
    width: 15px;
    height: 15px;
    float: right;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
  .wrap {
    padding-bottom: 20px;
    position: relative;
  }
  .title {
    padding: 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
  .content {
    padding: 0 15px;
    text-align: center;
  }
  .footer {
    overflow: hidden;
    width: 100%;
    border-top: 1px solid #F5F5F5;
    .cancel, .ok {
      float: left;
      width: 50%;
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      text-align: center;
      cursor: pointer;
      box-sizing: border-box;
    }
    .cancel {
      border-right: 1px solid #F5F5F5;
    }
    &.fullWidth{
      div{
        width: 100%;
      }
    }
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
}
</style>

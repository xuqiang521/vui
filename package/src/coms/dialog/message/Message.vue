<template>
  <div class='x-mask-dialog' v-show='show'>
    <div class='x-message  animated zoomIn' >
      <span v-html="msg"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-message',
  props: {
    msg: String,
    timeout: {
      type: Number,
      default: 2000
    },
    callback: Function,
    icon: String,
  },
  data() {
    return {
      show: true
    };
  },
  mounted () {
    // document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    setTimeout(() => {
      // 销毁组件
      this.$el.remove()
      // document.getElementsByTagName('html')[0].style.overflow = 'initial'
    }, this.timeout)
  }
};
</script>

<style lang="css" scoped>
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
.x-message {
  min-width: 145px;
  max-width: 275px;
  width: 100%;
  padding: 16px;
  font-size: 14px;
  text-align: center;
  border-radius: 4px;
  background: rgba(0,0,0,0.8);
  color: #fff;
  animation: zoomIn .15s ease forwards;
}
.animated {
  animation-fill-mode: both;
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

<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  beforeRouteUpdate(to, from, next) {
    // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
    const isBack = this.$router.isBack;
    if (isBack) {
      this.transitionName = 'slide-right';
    } else {
      this.transitionName = 'slide-left';
    }
    // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
    this.$router.isBack = false;
    next();
  },
  mounted () {
    // this.$dialog.msg({msg: 'hello message components ~'})
    // this.$dialog.modal({
    //   title: 'Demo Modal',
    //   cancelText: '取消',
    //   okText: '确定',
    //   content: '测试，测试，测试，测试，测试，测试，测试，测试，测试',
    //   onOk() {
    //     console.log('click ok btn to do someting');
    //   },
    //   onCancel() {
    //     console.log('click cancel btn to do someting');
    //   }
    // })
  }
};
</script>

<style>
@import 'stylus/_reset.styl';
@import 'stylus/_common.styl';
#app {
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #333;
}
.child-view {
  position: absolute;
  width: 100%;
  transition: all .8s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
 opacity: 0;
 -webkit-transform: translate(50px, 0);
 transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
 opacity: 0;
 -webkit-transform: translate(-50px, 0);
 transform: translate(-50px, 0);
}

</style>


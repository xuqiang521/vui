<style lang="stylus">
.dialog-page {
  width 100%
  position absolute
  top 50%
  left 0
  transform translateY(-50%)
  > p {
    width 80%
    height 50px
    line-height 50px
    margin 40px auto 0
    border 1px solid #CCC
    border-radius 10px
    font-size 16px
    font-weight bold
    letter-spacing 2px
    text-align center
    &:first-child {
      margin-top 0
    }
  }
}
</style>
<template>
  <div class="dialog-page">
    <p @click="message">message dialog</p>
    <p @click="modal">modal dialog</p>
  </div>
</template>

<script>
export default {
  methods: {
    message () {
      return this.$dialog.msg({msg: 'this is a message dialog'})
    },
    modal () {
      return this.$dialog.modal({
        title: 'Dialog Modal',
        cancelText: '取消',
        okText: '确定',
        content: '测试哦，测试哦，测试哦，测试哦，测试哦，测试哦，测试哦，测试哦，测试哦~~~',
        onOk() {
          console.log('click ok btn to do someting');
        },
        onCancel() {
          console.log('click cancel btn to do someting');
        }
      })
    }
  }
}
</script>

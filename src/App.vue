<template>
  <div id="app">
    <x-scroller></x-scroller>
    <x-dropdown></x-dropdown>
    <x-swiper></x-swiper>
    <x-search></x-search>
    <!-- <x-message msg="hello"></x-message> -->
  </div>
</template>

<script>
import XDropdown from './pages/dropdown'
import XSwiper from './pages/swiper'
import XScroller from './pages/scroller'
import XSearch from './pages/search'
export default {
  name: 'app',
  components: {
    XDropdown,
    XSwiper,
    XScroller,
    XSearch
  },
  mounted () {
    // this.$message({msg: 'hello message components ~'})
    this.$modal({
      title: 'Demo Modal',
      cancelText: '取消',
      okText: '确定',
      content: '测试，测试，测试，测试，测试，测试，测试，测试，测试',
      data: {
        hello: '',
      },
      onOk() {
        console.log('click ok btn to do someting');
      },
      onCancel() {
        console.log('click cancel btn to do someting');
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  margin-top: 20px;
}
.y-search {
  margin-top: 10px
}
</style>

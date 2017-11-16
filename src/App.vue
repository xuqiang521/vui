<template>
  <div id="app">
    <h4>scroller</h4>
    <x-scroller></x-scroller>
    <h4>dropdown</h4>
    <x-dropdown></x-dropdown>
    <h4>swiper</h4>
    <x-swiper></x-swiper>
    <h4>search</h4>
    <x-search></x-search>
    <h4>table</h4>
    <x-table></x-table>
    <!-- <x-message msg="hello"></x-message> -->
  </div>
</template>

<script>
import XDropdown from './pages/dropdown'
import XSwiper from './pages/swiper'
import XScroller from './pages/scroller'
import XSearch from './pages/search'
import XTable from './pages/table'
export default {
  name: 'app',
  components: {
    XDropdown,
    XSwiper,
    XScroller,
    XSearch,
    XTable
  },
  mounted () {
    // this.$dialog.msg({msg: 'hello message components ~'})
    this.$dialog.modal({
      title: 'Demo Modal',
      cancelText: '取消',
      okText: '确定',
      content: '测试，测试，测试，测试，测试，测试，测试，测试，测试',
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

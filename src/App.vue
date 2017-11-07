<template>
  <div id="app">
    <x-scroller></x-scroller>
    <x-dropdown></x-dropdown>
    <x-swiper></x-swiper>
  </div>
</template>

<script>
import XDropdown from './pages/dropdown'
import XSwiper from './pages/swiper'
import XScroller from './pages/scroller'
export default {
  name: 'app',
  components: {
    XDropdown,
    XSwiper,
    XScroller
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
</style>

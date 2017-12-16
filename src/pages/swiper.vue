<template>
  <div class="swiper-page" v-title data-title="swiper">
    <p>正常swiper</p>
    <x-swiper :items='items' :styles="{height: '200px'}" @change="changeHandle"></x-swiper>
    <p>缩略swiper</p>
    <x-swiper type='thum' :items='items' :styles="{height: '240px'}"></x-swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        require('assets/beauty_1.png'),
        require('assets/beauty_2.png'),
        require('assets/beauty_3.png'),
        require('assets/beauty_4.png'),
        require('assets/beauty_5.png')
      ],
    }
  },
  methods: {
    changeHandle (index) {
      console.log(index);
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-page {
  height auto
  text-align: center;
  p {
    margin: 10px 0;
  }
}
</style>

<template>
  <div class="swiper-page">
    <p>正常swiper</p>
    <y-swiper type='swiper' :items='items' :styles="{height: '180px'}"></y-swiper>
    <p>缩略swiper</p>
    <y-swiper type='swiper' :items='items' :type="'thum'" :styles="{height: '208px'}"></y-swiper>
  </div>
</template>

<script>
import YSwiper from 'components/swiper'

export default {
  data () {
    return {
      items: ['http://p.yujiangongyu.com/758aaf73-a35b-4e89-839e-b715ba6bee9d.jpg', 'https://pic.ziroom.com/house_images/g2/M00/53/27/v180x135_ChAFD1mQVAqANGJ4ACVWgRBv5E8984.JPG'],
    }
  },
  mounted () {

  },
  methods: {

  },
  components: {
    YSwiper
  }
}
</script>

<style lang="stylus" scoped>
.swiper-page {
  height auto
}
</style>

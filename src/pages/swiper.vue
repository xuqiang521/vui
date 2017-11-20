<template>
  <div class="swiper-page">
    <p>正常swiper</p>
    <x-swiper type='swiper' :items='items' :styles="{height: '180px'}"></x-swiper>
    <p>缩略swiper</p>
    <x-swiper type='swiper' :items='items' :type="'thum'" :styles="{height: '208px'}"></x-swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['http://p.yujiangongyu.com/758aaf73-a35b-4e89-839e-b715ba6bee9d.jpg', 'https://pic.ziroom.com/house_images/g2/M00/53/27/v180x135_ChAFD1mQVAqANGJ4ACVWgRBv5E8984.JPG'],
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

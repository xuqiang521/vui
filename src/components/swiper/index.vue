<template>
  <div class="y-swiper" :style="styles">
    <div class="y-default-swiper" @click="swiperClick">
      <y-swipe
        :auto="0"
        :defaultIndex="currentIndex"
        :showIndicators="showIndicators"
        @change="changeIndex"
      >
        <y-swipe-item v-for="(item, index) in items" :key="index" @click.native="urlJump(item.url)">
          <img :src="item.pic || item" alt="">
        </y-swipe-item>
      </y-swipe>
    </div>
    <div class="y-thum-fixed" v-if="type==='thum' && showThum" @click="swiperClose">
      <div class="y-thum-swiper">
        <y-swipe
          :auto="0"
          :defaultIndex="currentThumIndex"
          :showIndicators="showIndicators"
          @change="changeThumIndex"
        >
          <y-swipe-item v-for="(item, index) in items" :key="index" :scale="true">
            <img :src="item.pic || item" alt="">
          </y-swipe-item>
        </y-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import YSwipe from './swiper'
import YSwipeItem from './swiperItem'

export default {
  name: 'y-swiper',
  props: {
    type: {
      type: String,
      default: 'thum'
    },
    auto: {
      type: Number,
      default: 3000
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    auto: {
      type: Number,
      default: 0
    },
    styles: {
      type: Object,
      default: function () {
        return {}
      }
    },
    resetTitle: String
  },
  data () {
    return {
      currentIndex: 0,
      currentThumIndex: 0,
      showThum: false
    }
  },
  computed: {
    title () {
      return `${this.currentThumIndex+1}/${this.items.length}`
    }
  },
  methods: {
    swiperClick () {
      if (this.type === 'swiper') {
        return
      } else if (this.type === 'thum') {
        this.showThum = true
        this.currentThumIndex = this.currentIndex
      }
    },
    urlJump (url) {
      if (this.type === 'swiper' && url) {
        window.location.href = url
      }
    },
    swiperClose () {
      this.showThum = false
    },
    changeIndex (newIndex) {
      this.currentIndex = newIndex
    },
    changeThumIndex (newIndex) {
      this.currentThumIndex = newIndex
    }
  },
  components: {
    YSwipe,
    YSwipeItem
  }
}
</script>

<style lang="stylus" scoped>
.y-swiper {
  width 100%
  height 4rem
  position relative

  .y-default-swiper{
    width 100%
    height 100%
    img {
      width 100%
    }
  }

  .y-thum-fixed {
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    background #37373D
    z-index 999
    display: flex;
    align-items: center;
    justify-content: center;
    .y-thum-swiper {
      width 100%
      height 100%
      img{
        width :100%;
      }

      .current-page {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-size: 14px;
      }
    }
  }
}

@media (orientation: landscape) {
  .y-swiper .y-thum-fixed .y-thum-swiper img {
    width auto
    height 100%
    margin auto
  }
}
@media (min-width 568px) and (max-width 736px) and (orientation: landscape) {
  .y-swiper {
    height 6.5rem !important
  }
}
@media (min-width 768px) and (max-width 1023px) {
  .y-swiper {
    height 8rem !important
  }
}
@media (min-width 1024px) and (max-width 1365px) {
  .y-swiper {
    height 9rem !important
  }
}
@media (min-width 1366px) {
  .y-swiper {
    height 10rem !important
  }
}
</style>

<style scoped>
.scroller-page {
  height: 100%;
}
ul {
  padding: 20px 0
}
li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee; 
  text-align: center;
}
</style>

<template>
  <div class="scroller-page" v-title data-title="scroller">
    <x-scroller
      :on-refresh="refresh"
      :on-infinite="infinite"
      :noDataText="noDataText"
    >
      <ul>
        <li v-for="(list, index) in lists" :key="index">{{list}}</li>
      </ul>
    </x-scroller>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noDataText: '没有更多数据啦~',
      len: 6,
    }
  },
  computed: {
    lists () {
      let arr = []
      for (let i = 1; i < this.len + 1; i++) {
        arr.push('列表' + i)
      }
      return arr
    }
  },
  methods: {
    refresh (done) {
      setTimeout(() => {
        this.len = 6
      }, 1000)
      this.noDataText = ''
      console.log('refresh');
    },
    infinite (done) {
      setTimeout(() => {
        if (this.len >= 10) {
          done(true)
          return
        }
        this.len++
        this.noDataText = '没有更多数据啦~'
        done()
      }, 1000)
      console.log('infinite');
    }
  }
}
</script>
<style scoped>
.scroller-page {
  height: 100%;
}
ul {
  padding: 20px 0
}
li {
  width: 100%;
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #eee; 
  text-align: center;
}
</style>

<template>
  <div class="scroller-page">
    <x-scroller
      :on-refresh="refresh"
      :on-infinite="infinite"
      :noDataText="noDataText"
    >
      <ul>
        <li>数据1</li>
        <li>数据2</li>
        <li>数据3</li>
        <li>数据4</li>
        <li>数据5</li>
        <li>数据6</li>
        <li>数据7</li>
        <li>数据8</li>
        <li>数据9</li>
        <li>数据10</li>
        <li>数据11</li>
        <li>数据12</li>
      </ul>
    </x-scroller>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noDataText: '没有更多数据啦~'
    }
  },
  methods: {
    refresh (done) {
      setTimeout(done, 1000)
      this.noDataText = ''
      console.log('refresh');
    },
    infinite (done) {
      setTimeout(done, 1000, true)
      this.noDataText = '没有更多数据啦~'
      console.log('infinite');
    }
  }
}
</script>
<style lang="stylus">
.table {
  height: 100%;
  .table-content {
    top: 20px !important;
    padding: 0 15px;
  }
}
</style>
<template>
  <div class="table" v-title data-title="table">
    <x-scroller
      :on-refresh="refresh"
      :on-infinite="infinite"
      :noDataText="noDataText"
      class="table-content"
    >
      <x-table :tableData="items">
        <x-table-column prop="date" label="日期"></x-table-column>
        <x-table-column prop="own" label="本客房(度)"></x-table-column>
        <x-table-column prop="common" label="公共分摊(度)"></x-table-column>
        <x-table-column prop="total" label="合计(度)"></x-table-column>
      </x-table> 
    </x-scroller>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          date: '2017.11.01',
          own: 1.52,
          common: 0.13,
          total: 1.65
        },
        {
          date: '2017.11.02',
          own: 1.52,
          common: 0.13,
          total: 1.65
        },
        {
          date: '2017.11.03',
          own: 1.52,
          common: 0.13,
          total: 1.65
        }
      ],
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
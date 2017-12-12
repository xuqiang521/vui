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
        <x-table-column prop="list_1" label="LIST ONE"></x-table-column>
        <x-table-column prop="list_2" label="LIST TWO"></x-table-column>
        <x-table-column prop="list_3" label="LIST THREE"></x-table-column>
        <x-table-column prop="list_4" label="LIST FOUR"></x-table-column>
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
          list_1: '2017.12.09',
          list_2: '路人1',
          list_3: '爱过',
          list_4: '有'
        },
        {
          list_1: '2017.12.10',
          list_2: '路人2',
          list_3: '爱过',
          list_4: '有'
        },
        {
          list_1: '2017.12.11',
          list_2: '路人3',
          list_3: '爱过',
          list_4: '没有'
        },
        {
          list_1: '2017.12.12',
          list_2: '路人4',
          list_3: '爱过',
          list_4: '没有'
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
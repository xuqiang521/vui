<template>
  <x-table :tableData="items">
    <x-table-column prop="date" label="日期"></x-table-column>
    <x-table-column prop="own" label="本客房(度)"></x-table-column>
    <x-table-column prop="common" label="公共分摊(度)"></x-table-column>
    <x-table-column prop="total" label="合计(度)"></x-table-column>
  </x-table>
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
      ]
    }
  }
}
</script>
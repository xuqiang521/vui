<style lang="stylus">
.search-page {
  margin-top: 10px;
  padding: 0 10px;
}
</style>
<template>
  <div class="search-page" v-title data-title="search">
    <x-search 
      placeholder="请输入搜索关键字" 
      @search="searchFn"
      @enter="searchEnter"
      @close="closeFn"
    ></x-search>
  </div>
</template>

<script>
export default {
  methods: {
    searchFn (query) {
      console.log('search', query)
    },
    searchEnter (query) {
      console.log('enter', query)
    },
    closeFn (query) {
      console.log('close', query)
    }
  }
}
</script>
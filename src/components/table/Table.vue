<style lang="stylus" scoped>
  table {
    width 100%
    margin-top 10px
    border-collapse collapse
    // table-layout fixed  table均分
    thead {
      tr {
        height 32px
      }
      th {
        color #999
        font-size 12px
      }
    }
    tr {
      height 42px
    }
    th, td {
      font-size 14px
      border 1px solid #CCC
      text-align center
    }
  }
</style>

<template>
  <table>
    <thead>
      <tr>
        <slot></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableData" :key="index">
        <td v-for="(s, k) in props" :key="k">{{item[s]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'XTable',
  props: {
    tableData: Array
  },
  data () {
    return {
      props: []
    }
  },
  mounted () {
    this.$children.forEach(child => {
      let name = child.$options.componentName
      if (name === 'XTableColumn') {
        this.props.push(child.prop)
      }
    })
  }
}
</script>


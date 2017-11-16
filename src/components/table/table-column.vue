<template>
  <th>{{label}}</th>
</template>

<script>
export default {
  name: 'XTableColumn',
  componentName: 'XTableColumn',
  props: {
    label: String,
    prop: String
  }
}
</script>

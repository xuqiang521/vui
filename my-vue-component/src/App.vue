<template>
  <div id="app">
    <dropdown-test></dropdown-test>
  </div>
</template>

<script>
import DropdownTest from './components/dropdown-test'
export default {
  name: 'app',
  components: {
    DropdownTest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

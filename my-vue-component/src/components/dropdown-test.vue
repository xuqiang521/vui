<template>
  <div class="test">
    <v-dropdown trigger="click" @command="commandHandle" :hide-on-click="false">
        <span class="drop-down_link">下拉菜单</span>
        <v-dropdown-menu>
            <v-dropdown-list command="a">下拉列表1</v-dropdown-list>
            <v-dropdown-list command="b">下拉列表2</v-dropdown-list>
            <v-dropdown-list command="c"><h4>下拉列表3</h4></v-dropdown-list>
        </v-dropdown-menu>
    </v-dropdown>
  </div>
</template>

<script>
import VDropdown from './dropdown/dropdown'
import VDropdownMenu from './dropdown/dropdown-menu'
import VDropdownList from './dropdown/dropdown-list'

export default {
  name: 'DropdownTest',
  components: {
    VDropdown,
    VDropdownMenu,
    VDropdownList
  }
}
</script>

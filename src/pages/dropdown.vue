<template>
  <div class="test">
    <v-dropdown trigger="click" @command="commandHandle" :hide-on-click="true">
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
import VDropdown from 'components/dropdown/dropdown'
import VDropdownMenu from 'components/dropdown/dropdown-menu'
import VDropdownList from 'components/dropdown/dropdown-list'

export default {
  name: 'Dropdown',
  components: {
    VDropdown,
    VDropdownMenu,
    VDropdownList
  },
  methods: {
    commandHandle (command, instance) {
      console.log(command, instance);
    }
  }
}
</script>

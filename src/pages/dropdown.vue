<template>
  <div class="test">
    <x-dropdown trigger="click" @command="commandHandle" :hide-on-click="true">
        <span class="drop-down_link">下拉菜单</span>
        <x-dropdown-menu>
            <x-dropdown-list command="a">下拉列表1</x-dropdown-list>
            <x-dropdown-list command="b">下拉列表2</x-dropdown-list>
            <x-dropdown-list command="c"><h4>下拉列表3</h4></x-dropdown-list>
        </x-dropdown-menu>
    </x-dropdown>
  </div>
</template>

<script>
import XDropdown from 'components/dropdown/dropdown'
import XDropdownMenu from 'components/dropdown/dropdown-menu'
import XDropdownList from 'components/dropdown/dropdown-list'

export default {
  name: 'Dropdown',
  components: {
    XDropdown,
    XDropdownMenu,
    XDropdownList
  },
  methods: {
    commandHandle (command, instance) {
      console.log(command, instance);
    }
  }
}
</script>

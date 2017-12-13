<template>
<li class="x-dropdown-menu_list"
    @click="handleClick"
    :command="command"
>
    <slot></slot>
</li>
</template>

<script>
import Emitter from '../../js/emitter.js';
export default {
    name: 'XDropdownList',
    mixins: [Emitter],
    props: {
        command: String
    },
    methods: {
        // 点击dropdown-list时，向上传递，即监听XDropdown的 menu-list-click自定义事件并触发其回调
        handleClick (e) {
            this.dispatch('XDropdown', 'menu-list-click', [this.command, this]);
        }
    }
};
</script>

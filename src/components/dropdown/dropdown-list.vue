<template>
<li class="v-dropdown-menu_list"
    @click="handleClick"
    :command="command"
>
    <slot></slot>
</li>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
export default {
    name: 'VDropdownList',
    mixins: [Emitter],
    props: {
        command: String
    },
    methods: {
        // 点击dropdown-list时，向上传递，即监听VDropdown的 menu-list-click自定义事件并触发其回调
        handleClick (e) {
            this.dispatch('VDropdown', 'menu-list-click', [this.command, this]);
        }
    }
};
</script>

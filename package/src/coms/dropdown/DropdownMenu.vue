<style>
.x-dropdown-menu {
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #d1dbe5;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.12);
    padding: 6px 0;
    z-index: 10;
    position: absolute;
    top: 20px;
    left: 0;
    min-width: 100px;
}
ul, li {
    list-style: none;
}
.drop-down_link, .x-dropdown-menu_list {
    cursor: pointer;
}
</style>
<template>
<ul class="x-dropdown-menu" v-show="visible">
    <slot></slot>
</ul>
</template>

<script>
export default {
    name: 'XDropdownMenu',
    componentName: 'XDropdownMenu',
    // 组件create的时候进行事件注册
    created () {
        this.$on('visible', val => {
            this.visible = val;
        });
    }
};
</script>

<style media="screen">
.v-dropdown {
    display: inline-block;
    position: relative;
    color: #48576a;
    font-size: 14px;
    min-width: 100px;
}
</style>
<template>
<div class="v-dropdown"
    :trigger="trigger"
    :visible="visible"
    :hideOnClick="hideOnClick"
    v-clickoutside="hide"
>
    <slot></slot>
</div>
</template>

<script>
// vue指令，点击节点以外地方，并触发回调
import Clickoutside from '../../utils/clickoutside.js';
import Emitter from '../../mixins/emitter.js';
export default {
    name: 'VDropdown',
    componentName: 'VDropdown',
    mixins: [Emitter],
    // 注册指令
    directives: { Clickoutside },
    props: {
        trigger: {
            type: String,
            default: 'hover'
        },
        hideOnClick: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            timeout: null,
            // state: '',
            visible: false
        }
    },
    methods: {
        // 显示
        show () {
            let that = this;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                that.visible = true;
            }, 150);
        },
        // 隐藏
        hide () {
            let that = this;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                that.visible = false;
            }, 150);
        },
        // click事件的处理
        handleClick () {
            this.visible = !this.visible;
        },
        handleMenuListClick (command, instance) {
            // 点击list后是否隐藏menu，属性通过hideOnClick控制
            if (this.hideOnClick) {
                this.visible = false;
            }
            // 监听command指令，并触发其回调
            this.$emit('command', command, instance);
        },
        initEvent () {
            let {trigger, show, hide, handleClick} = this;
            // 触发事件的elm节点
            let triggerElm = this.$slots.default[0].elm;
            if (trigger === 'hover') {
                triggerElm.addEventListener('mouseenter', show);
                triggerElm.addEventListener('mouseleave', hide);
            }
            else if (trigger === 'click') {
                triggerElm.addEventListener('click', handleClick);
            }
        }
    },
    watch: {
        // 向下，即VDropdownMenu组件传递visible属性并触发其回调
        visible (val) {
            this.broadcast('VDropdownMenu', 'visible', val);
        }
    },
    mounted () {
        this.initEvent();
        this.$on('menu-list-click', this.handleMenuListClick);
    }
};
</script>

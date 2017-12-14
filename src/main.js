import Vue from 'vue'

import App from './App'
import router from './router';

import { Msg, Modal } from 'components/dialog'
// import Modal from 'components/modal';

// Vue.prototype.$message = Message
// or register global message component
/*
 * import MessageComponent from 'components/message/message';
 * Vue.component(MessageComponent.name, MessageComponent)
 */

// Vue.prototype.$modal = Modal
// or register global modal component
/*
 * import ModalComponent from 'components/modal/modal';
 * Vue.component(ModalComponent.name, ModalComponent)
 *
 */

// const components = [
//   require('./components').Dropdown,
//   require('./components').DropdownMenu,
//   require('./components').DropdownList,
//   require('./components').Swipe,
//   require('./components').SwipeItem,
//   require('./components').Swiper,
//   require('./components').Scroller,
//   require('./components').Search,
//   require('./components').SearchList,
//   require('./components').Table,
//   require('./components').TableColumn
// ]
import components from 'components'

components.map(component => {
  Vue.component(component.name, component)
})

console.log(Msg)

Vue.prototype.$dialog = {
  msg: Msg,
  modal: Modal
}

// 动态设置页面title 设置全局指令
Vue.directive('title', {
  inserted(el, binding) {
    document.title = el.dataset.title;
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

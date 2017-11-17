import Vue from 'vue'
import App from './App'
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
// import Dropdown from 'components/dropdown/dropdown'
// import DropdownMenu from 'components/dropdown/dropdown-menu'
// import DropdownList from 'components/dropdown/dropdown-list'

// import Table from 'components/table/table'
// import TableColumn from 'components/table/table-column'
const components = [
  require('./components').Dropdown,
  require('./components').DropdownMenu,
  require('./components').DropdownList,
  require('./components').Swipe,
  require('./components').SwipeItem,
  require('./components').Swiper,
  require('./components').Scroller,
  require('./components').Search,
  require('./components').Table,
  require('./components').TableColumn
]

components.map(component => {
  Vue.component(component.name, component)
})

// Vue.component(Table.name, Table)
// Vue.component(TableColumn.name, TableColumn)

Vue.prototype.$dialog = {
  msg: Msg,
  modal: Modal
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

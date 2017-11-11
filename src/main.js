import Vue from 'vue'
import App from './App'
import Message from 'components/message';

Vue.prototype.$message = Message
// or register global message component
/*
 * import MessageComponent from 'components/message/message';
 * Vue.component(MessageComponent.name, MessageComponent)
/*

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

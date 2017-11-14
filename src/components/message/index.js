import Vue from 'vue';

const MsgConstructor = Vue.extend(require('./Message.vue'));

const instance = new MsgConstructor().$mount(document.createElement('div'));

// 这里可以销毁组件实例，也能通过在message组件内部通过this.$el进行销毁
MsgConstructor.prototype.closeMsg = function () {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  document.getElementsByTagName('html')[0].style.overflow = 'initial'
  typeof this.callback === 'function' && this.callback();
};

const Message = (options = {}) => {
  instance.msg = options.msg;
  instance.timeout = options.timeout || 2000;
  instance.icon = options.icon;
  instance.callback = options.callback;
  document.body.appendChild(instance.$el);
  document.getElementsByTagName('html')[0].style.overflow = 'hidden'
  
  const timer = setTimeout(() => {
    clearTimeout(timer);
    instance.closeMsg();
  }, instance.timeout);
};

export default Message;

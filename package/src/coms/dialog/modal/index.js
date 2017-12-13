import Vue from 'vue';

const ModalConstructor = Vue.extend(require('./Modal.vue'));

const instance = new ModalConstructor({
  el: document.createElement('div'),
});
ModalConstructor.prototype.closeModal = function (stay, callback) {
  typeof callback === 'function' && callback();
  if (stay) return;
  this.$emit('update:show', false);
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  document.getElementsByTagName('html')[0].style.overflow = 'initial'
};

const Modal = (options = {}) => {
  instance.title = options.title;
  instance.content = options.content;
  instance.cancelText = options.cancelText;
  instance.okText = options.okText;
  instance.onCancel = options.onCancel;
  instance.onOk = options.onOk;
  instance.showCloseIcon = options.showCloseIcon || true;
  instance.show = true;
  document.body.appendChild(instance.$el);
  document.getElementsByTagName('html')[0].style.overflow = 'hidden'
};

export default Modal;

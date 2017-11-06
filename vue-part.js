var hookRE = /^hook:/;
/**
 * [$on 事件注册]
 * @param  {[type]}   event [注册事件别名]
 * @param  {Function} fn    [注册事件对应回调]
 */
Vue.prototype.$on = function (event, fn) {
  var this$1 = this;

  var vm = this;
  // 遍历需要发布的消息是否是数组，如果是，则循环注册
  if (Array.isArray(event)) {
    for (var i = 0, l = event.length; i < l; i++) {
      this$1.$on(event[i], fn);
    }
  // 如果不是则单次注册
  } else {
    // 默认值 vm._events = Object.create(null); 通过数组的push()将注册事件回调保存在vm._events[event]中
    (vm._events[event] || (vm._events[event] = [])).push(fn);
    if (hookRE.test(event)) {
      // 默认值vm._hasHookEvent = false
      vm._hasHookEvent = true;
    }
  }
  return vm
};
/**
 * [$once 仅注册一次事件]
 * @param  {[type]}   event [注册事件别名]
 * @param  {Function} fn    [注册事件对应回调]
 */
Vue.prototype.$once = function (event, fn) {
  var vm = this;
  // 定义 on()函数进行事件监听并移除，同时作为$on() 函数的回调执行
  function on () {
    // 移除事件
    vm.$off(event, on);
    // 执行回调，进行事件监听
    fn.apply(vm, arguments);
  }
  on.fn = fn;
  vm.$on(event, on);
  return vm
};
/**
 * [$off 事件移除]
 * @param  {[type]}   event [注册事件别名]
 * @param  {Function} fn    [注册事件对应回调]
 */
Vue.prototype.$off = function (event, fn) {
  var this$1 = this;

  var vm = this;
  // 移除所有的事件监听器
  if (!arguments.length) {
    vm._events = Object.create(null);
    return vm
  }
  // 如果事件别名是数组，则循环将数组中对应的所有事件别名对应的监听器移除
  if (Array.isArray(event)) {
    for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
      this$1.$off(event[i$1], fn);
    }
    return vm
  }
  // specific event
  var cbs = vm._events[event];
  if (!cbs) {
    return vm
  }
  // 如果只传了事件别名一个参数，则移除该事件对应的所有监听器
  if (arguments.length === 1) {
    vm._events[event] = null;
    return vm
  }
  // 参数中既传了事件别名，还传了回调
  var cb;
  var i = cbs.length;
  // 遍历事件对应的所有监听器，即 cbs = vm._events[event]
  while (i--) {
    cb = cbs[i];
    // 如果找到目标监听器，则通过splice移除数组中的监听器，并通过break终止循环
    if (cb === fn || cb.fn === fn) {
      cbs.splice(i, 1);
      break
    }
  }
  return vm
};
/**
 * [$emit 触发事件]
 * @param  {[type]} event [事件别名]
 */
Vue.prototype.$emit = function (event) {
  var vm = this;
  {
    var lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
      tip(
        "Event \"" + lowerCaseEvent + "\" is emitted in component " +
        (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
        "Note that HTML attributes are case-insensitive and you cannot use " +
        "v-on to listen to camelCase events when using in-DOM templates. " +
        "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
      );
    }
  }
  // 定义cbs接收 vm._events[event]
  var cbs = vm._events[event];
  if (cbs) {
    // 通过判断cbs缓存的监听器个数，确保cbs为数组，以便下面的循环执行
    cbs = cbs.length > 1 ? toArray(cbs) : cbs;
    var args = toArray(arguments, 1);
    // 遍历数组cbs，循环执行数组cbs中的方法
    for (var i = 0, l = cbs.length; i < l; i++) {
      cbs[i].apply(vm, args);
    }
  }
  return vm
};

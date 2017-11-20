import Vue from 'vue';
import Router from 'vue-router';
import routers from './router.config';

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};
Router.prototype.setTitle = function (title) {
  document.title = title;
};

Vue.use(Router);

const RouterModel = new Router({
  mode: 'history',
  routes: routers,
});

export default RouterModel;

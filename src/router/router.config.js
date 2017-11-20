let routers = [];
routers = [
  {
    path: '/home',
    name: 'index',
    component: require('pages/index')
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: require('pages/dropdown'),
  },
  {
    path: '/scroller',
    name: 'scroller',
    component: require('pages/scroller'),
  },
  {
    path: '/search',
    name: 'search',
    component: require('pages/search'),
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: require('pages/swiper'),
  },
  {
    path: '/table',
    name: 'table',
    component: require('pages/table'),
  }
]

export default routers;

// // dropdown
// exports.Dropdown = require('./dropdown/dropdown')
// exports.DropdownMenu = require('./dropdown/dropdown-menu')
// exports.DropdownList = require('./dropdown/dropdown-list')
// // swiper
// exports.Swipe = require('./swiper/swiper')
// exports.SwipeItem = require('./swiper/swiper-item')
// exports.Swiper = require('./swiper')
// // scroller
// exports.Scroller = require('./scroller')
// // search
// exports.Search = require('./search')
// exports.SearchList = require('./search/search-list')
// // table
// exports.Table = require('./table/table')
// exports.TableColumn = require('./table/table-column')
// 
// const components = [
//   require('./dropdown/dropdown'),
//   require('./dropdown/dropdown-menu'),
//   require('./dropdown/dropdown-list'),
//   require('./swiper/swiper'),
//   require('./swiper/swiper-item'),
//   require('./swiper'),
//   require('./scroller'),
//   require('./search'),
//   require('./search/search-list'),
//   require('./table/table'),
//   require('./table/table-column')
// ]
let components = []
const componentsFile = require('components/components.json')

Object.keys(componentsFile).forEach((item, index) => {
  components[index] = require(`${componentsFile[item]}`)
})

export default components



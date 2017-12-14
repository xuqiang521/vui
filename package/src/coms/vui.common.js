const Css = require('../css/_common.css')

const Dropdown = require('./dropdown/Dropdown.vue').default;
const DropdownList = require('./dropdown/DropdownList.vue').default;
const DropdownMenu = require('./dropdown/DropdownMenu.vue').default;
const Scroller = require('./scroller/index.vue').default;
const Select = require('./select/Select.vue').default;
const Swiper = require('./swipe/index.vue').default;
const Swipe = require('./swipe/swipe-menu.vue').default;
const SwipeItem = require('./swipe/swipe-item.vue').default;
const Table = require('./table/Table.vue').default;
const TableColumn = require('./table/TableColumn.vue').default;
const Search = require('./search/index.vue').default;
const SearchList = require('./search/SearchList.vue').default;
const Picker = require('./picker/Picker.vue').default;
const Modal = require('./dialog/modal/Modal.vue').default;
const $msg = require('./dialog/message/index.js').default;
const $modal = require('./dialog/modal//index.js').default;

const VUICOMS = [
  Dropdown,
  DropdownList,
  DropdownMenu,
  Scroller,
  Select,
  Swiper,
  Swipe,
  SwipeItem,
  Table,
  TableColumn,
  Search,
  SearchList,
  Picker,
  Modal
]

module.exports = {
  Dropdown,
  DropdownList,
  DropdownMenu,
  Scroller,
  Select,
  Swiper,
  Swipe,
  SwipeItem,
  Table,
  TableColumn,
  Search,
  SearchList,
  Picker,
  Modal,
  VUICOMS,
  $msg,
  $modal
};
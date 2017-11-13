## dropdown

```html
<template>
  <div class="test">
    <x-dropdown trigger="click" @command="commandHandle" :hide-on-click="true">
        <span class="drop-down_link">下拉菜单</span>
        <x-dropdown-menu>
            <x-dropdown-list command="a">下拉列表1</x-dropdown-list>
            <x-dropdown-list command="b">下拉列表2</x-dropdown-list>
            <x-dropdown-list command="c"><h4>下拉列表3</h4></x-dropdown-list>
        </x-dropdown-menu>
    </x-dropdown>
  </div>
</template>

<script>
import XDropdown from 'components/dropdown/dropdown'
import XDropdownMenu from 'components/dropdown/dropdown-menu'
import XDropdownList from 'components/dropdown/dropdown-list'

export default {
  name: 'Dropdown',
  components: {
    XDropdown,
    XDropdownMenu,
    XDropdownList
  },
  methods: {
    commandHandle (command, instance) {
      console.log(command, instance);
    }
  }
}
</script>
```

## swiper

```html
<template>
  <div class="swiper-page">
    <p>正常swiper</p>
    <x-swiper type='swiper' :items='items' :styles="{height: '180px'}"></x-swiper>
    <p>缩略swiper</p>
    <x-swiper type='swiper' :items='items' :type="'thum'" :styles="{height: '208px'}"></x-swiper>
  </div>
</template>

<script>
import XSwiper from 'components/swiper'

export default {
  data () {
    return {
      items: [
        'http://p.yujiangongyu.com/758aaf73-a35b-4e89-839e-b715ba6bee9d.jpg', 
        'https://pic.ziroom.com/house_images/g2/M00/53/27/v180x135_ChAFD1mQVAqANGJ4ACVWgRBv5E8984.JPG'
      ],
    }
  },
  components: {
    XSwiper
  }
}
</script>

<style lang="stylus" scoped>
.swiper-page {
  height auto
}
</style>
```

## scroller

```html
<style scoped>
.scroller-page {
  height: 330px
}
ul {
  padding: 20px 0
}
li {
  width: 100%;
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #eee; 
  text-align: center;
}
</style>

<template>
  <div class="scroller-page">
    <x-scroller
      :on-refresh="refresh"
      :on-infinite="infinite"
      :noDataText="noDataText"
    >
      <!-- content is here -->
      <ul>
        <li>数据1</li>
        <li>数据2</li>
        <li>数据3</li>
        <li>数据4</li>
        <li>数据5</li>
        <li>数据6</li>
      </ul>
    </x-scroller>
  </div>
</template>

<script>
import XScroller from 'components/scroller'

export default {
  components: {
    XScroller
  },
  data () {
    return {
      noDataText: '没有更多数据啦~'
    }
  },
  methods: {
    refresh (done) {
      setTimeout(done, 1000)
      this.noDataText = ''
      console.log('refresh');
    },
    infinite (done) {
      setTimeout(done, 1000, true)
      this.noDataText = '没有更多数据啦~'
      console.log('infinite');
    }
  }
}
</script>
```

## search
```html
<template>
  <div>
    <x-search 
      placeholder="请输入搜索关键字" 
      @search="searchFn"
      @enter="searchEnter"
      @close="closeFn"
    ></x-search>
  </div>
</template>

<script>
import XSearch from 'components/search'

export default {
  components: {
    XSearch
  },
  methods: {
    searchFn (query) {
      console.log('search', query)
    },
    searchEnter (query) {
      console.log('enter', query)
    },
    closeFn (query) {
      console.log('close', query)
    }
  }
}
</script>
```

## message

```javascript
/**
 * props {
 *   msg: String,  // 消息
 *   timeout: {
 *     type: Number,
 *     default: 2000
 *   },  // message消失延时时长
 *   callback: Function,  // 回调
 *   icon: String,  // 信息开头是否有特殊icon
 * }
 */
this.$message({msg: 'hello message components ~'})
// or after register global message component
// <x-message msg="hello message components ~"></x-message>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## vue部分源码分析

[vue-part.js](https://github.com/xuqiang521/my-element-ui/blob/master/vue-part.js)

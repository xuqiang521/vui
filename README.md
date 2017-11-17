# Existing components

- [x] dropdown
- [x] swiper
- [x] scroller
- [x] search
- [x] message
- [x] modal
- [x] table

# Usage of components

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
export default {
  name: 'Dropdown',
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
export default {
  data () {
    return {
      items: [
        'http://p.yujiangongyu.com/758aaf73-a35b-4e89-839e-b715ba6bee9d.jpg', 
        'https://pic.ziroom.com/house_images/g2/M00/53/27/v180x135_ChAFD1mQVAqANGJ4ACVWgRBv5E8984.JPG'
      ],
    }
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
export default {
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
export default {
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
this.$dialog.msg({msg: 'hello message components ~'})
// or after register global message component
// <x-message msg="hello message components ~"></x-message>
```

## modal

```javascript
/**
 *
 * show: Boolean,
 * title: String,
 * onOk: Function,
 * content: String,
 * onCancel: Function,
 * cancelText: String,
 * okText: String,
 * showCloseIcon: {
 *   type: Boolean,
 *   default: true
 * }
 */
this.$dialog.modal({
  title: 'Demo Modal',
  cancelText: '取消',
  okText: '确定',
  content: '测试，测试，测试，测试，测试，测试，测试，测试，测试',
  onOk () {
    console.log('click ok btn to do someting');
  },
  onCancel () {
    console.log('click cancel btn to do someting');
  }
})
```

`or after register global message component`

```html
<template>
  <x-modal 
    title="Demo Modal" 
    cancelText="取消" 
    okText="确定" 
    content="测试，测试，测试，测试，测试，测试，测试，测试，测试"
    :onOK="okFn"
    :onCancel="cancelFn"
  ></x-modal>
</template>

<script>
export default {
  methods: {
    okFn () {
      console.log('click ok btn to do someting');
    },
    cancelFn () {
      console.log('click cancel btn to do someting');
    }
  }
}
</script>
```

## table

```html
<template>
  <x-table :tableData="items">
    <x-table-column prop="date" label="日期"></x-table-column>
    <x-table-column prop="own" label="本客房(度)"></x-table-column>
    <x-table-column prop="common" label="公共分摊(度)"></x-table-column>
    <x-table-column prop="total" label="合计(度)"></x-table-column>
  </x-table>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          date: '2017.11.01',
          own: 1.52,
          common: 0.13,
          total: 1.65
        },
        {
          date: '2017.11.02',
          own: 1.52,
          common: 0.13,
          total: 1.65
        },
        {
          date: '2017.11.03',
          own: 1.52,
          common: 0.13,
          total: 1.65
        }
      ]
    }
  }
}
</script>
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

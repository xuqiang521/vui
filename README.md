## vue-drop-down

```html
<template>
  <div class="test">
    <v-dropdown trigger="click" @command="commandHandle" :hide-on-click="true">
        <span class="drop-down_link">下拉菜单</span>
        <v-dropdown-menu>
            <v-dropdown-list command="a">下拉列表1</v-dropdown-list>
            <v-dropdown-list command="b">下拉列表2</v-dropdown-list>
            <v-dropdown-list command="c"><h4>下拉列表3</h4></v-dropdown-list>
        </v-dropdown-menu>
    </v-dropdown>
  </div>
</template>

<script>
import VDropdown from 'components/dropdown/dropdown'
import VDropdownMenu from 'components/dropdown/dropdown-menu'
import VDropdownList from 'components/dropdown/dropdown-list'

export default {
  name: 'Dropdown',
  components: {
    VDropdown,
    VDropdownMenu,
    VDropdownList
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
    <y-swiper type='swiper' :items='items' :styles="{height: '180px'}"></y-swiper>
    <p>缩略swiper</p>
    <y-swiper type='swiper' :items='items' :type="'thum'" :styles="{height: '208px'}"></y-swiper>
  </div>
</template>

<script>
import YSwiper from 'components/swiper'

export default {
  data () {
    return {
      items: ['http://p.yujiangongyu.com/758aaf73-a35b-4e89-839e-b715ba6bee9d.jpg', 'https://pic.ziroom.com/house_images/g2/M00/53/27/v180x135_ChAFD1mQVAqANGJ4ACVWgRBv5E8984.JPG'],
    }
  },
  components: {
    YSwiper
  }
}
</script>

<style lang="stylus" scoped>
.swiper-page {
  height auto
}
</style>
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

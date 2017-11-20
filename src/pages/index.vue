<template>
  <div class="home">
    <h3>项目快速入口</h3>
    <ul class='menu'>
      <li><router-link to="dropdown">✅ dropdown</router-link></li>
      <li><router-link to="swiper">✅ swiper</router-link></li>
      <li><router-link to="scroller">✅ scroller</router-link></li>
      <li><router-link to="search">✅ search</router-link></li>
      <li><router-link to="table">✅ table</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home{
  padding: 10px;
  h3 {
    margin: 10px 0;
    font-size: 18px;
    text-align: center;
  }
  .menu {
    padding: 10px;
    cursor: pointer;
    //font-size: 15px;
    font-weight: 500;
    li {
      border-bottom :1px solid #dcdcdc;
      padding: 10px;
      a {
        display: inline-block;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>

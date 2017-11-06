<template>
  <div class="y-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'y-swipe-item',
    props: {
      scale: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.$parent && this.$parent.swipeItemCreated(this);
    },

    destroyed() {
      this.$parent && this.$parent.swipeItemDestroyed(this);
    }
  };
</script>

<style lang="stylus" scoped>

</style>


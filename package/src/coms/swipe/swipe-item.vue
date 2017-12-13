<template>
  <div class="x-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'x-swipe-item',
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


<template>
  <div class="blank" :style="{ height: height + 'px' }"></div>
</template>

<script>
export default {
  name: 'vp-blank',
  props: {
    height: {
      type: Number,
      default: 10
    }
  }
};
</script>

<style lang="scss" scoped>
.blank {
  clear: both;
}
</style>

<template>
  <div :class="`padded exmaple-${name} container`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vp-container',
  data(){
    return {
      name: location.hash.slice(2)
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
}
</style>

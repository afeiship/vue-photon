<template>
  <vp-container>
    <vp-icon v-for="item in items" :key="item" :value="item" />
  </vp-container>
</template>

<script>
export default {
  data() {
    return {
      items: require('@/public/assets/json/icons.json')
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  font-size: 20px;
  color: #333;
}
</style>

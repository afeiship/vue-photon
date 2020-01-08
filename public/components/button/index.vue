<template>
  <vp-container>
    <p>
      <vp-button
        size="large"
        v-for="(item, index) in themes"
        :key="index"
        :theme="item"
        >{{ item }}</vp-button
      >
    </p>
    <p>
      <vp-button v-for="(item, index) in themes" :key="index" :theme="item">{{
        item
      }}</vp-button>
    </p>
    <p>
      <vp-button
        size="mini"
        v-for="(item, index) in themes"
        :key="index"
        :theme="item"
        >{{ item }}</vp-button
      >
    </p>
  </vp-container>
</template>
<script>
export default {
  data() {
    return {
      themes: require('@/public/assets/json/theme.json'),
      sizes: require('@/public/assets/json/size.json')
    };
  }
};
</script>

<style lang="scss" scoped>
p + p {
  margin: 0;
  margin-bottom: 10px;
}
</style>

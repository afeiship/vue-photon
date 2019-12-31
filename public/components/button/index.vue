<template>
  <div class="padded container">
    <div class="is-row">
      <vp-button
        size="large"
        v-for="(item, index) in themes"
        :key="index"
        :theme="item"
        >{{ item }}</vp-button
      >
    </div>
    <div class="is-row">
      <vp-button v-for="(item, index) in themes" :key="index" :theme="item">{{
        item
      }}</vp-button>
    </div>
    <div class="is-row">
      <vp-button
        size="mini"
        v-for="(item, index) in themes"
        :key="index"
        :theme="item"
        >{{ item }}</vp-button
      >
    </div>
  </div>
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

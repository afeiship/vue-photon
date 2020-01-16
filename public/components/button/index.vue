<template>
  <vp-container>
    <p>
      <vp-button
        size="large"
        v-for="(item, index) in themes"
        :key="index"
        :theme="item"
        @click="onClick(item, $event)"
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
  },
  methods: {
    onClick(inItem, inEvent) {
      console.log(inItem, inEvent);
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  margin-bottom: 10px;
  .btn {
    margin-right: 10px;
    text-transform: capitalize;
  }
}
</style>

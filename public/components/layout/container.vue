<template>
  <div :class="`padded exmaple-${name} container`">
    <slot></slot>

    <pre v-highlightjs> <code class="vue">{{ snippet }}</code> </pre>
  </div>
</template>

<script>
export default {
  name: 'vp-container',
  data() {
    return {
      name: location.hash.slice(2)
    };
  },
  computed: {
    snippet() {
      return require(`@/public/components/${this.name}/index.vue.snippet`).default;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
}
</style>

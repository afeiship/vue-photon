<template>
  <div :class="`padded exmaple-${name} container`">
    <slot></slot>

    <pre class="highlight-body" v-highlightjs>
      <button class="clippy-btn" @click="copy">
      <img :src="clippy" width="13"/>
      </button>
      <code class="vue">{{ snippet }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'vp-container',
  data() {
    return {
      clippy: require('assets/images/clippy.svg').default,
      name: location.hash.slice(2)
    };
  },
  computed: {
    snippet() {
      return require(`@/public/components/${this.name}/index.vue.snippet`)
        .default;
    }
  },
  methods: {
    copy() {
      nx.toClipboard(this.snippet);
      console.log('success!');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  .highlight-body {
    position: relative;
  }
  .clippy-btn {
    position: absolute;
    top: 50px;
    right: 10px;
    display: inline-block;
    padding: 6px 12px;
    font-size: 13px;
    font-weight: bold;
    line-height: 20px;
    color: #333;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: #eee;
    background-image: linear-gradient(#fcfcfc, #eee);
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    -webkit-appearance: none;
    &:hover,
    &:active {
      text-decoration: none;
      background-color: #ddd;
      background-image: linear-gradient(#eee, #ddd);
      border-color: #ccc;
    }
  }
}
</style>

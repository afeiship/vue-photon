<template>
  <div class="example-component-window">
    <img src="https://qzonestyle.gtimg.cn/qz-proj/wy-pc-v3/static/img/web/part-login@2x.jpg" class="vue-full-image" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
@import './assets/style.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

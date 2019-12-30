<template>
  <div id="app">
    <!-- <router-view /> -->
    <vp-button>Primary</vp-button>
    <vp-button theme="positive">Positive</vp-button>
    <vp-button theme="warning">Warning</vp-button>
    <div style="height:10px"></div>
    <vp-button-group>
      <vp-button active>Mini</vp-button>
      <vp-button>Default</vp-button>
      <vp-button>Large</vp-button>
    </vp-button-group>
  </div>
</template>

<script>
import Button from '@/packages/button';
export default {
  name: 'app',
  components:{
    Button
  }
}
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

<template>
  <div id="app">
    <!-- <router-view /> -->
    <vp-button>Primary</vp-button>
    <vp-button theme="positive">Positive</vp-button>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

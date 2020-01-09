<template>
  <div class="example-component-window">
    <img src="//img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg" class="vue-full-image" />
    <vp-window class="webkit-sassui-animate-float">
      <vp-toolbar-header title="vue-photon"/>
      <vp-window-content>
        <vp-pane-group>
          <vp-pane sidebar mini>
            <vp-nav-group :items="navs" />
          </vp-pane>
          <vp-pane>
            <router-view />
          </vp-pane>
        </vp-pane-group>
      </vp-window-content>
      <vp-toolbar-footer title="Developed by afeiship"/>
    </vp-window>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      navs: require('@/public/assets/json/navs.json')
    }
  }
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

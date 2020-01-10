import Vue from 'vue';
import '@feizheng/next-js-core2';
import '@feizheng/next-to-clipboard';
import App from './app.vue';

import VueHighlightJS from 'vue-highlightjs';
import VueClipboard from 'vue-clipboard';
import 'highlight.js/styles/github.css';
import VuePhoton from '@/packages';
import Example from '@/public/components';
import router from './router';
import '@feizheng/photon';
import { L2Dwidget } from 'live2d-widget';

Vue.config.productionTip = false;
Vue.use(VuePhoton);
Vue.use(Example);
Vue.use(VueHighlightJS);
Vue.use(VueClipboard);

L2Dwidget.init({
  model: {
    scale: 1,
    hHeadPos: 0.5,
    vHeadPos: 0.618,
    jsonPath: 'https://blog.daliansky.net/live2dw/assets/tororo.model.json'
  },
  display: {
    superSample: 2,
    width: 120,
    height: 220,
    position: 'top',
    hOffset: 20,
    vOffset: 20
  },
  mobile: {
    show: false,
    scale: 0.8
  },
  react: {
    opacityDefault: 0.7,
    opacityOnHover: 0.2
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

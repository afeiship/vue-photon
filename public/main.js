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

Vue.config.productionTip = false;
Vue.use(VuePhoton);
Vue.use(Example);
Vue.use(VueHighlightJS);
Vue.use(VueClipboard);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

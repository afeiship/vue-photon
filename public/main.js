import Vue from 'vue';
import App from './app.vue';

import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/github.css';
import VuePhoton from '@/packages';
import Example from '@/public/components';
import router from './router';
import '@feizheng/photon';

Vue.config.productionTip = false;
Vue.use(VuePhoton);
Vue.use(Example);
Vue.use(VueHighlightJS);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

import Vue from 'vue';
import App from './app.vue';

import VuePhoton from '@/packages';
import Example from '@/public/components';
import router from './router';
import '@feizheng/photon';

Vue.config.productionTip = false;
Vue.use(VuePhoton);
Vue.use(Example);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

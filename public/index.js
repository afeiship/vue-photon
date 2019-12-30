import Vue from 'vue';
import App from './app.vue';
import VuePhoton from '@/packages';

// import router from './router';

Vue.config.productionTip = false;
Vue.use(VuePhoton);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
});

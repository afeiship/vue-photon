import Vue from 'vue';
import Router from 'vue-router';

const routes = require('@/public/assets/json/routes.json');

Vue.use(Router);

const dynamic = routes.map((item) => {
  return {
    path: `/${item}`,
    name: item,
    component: require(`@/public/components/${item}`).default
  };
});

export default new Router({
  routes: [{ path: '/', redirect: { name: 'button' } }].concat(dynamic)
});

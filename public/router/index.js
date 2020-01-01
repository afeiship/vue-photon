import Vue from 'vue';
import Router from 'vue-router';

const routes = require('@/public/assets/json/routes.json');

Vue.use(Router);

export default new Router({
  routes: routes.map((item) => {
    return {
      path: `/${item}`,
      name: item,
      component: require(`@/public/components/${item}`).default
    };
  })
});

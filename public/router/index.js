import Vue from 'vue';
import Router from 'vue-router';
import Button from '@/public/components/button';
import ButtonGroup from '@/public/components/button-group';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/button-group',
      name: 'button-group',
      component: ButtonGroup
    }
  ]
});

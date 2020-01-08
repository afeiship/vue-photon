import Vue from 'vue';
import Container from './layout/container';

const install = () => {
  Vue.component(Container.name, Container);
};

export default {
  install
};

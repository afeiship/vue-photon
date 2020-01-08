import Vue from 'vue';
import Container from './layout/container';
import Blank from './layout/blank';

const install = () => {
  Vue.component(Container.name, Container);
  Vue.component(Blank.name, Blank);
};

export default {
  install
};

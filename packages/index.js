import _ from 'lodash';
import component from './component.json';
const components = {};

component.components.forEach((item) => {
  components[_.capitalize(item)] = require(`./${item}`).default;
});

const install = function(Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    console.log(components[key].name, components[key]);

    Vue.component(components[key].name, components[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};

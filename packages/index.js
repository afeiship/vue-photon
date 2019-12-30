// https://juejin.im/post/5ab8bcdb6fb9a028b77acdbd

const requireAll = (context) => context.keys().map(context);
const component = require.context('./', true, /\.vue$/);

const install = function(Vue) {
  if (install.installed) return;
  requireAll(component).forEach((item) => {
    const comp = item.default;
    Vue.component(comp.name, comp);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};

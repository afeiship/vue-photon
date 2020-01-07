import Button from 'packages/button/index.vue';
import ButtonGroup from 'packages/button-group/index.vue';
import Checkbox from 'packages/checkbox/index.vue';
import FormGroup from 'packages/form-group/index.vue';
import Icon from 'packages/icon/index.vue';
import Input from 'packages/input/index.vue';
import Pane from 'packages/pane/index.vue';
import PaneGroup from 'packages/pane-group/index.vue';
import RadioGroup from 'packages/radio-group/index.vue';
import Select from 'packages/select/index.vue';
import Table from 'packages/table/index.vue';
import Tabs from 'packages/tabs/index.vue';
import Textarea from 'packages/textarea/index.vue';
import ToolbarActions from 'packages/toolbar-actions/index.vue';
import ToolbarFooter from 'packages/toolbar-footer/index.vue';
import ToolbarHeader from 'packages/toolbar-header/index.vue';
import Window from 'packages/window/index.vue';
import WindowContent from 'packages/window-content/index.vue';

const requireAll = (context) => context.keys().map(context);
const component = require.context('packages', true, /\.vue$/);

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

export {
  // components
  Button,
  ButtonGroup,
  Checkbox,
  FormGroup,
  Icon,
  Input,
  Pane,
  PaneGroup,
  RadioGroup,
  Select,
  Table,
  Tabs,
  Textarea,
  ToolbarActions,
  ToolbarFooter,
  ToolbarHeader,
  Window,
  WindowContent,

  // install
  install
};

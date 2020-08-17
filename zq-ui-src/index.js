import Button from '../packages/button/index.js';
import Icon from '../packages/icon/index.js';
import Input from '../packages/input/index.js';
import InputNumber from '../packages/input-number/index.js';
import Form from '../packages/form/index.js';
import FormItem from '../packages/form-item/index.js';
import Switch from '../packages/switch/index.js';
import Slider from '../packages/slider/index.js';

const components = [
  Button,
  Icon,
  Input,
  InputNumber,
  Form,
  FormItem,
  Switch,
  Slider
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$ZQUI = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };


}

if (typeof window !== undefined && window.Vue) {
  install(window.Vue);
}

let packExport = {
  version: '1.0.0',
  install
};
components.forEach(component => {
  let name = component.name.split('Zq').pop()
  if (!packExport[name]) packExport[name] = component
});

export default packExport;

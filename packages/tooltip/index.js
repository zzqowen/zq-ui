import ZqTooltip from './src/main';

ZqTooltip.install = function(Vue) {
  Vue.component(ZqTooltip.name, ZqTooltip);
};

export default ZqTooltip;

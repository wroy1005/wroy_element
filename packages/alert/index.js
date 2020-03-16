
// 默认导入
import Alert from './src/main';

/**
 * (安装 Vue.js 插件。
 * 如果插件是一个对象，必须提供 install 方法。
 * 如果插件是一个函数，它会被作为 install 方法。
 * install 方法调用时，会将 Vue 作为参数传入。)
 */
/* istanbul ignore next */
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;

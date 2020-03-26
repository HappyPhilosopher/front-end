// 创建弹窗组件
import Vue from 'vue';

export default function create(Component, props) {
  // 创建vue实例
  const vm = new Vue({
    //
    render: h => h(Component, { props })
  }).$mount();

  // 将生成的DOM挂载到body上
  document.body.appendChild(vm.$el);

  // 创建组件实例，vue实例中只有一个子元素，即组件对象
  const comp = vm.$children[0];
  // 给组件实例添加销毁程序，防止内存泄漏
  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };

  return comp;
}

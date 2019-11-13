import Vue from 'vue';

Vue.directive('changeBGC', {
  inserted(el, binding) {
    el.style.backgroundColor = binding.value;
  },
  update(el, binding) {
    el.style.backgroundColor = binding.value;
  }
});

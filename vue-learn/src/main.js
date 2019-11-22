import Vue from 'vue';
// import App from './App.vue';
import router from '@/router';

Vue.config.productionTip = false;

const app = new Vue({
  // data: {
  //   text: 0
  // },
  router,
  // render: h => h(App)
});

app.$mount('#app');

// setInterval(() => {
//   app.text++;
//   // window.console.log(app.text);
// }, 1000);

// window.console.log(app.$data);
// window.console.log(app.$el);
// window.console.log(app.$props);
// window.console.log(app.$options);
// window.console.log(app.$options.data.text);
// window.console.log(app.$data.text);
// window.console.log(app.text);
// window.console.log(app.$root);
// window.console.log(app.$root === app);

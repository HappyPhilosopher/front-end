<template>
  <div id="app">
    <!-- <hello-world />
    <hr /> -->
    <!-- <Countdown />
    <hr /> -->
    <!-- <Vuexx />
    <hr /> -->
    <!-- <Todo />
    <hr /> -->
    <!-- <fuzzy-query />
    <hr /> -->
    <!-- <Checkbox />
    <hr /> -->
    <!-- <Cart />
    <hr /> -->
    <!-- <Modifier />
    <hr /> -->
    <!-- <Fetch /> -->
    <!-- <hr /> -->
    <!-- <Child :title="parentTitle" @changeText="change" />
    <p>{{ text }}</p> -->
    <!-- <hr /> -->
    <!-- <Navbar @toggle="toggle" />
    <Sidebar v-if="show" /> -->
    <!-- <hr /> -->
    <!-- <Clipboard />  -->
    <!-- <hr /> -->
    <!-- 动态组件 -->
    <!-- <keep-alive>
      <component :is="bro"></component>
    </keep-alive>
    <div>
      <button @click="bro = 'Bro1'">bro1</button>
      <button @click="bro = 'Bro2'">bro2</button>
    </div> -->
    <!-- <Animation /> -->
    <!-- <component-transition /> -->
    <!-- <Swiper /> -->
    <!-- <Directive /> -->
    <Nav />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Countdown from './components/Countdown';
// import Vuexx from './components/Vuex';
// import Todo from './components/Todo';
// import FuzzyQuery from './components/FuzzyQuery';
// import Checkbox from './components/Checkbox';
// import Cart from './components/Cart';
// import Modifier from './components/Modifier';
// import Fetch from './components/Fetch';
// import Child from './components/Child';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import Clipboard from './components/Clipboard';
// import Bro1 from './components/Bro1';
// import Bro2 from './components/Bro2';
// import Animation from './components/Animation';
// import ComponentTransition from './components/ComponentTransition';
// import Swiper from './components/Swiper';
// import Directive from './components/Directive';
import Nav from './components/Nav';

export default {
  name: 'app',
  data() {
    return {
      // parentTitle: '父组件标题',
      // text: '父组件的内容'
      // show: true
      // bro: ''
    };
  },
  methods: {
    // change(text, num) {
    //   this.text = this.text + ` -> ${text} -- ${(num += 1)}`;
    // }
    // toggle() {
    //   this.show = !this.show;
    // }
  },
  mounted() {
    /* fetch('/users')
      .then(res => res.json())
      .then(res => {
        window.console.log(res);
      }); */
  },
  components: {
    // HelloWorld,
    // Countdown,
    // Vuexx,
    // Todo
    // FuzzyQuery,
    // Checkbox,
    // Cart,
    // Modifier,
    // Fetch
    // Child
    // Sidebar,
    // Navbar
    // Clipboard
    // Bro1,
    // Bro2
    // Animation
    // ComponentTransition
    // Swiper
    // Directive
    Nav
  }
};
</script>

<style lang="css"></style>

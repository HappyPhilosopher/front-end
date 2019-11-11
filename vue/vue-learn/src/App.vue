<template>
  <div id="app">
    <hello-world />
    <hr />
    <Countdown />
    <hr />
    <Vuexx />
    <hr />
    <Todo />
    <hr />
    <fuzzy-query />
    <hr />
    <Checkbox />
    <hr />
    <Cart />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Countdown from './components/Countdown';
import Vuexx from './components/Vuex';
import Todo from './components/Todo';
import FuzzyQuery from './components/FuzzyQuery';
import Checkbox from './components/Checkbox';
import Cart from './components/Cart';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Countdown,
    Vuexx,
    Todo,
    FuzzyQuery,
    Checkbox,
    Cart
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

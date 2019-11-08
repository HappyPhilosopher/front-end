<template>
  <div id="app">
    <hello-world />
    <hr />
    <Countdown />
    <hr />
    <Vuexx />
    <hr />
    <Todo />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Countdown from './components/Countdown';
import Vuexx from './components/Vuex';
import Todo from './components/Todo';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Countdown,
    Vuexx,
    Todo
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

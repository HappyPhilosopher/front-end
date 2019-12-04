<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Sort />
  </div>
</template>

<script>
import Sort from './components/Sort';

export default {
  name: 'app',
  components: {
    Sort
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

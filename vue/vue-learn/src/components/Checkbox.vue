<template>
  <div class="container">
    <div class="checkbox-wrapper">
      <input type="checkbox" v-model="list" value="vue" />vue
      <input type="checkbox" v-model="list" value="react" />react
      <input type="checkbox" v-model="list" value="angular" />angular
    </div>
    <div class="radio-wrapper">
      <input type="radio" name="favor" value="vue" v-model="picked">vue
      <input type="radio" name="favor" value="react" v-model="picked">react
      <input type="radio" name="favor" value="jquery" v-model="picked">jquery
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      picked: ''
    };
  },
  watch: {
    list() {
      window.console.log(this.list);
    },
    picked() {
      window.console.log(this.picked);
    }
  }
};
</script>
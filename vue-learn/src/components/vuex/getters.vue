<template>
  <div class="vuex-getters">
    <h1>Vuex Getters</h1>
    <p>list count: {{ listCount }}</p>
    <p>id为2的对象: {{ findById(2) }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'VuexGetters',
  computed: {
    ...mapGetters(['listCount', 'findById'])
    /* ...mapGetters({
      // alias
      count: 'listCount',
      findById: 'findById'
    }) */
  }
};
</script>

<style lang="scss" scoped></style>

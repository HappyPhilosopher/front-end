<template>
  <div class="vuex-state">
    <h1>vuex state</h1>
    <!-- <p>{{ list[0].done }}</p> -->
    <p>total: {{ total }}</p>
    <p>countAlias: {{ count }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'VuexState',
  data() {
    return {
      defaultCount: 1
    };
  },
  computed: {
    total() {
      return this.defaultCount + this.count;
    },
    /* ...mapState({
      list: state => state.list,
      count: state => state.count
    }) */
    /* ...mapState({
      count: state => state.count,
      countAlias: 'count'
    }) */
    ...mapState(['count', 'list'])
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="vuex-actions">
    <h1>vuex actions</h1>
    <p>count: {{ count }}</p>
    <p>list count: {{ listCount }}</p>
    <button @click="add">add count</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
// import { mapActions } from 'vuex';

export default {
  name: 'VuexActions',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['listCount'])
  },
  methods: {
    // ...mapActions(['add'])
    add() {
      // this.$store.dispatch('addListItem').then(res => res());
      this.$store.dispatch('addListItem');
    }
  }
};
</script>

<style lang="scss" scoped></style>

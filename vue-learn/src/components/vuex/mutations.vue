<template>
  <div class="vuex-mutations">
    <h1>vuex mutations</h1>
    <p>count: {{ count }}</p>
    <button @click="add">add</button>
    <p>list count: {{ listCount }}</p>
    <button @click="addItem">add item</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'VuexMutations',
  computed: {
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters(['listCount'])
  },
  methods: {
    add() {
      // this.$store.commit('add', { num: 1 });
      // 对象风格的提交方式
      this.$store.commit({
        type: 'add',
        num: 2
      });
    },
    addItem() {
      this.$store.commit({
        type: 'addListItem',
        item: {
          id: 4,
          done: false
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

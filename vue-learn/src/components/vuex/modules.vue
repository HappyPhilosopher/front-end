<template>
  <div class="vuex-modules">
    <h1>vuex modules</h1>
    <p>view count: {{ viewCount }}</p>
    <button @click="addViewCount">add view count</button>
    <p>root count: {{ count }}</p>
    <button @click="addRootCount">add root count</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'VuexModules',
  computed: {
    ...mapState('login', ['viewCount']),
    ...mapState(['count'])
  },
  methods: {
    ...mapActions('login', ['addViewCount', 'addRootCount'])
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <button class="btn" @click="decrese">decrese</button>
    <span>{{ $store.state.count }}</span>
    <button class="btn" @click="increse">increse</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['increse', 'decrese'])
  }
};
</script>

<style lang="css">
span {
  margin: 0 10px;
}
</style>

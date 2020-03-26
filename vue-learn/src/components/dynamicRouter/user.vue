<template>
  <div class="user">User{{ id }}</div>
</template>

<script>
export default {
  name: 'User',
  props: ['id'],
  // watch: {
  //   $route(to, from) {
  //     window.console.log(to, from);
  //   }
  // }
  created() {
    window.console.log(typeof this.id);
  },
  beforeRouteUpdate(to, from, next) {
    if (from.params.id === '2') {
      window.confirm('sure?') ? next() : alert('forbidden');
    } else {
      next();
    }
  }
};
</script>

<style lang="scss" scoped></style>

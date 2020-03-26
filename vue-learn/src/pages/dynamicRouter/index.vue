<template>
  <div class="dynamic-router">
    <div @click="go">hello</div>
    <router-link to="/dynamicRouter/user/1">user1</router-link>
    <router-link to="/dynamicRouter/user/2">user2</router-link>
    <router-view></router-view>
    <button @click="goToUser2">go to user-2</button>
  </div>
</template>

<script>
export default {
  name: 'DynamicRouter',
  methods: {
    go() {
      this.$router.push('/tree');
    },
    goToUser2() {
      this.$router.push({
        name: 'user',
        params: { id: 2 },
        query: { userId: 'user2' }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

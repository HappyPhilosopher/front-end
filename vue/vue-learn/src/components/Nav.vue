<template>
  <div>
    <nav>
      <router-link to="/home" activeClass="active" tag="a">首页</router-link>
      <router-link to="/film" activeClass="active" tag="a">电影</router-link>
      <router-link to="/cinema" activeClass="active" tag="a">影院</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
nav {
  padding-bottom: 20px;
}

a {
  margin: 0 10px;
}

.active {
  color: red;
}
</style>

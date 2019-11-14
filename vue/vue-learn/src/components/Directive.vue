<template>
  <div>
    <p v-changeBGC="'red'">hello world</p>
    <router-link to="/">主页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import '../assets/js/directive';

export default {};
</script>

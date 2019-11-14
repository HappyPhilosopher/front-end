<template>
  <div>
    <div>film组件的轮播图</div>
    <div>
      <nav>
        <router-link to="/film/nowPlaying" tag="a" activeClass="active">
          正在热映
        </router-link>
        <router-link to="/film/comingSoon" tag="a" activeClass="active">
          即将上映
        </router-link>
        <router-view></router-view>
      </nav>
    </div>
  </div>
</template>

<style lang="css" scoped>
.active {
  color: pink;
}
</style>

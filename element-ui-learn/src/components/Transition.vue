<template>
  <div>
    <el-button @click="show = !show">Click Me</el-button>

    <div class="transition-wrapper">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">el-fade-in</div>
      </transition>
    </div>

    <el-button @click="show2 = !show2">click</el-button>
    <div class="transition-wrapper">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">el-zoom-in-center</div>
      </transition>
      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">el-zoom-in-top</div>
      </transition>
      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">el-zoom-in-bottom</div>
      </transition>
      <transition name="el-zoom-in-left">
        <div v-show="show2" class="transition-box">el-zoom-in-left</div>
      </transition>
    </div>

    <el-button @click="show3 = !show3">click</el-button>
    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show2: true,
      show3: true
    };
  }
};
</script>

<style lang="scss" scoped>
.transition-wrapper {
  display: flex;
  margin: 20px 0;
  height: 100px;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>

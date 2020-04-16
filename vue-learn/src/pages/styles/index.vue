<template>
  <div class="vue-style">
    <div class="btn-wrapper">
      <button @click="toggle">toggle</button>
    </div>
    <!-- 使用animate.css -->
    <!-- <transition
      name="show"
      enter-active-class="animated tada"
      leave-active-class="animated fadeOutRight"
    >
      <p v-if="show">Hello</p>
    </transition> -->

    <!-- <div class="box">
      <div class="line"></div>
    </div> -->

    <!-- 使用javascript钩子 -->
    <!-- <transition name="drop" @before-enter="dropBeforeEnter" @enter="dropEnter">
      <div v-if="show" class="ball">
        <div class="ball__inner"></div>
      </div>
    </transition> -->

    <transition
      name="fade"
      mode="in-out"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
    >
      <button :key="show" class="switch">{{ show ? 'on' : 'off' }}</button>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VueStyle',
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
    /* dropBeforeEnter(el) {
      el.style.display = '';
      const innerBall = el.querySelector('.ball__inner');
      el.style.transform = `translate3d(0, 0, 0)`;
      innerBall.style.transform = `translate3d(0, 0, 0)`;
    },
    dropEnter(el, done) {
      el.offsetHeight;

      const ballBounding = el.getBoundingClientRect();
      const innerBall = el.querySelector('.ball__inner');
      const x = 300 - ballBounding.left;
      const y = 351 - ballBounding.top;

      el.style.transform = `translate3d(0, ${y}px, 0)`;
      innerBall.style.transform = `translate3d(${x}px, 0, 0)`;

      el.addEventListener('transitionend', done);
    } */
  },
  mounted() {
    /* window.console.log(
      document.querySelector('.line').getBoundingClientRect().top
    ); */
  }
};
</script>

<style lang="scss" scoped>
/* .show-enter-active,
.show-leave-active {
  transition: all 0.5s;
}

.show-enter,
.show-leave-to {
  opacity: 0;
} */

/* p {
  margin-left: 100px;
} */

/* .vue-style {
  box-sizing: border-box;
}

.ball {
  transition: all 0.8s cubic-bezier(0.35, -0.85, 0.62, 0.06);
}

.ball__inner {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f00;
  margin: 100px 0 0 100px;
  transition: all 0.8s linear;
}

.box {
  position: relative;

  .line {
    position: absolute;
    top: 320px;
    left: 0;
    width: 100vw;
    height: 1px;
    background-color: #555;
  }
} */

.switch {
  position: absolute;
  top: 50px;
  left: 8px;
}
</style>

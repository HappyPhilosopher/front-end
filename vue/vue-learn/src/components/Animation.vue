<template>
  <div>
    <button class="btn" @click="isShow = !isShow">animate</button>

    <transition name="k">
      <div v-show="isShow">hello world</div>
    </transition>

    <transition name="my">
      <div v-show="isShow">hello world</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    };
  }
};
</script>

<style lang="css" scoped>
.k-enter-active,
.k-leave-active {
  transition: all 1s;
}

.k-enter,
.k-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.my-enter-active {
  animation: bounce 1s;
}

.my-leave-active {
  animation: bounce 1s reverse;
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

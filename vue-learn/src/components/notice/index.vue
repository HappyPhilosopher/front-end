<template>
  <div v-if="isShow" class="popup">
    <h1 class="title">{{ title }}</h1>
    <p class="text">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  border: 1px solid #333;
  padding-top: 30px;
  box-sizing: border-box;

  .title {
    text-align: center;
  }

  .text {
    text-align: center;
  }
}
</style>

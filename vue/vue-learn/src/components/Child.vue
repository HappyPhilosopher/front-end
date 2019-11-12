<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <button class="btn" @click="$emit('changeText', '子组件的内容', 1)">change</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    // changeText() {
    //   this.$emit('changeText', '子组件的内容来啦');
    // }
  }
};
</script>

<template>
  <div>
    <input type="text" v-model="obj.a">
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        a: 'hello'
      }
    };
  },
  watch: {
    // 如果要深度监视一个数据，可以直接指定它，而不是用它的整个对象
    'obj.a': {
      handler(newVal, oldVal) {
        window.console.log(newVal + '-----' + oldVal);
      },
      // deep: true
    }
  }
};
</script>

<style lang="scss" scoped></style>

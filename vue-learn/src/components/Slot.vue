<template>
  <div class="wrapper">
    <slot name="header" value="hello" aaa="world" />
    <slot />
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: 'value'
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 600px;
  height: 600px;
  background-color: lightblue;
}
</style>

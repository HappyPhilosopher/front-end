<template>
  <div class="slot-wrapper">
    <slot name="header" />
    <slot />
    <slot name="header" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.slot-wrapper {
  width: 200px;
  border: 1px solid #ccc;
}
</style>

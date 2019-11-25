<template>
  <div>grandson: {{ grandparent.value }}</div>
</template>

<script>
export default {
  inject: ['grandparent']
};
</script>

<style lang="scss" scoped></style>

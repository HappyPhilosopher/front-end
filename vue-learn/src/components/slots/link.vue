<template>
  <a :href="url" class="navigation-link" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Link',
  inheritAttrs: false,
  props: {
    url: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>

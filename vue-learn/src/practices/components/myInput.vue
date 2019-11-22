<template>
  <div>
    <input type="text" @input="input" />
  </div>
</template>

<script>
export default {
  name: 'customInput',
  methods: {
    input(e) {
      this.$emit('input', e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped></style>

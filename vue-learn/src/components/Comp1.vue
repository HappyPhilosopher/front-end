<template>
  <div>
    <input type="text" :value="value1" @input="handler" />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: {
    value1: {
      type: String,
      required: true
    }
  },
  methods: {
    handler(e) {
      this.$emit('change', e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped></style>

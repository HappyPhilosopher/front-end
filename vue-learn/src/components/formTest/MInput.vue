<template>
  <div class="m-input">
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins/emitter';

export default {
  name: 'MInput',
  inheritAttrs: false,
  mixins: [mixins],
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
      // 通知上级组件校验
      this.dispatch('MFormItem', 'validate');
    }
  }
};
</script>

<style lang="scss" scoped></style>

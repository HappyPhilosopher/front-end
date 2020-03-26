<template>
  <div class="m-form-item">
    <label v-if="label">{{ label }}</label>

    <slot></slot>

    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator';

export default {
  name: 'MFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: String
  },
  data() {
    return {
      errorMessage: ''
    };
  },
  methods: {
    validate() {
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];
      const desc = {
        [this.prop]: rules
      };
      const schema = new Schema(desc);
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = '';
        }
      });
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate();
    });
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <span>
      name: {{ fullName }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Jokey',
      lastName: 'Li'
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>

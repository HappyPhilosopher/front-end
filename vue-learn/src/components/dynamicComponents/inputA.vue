<template>
  <div class="input-a">
    <input v-model="text" type="text" />
  </div>
</template>

<script>
export default {
  name: 'inputA',
  data() {
    return {
      text: ''
    };
  }
};
</script>

<style lang="scss" scoped></style>

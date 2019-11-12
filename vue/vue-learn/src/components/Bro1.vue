<template>
  <div>
    <button class="btn" @click="changeBro2()">change</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeBro2() {
      this.$bus.$emit('change', 'hello Bro!');
    }
  }
};
</script>

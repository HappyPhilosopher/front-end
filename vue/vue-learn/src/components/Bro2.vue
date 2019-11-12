<template>
  <div>
    {{ msg }}
    <div>
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '我是兄弟二'
    };
  },
  mounted() {
    this.$bus.$on('change', data => {
      this.msg = data;
    });
  }
};
</script>

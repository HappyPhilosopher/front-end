<template>
  <div>
    detail
  </div>
</template>

<script>
export default {
  mounted() {
    window.console.log(this.$route.params.id);
  }
}
</script>

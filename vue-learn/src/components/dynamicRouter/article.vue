<template>
  <div class="article">
    Article
  </div>
</template>

<script>
export default {
  name: 'Article',
  watch: {
    $ruote(to, from) {
      window.console.log(to, from);
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container">
    <div>{{ html }}</div>
    <div v-html="html"></div>
    <div v-text="html"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: '<span style="color: red;">Hello World</span>'
    };
  }
};
</script>
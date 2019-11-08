<template>
  <div>
    <time ref="time">{{ time }}</time>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 60
    };
  },
  mounted() {
    let timer = 0;
    timer = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        this.time = 0;
        clearInterval(timer);
      }
    }, 1000);

    const div = document.createElement('div');
    div.innerHTML = 'Hello world';
    this.$refs.time.parentNode.insertBefore(div, this.$refs.time);
  }
};
</script>
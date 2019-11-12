<template>
  <div>
    <button class="btn" ref="btn">clicked</button>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  mounted() {
    const _this = this;

    new Clipboard('.btn', {
      text() {
        return _this.$refs.btn.innerHTML;
      }
    }).on('success', () => {
      window.console.log('success');
    });
  }
};
</script>

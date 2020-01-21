<template>
  <div>
    <h2>组件的定义</h2>
    <Comp1 v-model="text" />
  </div>
</template>

<script>
import Comp1 from '@/components/Comp1.vue';

export default {
  name: 'defineComponent',
  data() {
    return {
      text: ''
    };
  },
  components: {
    Comp1
  }
};
</script>

<style lang="scss" scoped></style>

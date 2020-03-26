<template>
  <div class="dynamic-components">
    <div class="btns" @click="changeComp">
      <div class="btn-a">component one</div>
      <div class="btn-b">component two</div>
    </div>

    <keep-alive>
      <component :is="current"></component>
    </keep-alive>
  </div>
</template>

<script>
import BlockComp from '@/components/dynamicComponents/block';
import InputA from '@/components/dynamicComponents/inputA';

export default {
  name: 'DynamicComponents',
  data() {
    return {
      current: ''
    };
  },
  methods: {
    changeComp(e) {
      const target = e.target;
      switch (target.className) {
        case 'btn-a':
          this.current = 'BlockComp';
          break;

        case 'btn-b':
          this.current = 'InputA';
          break;
      }
    }
  },
  components: {
    BlockComp,
    InputA
  }
};
</script>

<style lang="scss" scoped></style>

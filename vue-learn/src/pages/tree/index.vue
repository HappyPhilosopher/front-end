<template>
  <ul class="tree">
    <TreeItem :model="model" />
    <button @click="goBack" class="go-back">go back</button>
  </ul>
</template>

<script>
import TreeItem from '@/components/treeItem';

export default {
  name: 'Tree',
  data() {
    return {
      model: {
        title: '全栈学习',
        text: '对标百度T5-T6',
        children: [
          {
            title: 'Vue学习',
            text: '深入了解vue各项特性',
            children: [
              {
                title: '组件化'
              },
              {
                title: '全家桶'
              },
              {
                title: '源码学习'
              }
            ]
          },
          {
            title: 'React学习',
            text: '深入学习React'
          }
        ]
      }
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  },
  components: {
    TreeItem
  }
};
</script>

<style lang="scss" scoped></style>

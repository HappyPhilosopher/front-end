<template>
  <li class="tree-item">
    <div @click="toggle" :class="{ active: isFolder }" class="content">
      <h1 class="title">{{ model.title }}</h1>
      <p class="text">{{ model.text }}</p>
    </div>

    <ul v-if="model.children" v-show="open">
      <TreeItem
        v-for="item in model.children"
        :key="item.title"
        :model="item"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    model: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      // 是否为打开状态
      open: false
    };
  },
  computed: {
    // 是否为折叠状态（可展开）
    isFolder() {
      return this.model.children && this.model.children.length ? true : false;
    }
  },
  methods: {
    toggle() {
      this.isFolder && (this.open = !this.open);
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  color: red;
  cursor: pointer;
}
</style>

<template>
  <div>
    <div v-show="show">you can see me</div>
    <div v-show="hide">you can not see me</div>
    <button @click="$emit('changeAppearence', true)">change appearence</button>

    <ul>
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>

    <div>{{ article.title }}</div>

    <div>{{ reg }}</div>

    <div>{{ grandparent.value }}</div>
  </div>
</template>

<script>
export default {
  inject: ['grandparent'],
  props: {
    show: {
      required: true,
      type: Boolean
    },
    hide: {
      required: true,
      type: Boolean
    },
    list: {
      required: true,
      type: Array
    },
    article: {
      type: Object,
      default() {
        return { title: 'Hi' };
      }
    },
    reg: {
      validator(value) {
        const reg = /vue/;
        return reg.test(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>

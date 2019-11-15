<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="handle(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['111', '222', '333']
    };
  },
  methods: {
    handle(id) {
      // this.$router.push(`/detail/${id}`);
      this.$router.push({ name: 'detail', params: { id } });
    }
  }
};
</script>

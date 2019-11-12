<template>
  <div>
    <button class="btn" @click="getData()">getData</button>
    <ul v-if="data.length > 0">
      <li v-for="(item, index) in data" :key="index">
        {{ item.username }} - {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    getData() {
      fetch('http://localhost:8888/users')
        .then(res => res.json())
        .then(res => {
          this.data = res;
        });
    }
  }
};
</script>

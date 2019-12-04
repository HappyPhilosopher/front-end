<template>
  <div>
    <ul>
      <li v-for="(item, index) in price" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="ascending">升序</button>
    <button @click="descending">降序</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      price: [],
      proxy: {}
    };
  },
  methods: {
    ascending() {
      this.price = this.proxy.ascending;
    },
    descending() {
      this.price = this.proxy.descending;
    },
    reset() {
      this.price = this.proxy.default;
    }
  },
  async mounted() {
    const {
      data: { price }
    } = await Axios.get('/api/sort');
    
    this.proxy = new Proxy(price, {
      get(target, key) {
        if (key === 'ascending') {
          return [].concat(price).sort((a, b) => a - b);
        } else if (key === 'descending') {
          return [].concat(price).sort((a, b) => b - a);
        } else {
          return price;
        }
      },
      set() {
        return false;
      }
    });
    this.price = this.proxy.default;
  }
};
</script>

<style lang="scss" scoped></style>

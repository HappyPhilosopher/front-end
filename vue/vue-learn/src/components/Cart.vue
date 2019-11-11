<template>
  <div class="container">
    <div class="goods-wrapper">
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>商品名</th>
            <th>单价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in goodsList" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button class="btn" @click="addGood(item)">add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="cart-wrapper">
      <table v-if="cart.length > 0">
        <thead>
          <tr>
            <th>-</th>
            <th>编号</th>
            <th>商品名</th>
            <th>单价</th>
            <th>数量</th>
            <th colspan="2">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="item.id">
            <td>
              <input type="checkbox" :checked="item.checked" />
            </td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.number }}</td>
            <td>
              <button class="btn" @click="plusGood(index)">plus</button>
              <button class="btn" @click="minusGood(index)">minus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="sum">总价格：{{ totalPrice }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        {
          id: 1,
          name: 'vue',
          price: 10
        },
        {
          id: 2,
          name: 'react',
          price: 20
        },
        {
          id: 3,
          name: 'angular',
          price: 30
        }
      ],
      cart: []
    };
  },
  methods: {
    addGood(good) {
      const findIndex = this.cart.findIndex(item => item.id === good.id);
      if (findIndex === -1) {
        good = Object.assign({}, good, {
          number: 1,
          checked: true
        });
        this.cart.push(good);
      } else {
        this.cart[findIndex].number += 1;
      }
    },
    plusGood(i) {
      this.cart[i].number += 1;
    },
    minusGood(i) {
      this.cart[i].number -= 1;
      if (this.cart[i].number <= 0) {
        this.cart.splice(i, 1);
      }
    }
  },
  computed: {
    totalPrice() {
      return this.cart
        .filter(item => item.checked)
        .map(item => item.number * item.price)
        .reduce((acc, cur) => acc + cur, 0);
    }
  }
};
</script>

<style lang="css" scoped>
table,
tr,
th,
td {
  border: 1px solid #ccc;
  border-collapse: collapse;
}

th,
td {
  padding: 5px 10px;
}

.cart-wrapper {
  margin-top: 20px;
}

.btn {
  margin: 0 5px;
}
</style>

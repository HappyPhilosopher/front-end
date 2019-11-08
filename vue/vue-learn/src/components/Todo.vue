<template>
  <div class="todo-list">
    <div class="form-wrapper">
      <input type="text" v-model="msg" />
      <button class="btn" @click="addMsg">add</button>
    </div>
    <div class="show-wrapper" v-if="list.length > 0">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <input type="checkbox" v-model="item.isChecked" />
          <span :class="{ active: item.isChecked }">{{ item.text }}</span>
          <a href="javascript:;" @click="deleteMsg(index)">delete</a>
        </li>
      </ul>
    </div>
    <a href="javascript:;" @click="checkTest">test</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      list: JSON.parse(localStorage.getItem('todo-list')) || [],
      test: { test: true }
    };
  },
  watch: {
    list: {
      handler(val) {
        localStorage.setItem('todo-list', JSON.stringify(val));
      },
      deep: true
    },
    test: {
      handler(val) {
        window.console.log(val);
      },
      deep: true
    }
  },
  methods: {
    addMsg() {
      this.list.push({
        text: this.msg,
        isChecked: false
      });
      this.msg = '';
    },
    deleteMsg(i) {
      this.list.splice(i, 1);
    },
    checkTest() {
      this.test.test = !this.test.test;
    }
  },
  created() {}
};
</script>

<style lang="css">
.active {
  text-decoration: line-through;
}
</style>

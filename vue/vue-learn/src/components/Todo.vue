<template>
  <div class="todo-list">
    <div class="form-wrapper">
      <input type="text" v-model="msg" />
      <button class="btn" @click="addMsg">add</button>
    </div>
    <div class="show-wrapper" v-if="list.length > 0">
      <!-- <ul> -->
      <transition-group
        tag="ul"
        enter-active-class="animated bounceIn"
        leave-active-class="animated bounceOutLeft"
      >
        <li v-for="(item, index) in list" :key="item.text">
          <input type="checkbox" v-model="item.isChecked" />
          <span :class="{ active: item.isChecked }">{{ item.text }}</span>
          <a href="javascript:;" @click="deleteMsg(index)">delete</a>
        </li>
      </transition-group>
      <!-- </ul> -->
    </div>
  </div>
</template>

<script>
import 'animate.css';

export default {
  data() {
    return {
      msg: '',
      list: JSON.parse(localStorage.getItem('todo-list')) || []
    };
  },
  watch: {
    list: {
      handler(val) {
        localStorage.setItem('todo-list', JSON.stringify(val));
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

<style lang="css" scoped>
.todo-list {
  padding-bottom: 50px;
}

span {
  margin: 0 10px;
}
.active {
  text-decoration: line-through;
}
</style>

<template>
  <div id="app">
    <h2>Todos:</h2>
    <ol>
      <li v-for="todo in todos" :key="todo.text">
        <label>
          <input
            type="checkbox"
            v-on:change="toggle(todo)"
            v-bind:checked="todo.done"
          />

          <del v-if="todo.done">
            {{ todo.text }}
          </del>
          <span v-else>
            {{ todo.text }}
          </span>
        </label>
      </li>
    </ol>

    <!-- 自定义组件 -->
    <div>
      <input v-focus type="text" />
    </div>

    <div v-pow="4"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todo')) || [
        { text: 'Learn JavaScript', done: false },
        { text: 'Learn Vue', done: false },
        { text: 'Play around in JSFiddle', done: true },
        { text: 'Build something awesome', done: true }
      ]
    };
  },
  methods: {
    toggle: function(todo) {
      todo.done = !todo.done;
    }
  },
  watch: {
    todos: {
      handler(newVal) {
        localStorage.setItem('todo', JSON.stringify(newVal));
      },
      deep: true
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    },
    pow: {
      inserted(el, binding) {
        el.innerHTML = Math.pow(binding.value, 2);
      },
      update(el, binding) {
        el.innerHTML = Math.pow(binding.value, 2);
      }
    }
  }
};
</script>

<style lang="css" scoped>
body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}
</style>

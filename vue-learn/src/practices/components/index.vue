<template>
  <div>
    <div :class="{ active: isActive }">
      hello wrold
    </div>
    <Child
      :show="show"
      :hide="hide"
      :list="[1, 2, 3, 4]"
      :reg="'learning vue is perfict'"
      @changeAppearence="changeAppearence"
    />
    <custom-input v-model="data" />
    <div>{{ data }}</div>

    <div class="box">
      <base-slot>
        <span>Hello slot</span>
      </base-slot>
    </div>

    <named-slot tag="div" class="slot-container">
      <header name="header">header</header>
      <main>content</main>
      <footer name="header">footer</footer>
    </named-slot>

    <grandson />
  </div>
</template>

<script>
import Child from './Child';
import CustomInput from './myInput.vue';
import BaseSlot from './slot/base';
import NamedSlot from './slot/namedSlot';
import Grandson from './grandson.vue';

export default {
  provide() {
    return {
      grandparent: {
        value: 'hello grandson'
      }
    };
  },
  data() {
    return {
      isActive: true,
      show: true,
      hide: false,
      data: ''
    };
  },
  methods: {
    changeAppearence(bool) {
      this.show = bool;
      this.hide = !this.hide;
    }
  },
  components: {
    Child,
    CustomInput,
    BaseSlot,
    NamedSlot,
    Grandson
  }
};
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
.box {
  width: 100px;
  height: 100px;
  background-color: #f00;
  margin-top: 20px;
  font-size: 16px;
  line-height: 100px;
  color: #fff;
  text-align: center;
}
.slot-container {
  margin-top: 20px;
}
header {
  width: 100%;
  height: 100px;
  background-color: #f00;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
main {
  width: 100%;
  height: 100px;
  background-color: #ff0;
  text-align: center;
  line-height: 100px;
  color: #555;
}
footer {
  width: 100%;
  height: 100px;
  background-color: #00f;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
</style>

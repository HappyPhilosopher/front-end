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
  </div>
</template>

<script>
import Child from './Child';
import CustomInput from './myInput.vue';

export default {
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
    CustomInput
  }
};
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
</style>

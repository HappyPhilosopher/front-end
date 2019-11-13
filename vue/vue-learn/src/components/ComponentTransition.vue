<template>
  <div>
    <transition mode="out-in" name="comp">
      <component :is="compId"></component>
    </transition>
    <ul>
      <li v-for="(comp, index) in compIds" :key="index" @click="compId = comp">
        {{ comp }}
      </li>
    </ul>
  </div>
</template>

<script>
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';

export default {
  data() {
    return {
      compId: '',
      compIds: ['Comp1', 'Comp2', 'Comp3']
    };
  },
  components: {
    Comp1,
    Comp2,
    Comp3
  }
};
</script>

<style lang="css" scoped>
ul {
  position: absolute;
  bottom: 0;
  list-style: none;
  width: 100%;
  height: 100px;
  display: flex;
}

li {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  border-right: 1px solid #fff;
  cursor: pointer;
}

li:nth-last-child(1) {
  border-right: 0;
}

.comp-enter-active,
.comp-leave-active {
  transition: all ease-in-out 1s;
}

.comp-enter,
.comp-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>

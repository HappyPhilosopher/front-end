<template>
  <div class="modifier-wrapper">
    <!-- lazy 修饰符，只在失去焦点时生效 -->
    <input type="text" v-model.lazy="name" />
    <p>{{ name }}</p>
    <br />
    <input type="number" v-model="age" />
    <p>{{ age }}</p>
    <br />
    <!-- trim 修饰符去除首位空格 -->
    <input type="text" v-model.trim="fullName" />
    <p>|{{ fullName }}|</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: 0,
      fullName: ''
    };
  }
};
</script>

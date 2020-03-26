<template>
  <div class="named-slot">
    <header class="header">
      <slot name="header" :user="user"></slot>
    </header>
    <main class="main">
      <slot :user="user">{{ user.firstName }}</slot>
    </main>
    <footer class="footer">
      <slot name="footer" :foo="foo"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'NamedSlot',
  data() {
    return {
      user: {
        firstName: 'Smith',
        lastName: 'Jack'
      },
      foo: 'foo'
    };
  }
};
</script>

<style lang="scss" scoped></style>

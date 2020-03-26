<template>
  <div class="vue-slots">
    <!-- <NavigationLink url="http://www.baidu.com" target="_blank">
      百度
    </NavigationLink> -->

    <named-slot>
      <template #header="scope">
        <h1>Header</h1>
        {{ scope }}
      </template>
      <template #default="{ user }">
        <h1>Main</h1>
        <p>{{ user.lastName }}</p>
      </template>
      <template #footer="{ foo }">
        <h1>Footer</h1>
        {{ foo }}
      </template>
    </named-slot>
  </div>
</template>

<script>
// import NavigationLink from '@/components/slots/link.vue';
import NamedSlot from '@/components/slots/namedSlots';

export default {
  name: 'VueSlots',
  components: {
    // NavigationLink
    NamedSlot
  }
};
</script>

<style lang="scss" scoped></style>

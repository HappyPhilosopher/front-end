<template>
  <div>
    <slot-div>
      <div class="class" slot="header" slot-scope="props">
        Header {{ props.value }} {{ props.aaa }}
      </div>
      <div class="main">
        Main
      </div>
      <div class="footer" slot="footer">
        Footer
      </div>
    </slot-div>
  </div>
</template>

<script>
import SlotDiv from '@/components/Slot.vue';

export default {
  components: {
    SlotDiv
  }
};
</script>

<style lang="scss" scoped></style>

<script setup>
const props = defineProps({
  type: { type: String, default: "left" },
});
</script>

<template>
  <button class="roundOrangeBtn">
    <img :src="`assets/${props.type}Btn.png`" :alt="`${props.type} Button`" />
  </button>
</template>

<style scoped>
/* Desktop */
@media screen {
  .roundOrangeBtn {
    border: none;
    border-radius: 100px;
  }

  .roundOrangeBtn:hover {
    opacity: 0.7;
  }

  .roundOrangeBtn:active {
    transform: translateY(4px);
  }
}
</style>

<script setup>
const props = defineProps({
  project: Object,
  hidden: Boolean,
});
</script>

<template>
  <div
    :class="{ projectCard: true, hidden: props.hidden }"
    :style="`background-color: var(--${props.project.backgroundColor}); color: var(--${props.project.textColor})`"
  >
    <div class="projectTextDiv">
      <h4 class="robotoCondensed">{{ props.project.category }}</h4>
      <h3 class="inknutAntiqua">{{ props.project.description }}</h3>
    </div>
    <img
      :src="`assets/${props.project.image}`"
      :alt="`${props.project.imageDesc}`"
    />
  </div>
</template>

<style scoped>
/* Desktop */
@media screen {
  .projectCard {
    border-radius: 3px;
    height: 26rem;
    padding: 3rem;
    display: flex;
    align-items: flex-end;
    position: relative;
  }

  .projectCard img {
    position: absolute;
    bottom: 0;
    right: 30%;
    transform: translate(50%, 0);
    max-height: 120%;
  }

  .projectTextDiv h3 {
    font-size: 2.5rem;
    line-height: 3rem;
    margin-top: 0.75rem;
  }

  .projectTextDiv {
    width: 18rem;
    position: relative;
    z-index: 1;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .projectCard img {
    right: 35%;
    max-height: 110%;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .projectCard {
    padding: 1.75rem;
    height: 20rem;
  }

  .projectCard img {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(20%, 0);
    max-height: 108%;
  }

  img[alt="Tired Woman"] {
    max-height: 95%;
    transform: translate(0, 0);
  }
}
</style>

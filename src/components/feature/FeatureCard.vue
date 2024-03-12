<script setup>
const props = defineProps({
  feature: Object,
  index: Number,
  currentFeature: Number,
});
</script>

<template>
  <div
    class="featureCard"
    :style="{
      backgroundColor: `var(--${props.feature.backgroundColor})`,
      transform: `translateX(${
        (props.index - props.currentFeature + 1) * 105
      }%)`,
    }"
  >
    <img
      :src="`assets/${props.feature.icon}.png`"
      :alt="`${props.feature.icon}`"
    />
    <h5 class="robotoCondensed">{{ props.feature.title }}</h5>
    <p class="DMsans">
      {{ props.feature.desc }}
    </p>
  </div>
</template>

<style scoped>
/* Desktop */
@media screen {
  .featureCard {
    position: absolute;
    width: 35.625rem;
    height: 18rem;
    padding: 3rem;
    transition: transform 0.5s ease-out;
  }

  .featureCard h5 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 1px;
    margin: 1rem 0;
  }

  .featureCard p {
    color: var(--halfwhite);
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .featureCard {
    width: 70vw;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .featureCard {
    position: absolute;
    width: 88vw;
    height: 24rem;
    padding: 3rem;
  }
}
</style>

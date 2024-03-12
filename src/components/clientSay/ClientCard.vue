<script setup>
const props = defineProps({
  client: Object,
  index: Number,
  currentClient: Number,
});
</script>

<template>
  <article
    class="clientSay_card"
    :style="{
      backgroundColor: `var(--${props.client.backgroundColor})`,
      transform: `translateX(${
        (props.index - props.currentClient + 1) * 108
      }%)`,
    }"
  >
    <figure class="clientSay_figure">
      <img
        :src="`assets/${props.client.image}`"
        :alt="`${props.client.name}`"
      />
      <figcaption class="clientSay_figcap">
        <h5 class="robotoCondensed">{{ props.client.name }}</h5>
        <h6 class="DMsans">{{ props.client.job }}</h6>
      </figcaption>
    </figure>
    <blockquote class="clientSay_blockquote DMsans">
      <p>
        {{ props.client.quote }}
      </p>
    </blockquote>
  </article>
</template>

<style scoped>
/* Desktop */
@media screen {
  .clientSay_card {
    position: absolute;
    padding: 3rem;
    width: 29.375rem;
    height: 32rem;
    transition: transform 0.3s ease-out;
  }

  .clientSay_figure {
    display: flex;
    align-items: center;
    gap: 1.625rem;
    margin-bottom: 6.75rem;
  }

  .clientSay_figure img {
    width: 5rem;
    height: 5rem;
    border-radius: 100px;
  }

  .clientSay_figure h5 {
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .clientSay_blockquote p {
    color: var(--halfwhite);
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .clientSay_card {
    width: 50vw;
    height: 36rem;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .clientSay_card {
    width: 88vw;
    height: 40rem;
  }
}
</style>

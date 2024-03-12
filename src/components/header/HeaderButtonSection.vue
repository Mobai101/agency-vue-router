<script setup>
import OrangeRoundButton from "../utils/OrangeRoundButton.vue";

const props = defineProps({
  currentBanner: Number,
  totalBanner: Number,
});
</script>

<template>
  <div class="navBtnSection">
    <div class="container">
      <div class="navBtnSection_container">
        <OrangeRoundButton type="left" @click="$emit('prevBanner')" />
        <OrangeRoundButton type="right" @click="$emit('nextBanner')" />

        <div class="navBtnSection_pageNo robotoCondensed">
          <b>{{ props.currentBanner }}/{{ totalBanner }}</b>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<style scoped>
/* Desktop */
@media screen {
  .navBtnSection {
    position: relative;
  }

  .navBtnSection_container {
    height: 21.25rem;
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }

  .navBtnSection_pageNo {
    font-size: 1.5rem;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    margin-left: 1rem;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
}

/* Mobile */
@media screen and (max-width: 480px) {
  .navBtnSection_container {
    padding: 4rem 0;
    height: 26rem;
    align-items: flex-end;
  }
}
</style>

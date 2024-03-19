<script setup>
import { ref } from "vue";

const currentSlide = ref(1);

const leftHandler = () => {
  if (currentSlide.value === 1) return;
  currentSlide.value--;
};

const rightHandler = () => {
  if (currentSlide.value === slides.value.length) return;
  currentSlide.value++;
};

const slides = ref([
  {
    name: "AlanaTV",
    subTitle: "Just Move",
    image: "robe.jpg",
    imageDesc: "Robe",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "DianeTV",
    subTitle: "Just Move",
    image: "ladyHigh5.jpg",
    imageDesc: "Lady High Five",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "BlueTV",
    subTitle: "Just Move",
    image: "ladyJumping.jpg",
    imageDesc: "Lady Jumping",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "BlueTV",
    subTitle: "Just Move",
    image: "ladyJumping.jpg",
    imageDesc: "Lady Jumping",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    name: "BlueTV",
    subTitle: "Just Move",
    image: "ladyJumping.jpg",
    imageDesc: "Lady Jumping",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
]);
</script>

<template>
  <div class="container sliderContainer">
    <button class="btn btnLeft" @click="leftHandler">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="24"
        viewBox="0 0 16 24"
      >
        <path
          class="a"
          d="M197.8,206.21a1.673,1.673,0,0,1-.845-.152,1.347,1.347,0,0,1-.65-.444l-7.963-7.963a2.008,2.008,0,0,1-.6-1.5,2.044,2.044,0,0,1,.6-1.441l7.963-7.909a1.991,1.991,0,0,1,1.5-.6,2.072,2.072,0,0,1,1.5.6,2.1,2.1,0,0,1,.6,1.4,2.477,2.477,0,0,1-.6,1.5l-6.522,6.468,6.522,6.522a2.477,2.477,0,0,1,.6,1.5,2.1,2.1,0,0,1-.6,1.441,1.267,1.267,0,0,1-.748.444,1.518,1.518,0,0,1-.748.141Z"
          transform="translate(-187.75 -186.21)"
        />
      </svg>
    </button>
    <button class="btn btnRight" @click="rightHandler">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="24"
        viewBox="0 0 16 24"
      >
        <path
          class="a"
          d="M293.4,206.2a1.423,1.423,0,0,1-.747-.152,1.324,1.324,0,0,1-.747-.444,2.124,2.124,0,0,1-.6-1.44,2.476,2.476,0,0,1,.6-1.494l6.519-6.519-6.519-6.465a2.45,2.45,0,0,1-.6-1.494,2.126,2.126,0,0,1,.6-1.4,2.07,2.07,0,0,1,1.494-.6,2.021,2.021,0,0,1,1.494.6l7.959,7.9a2.062,2.062,0,0,1,.6,1.44,2.024,2.024,0,0,1-.6,1.494l-7.959,7.959a1.194,1.194,0,0,1-.65.444,1.593,1.593,0,0,1-.845.162Z"
          transform="translate(-291.31 -186.2)"
        />
      </svg>
    </button>
    <div
      :class="{
        slideCard: true,
        hideLeft: index + 1 < currentSlide,
        hideRight: index + 1 > currentSlide,
      }"
      v-for="(slide, index) in slides"
      :key="slide.name"
    >
      <!-- <div class="slideCard--image"> -->
      <img
        :src="`moveAssets/${slide.image}`"
        :alt="`${slide.imageDesc}`"
        class="slideCard--image"
      />
      <!-- </div> -->
      <div class="slideCard--textDiv">
        <h3>{{ slide.name }}</h3>
        <h4>{{ slide.subTitle }}</h4>
        <p>{{ slide.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Desktop */
@media screen {
  .sliderContainer {
    height: 315px;
    position: relative;
    margin-top: 3rem;
  }

  .slideCard {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.336);
    z-index: 2;
    background-color: var(--white);
    transition: transform 0.5s;
  }

  .hideLeft {
    opacity: 0.5;
    z-index: 0;
    transform: translate(-60%, -50%) scale(0.9);
  }

  .hideRight {
    opacity: 0.5;
    z-index: 0;
    transform: translate(-40%, -50%) scale(0.9);
  }

  .btn {
    background: transparent;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5rem;
  }

  .btnLeft {
    left: 0%;
  }

  .btnRight {
    right: 0%;
  }

  .slideCard--image {
    height: 100%;
    width: 560px;
  }

  .slideCard--textDiv {
    width: 248px;
  }
}
</style>

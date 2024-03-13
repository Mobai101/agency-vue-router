<script setup>
import { ref, Transition } from "vue";

//#region function to click button to show Youtube video
const isShownYoutube = ref(false);

const openYoutube = () => {
  isShownYoutube.value = true;
  console.log(isShownYoutube.value);
};

const closeYoutube = () => {
  isShownYoutube.value = false;
  console.log(isShownYoutube.value);
};
//#endregion
</script>
<template>
  <section class="advantageSection" id="advantages">
    <div class="container">
      <div class="advantageContainer">
        <!-- Image Div -->
        <Transition name="lady">
          <div class="advantageSection_ImgDiv" v-if="!isShownYoutube">
            <img src="/assets/Group1.png" alt="Lady with book" />
            <button class="advantageSection_ImgDiv_btn" @click="openYoutube">
              <svg
                width="36"
                height="36"
                viewBox="0 0 10 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8L0 16L0 0L10 8Z" fill="currentColor" />
              </svg>
            </button></div
        ></Transition>
        <Transition name="youtube">
          <div class="youtubeDiv" v-if="isShownYoutube">
            <iframe
              src="https://www.youtube.com/embed/888EOAUfbFs?si=w1HsAmQQM0Apc30W"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="youtube"
            ></iframe>
            <button class="closeYoutubeBtn" @click="closeYoutube">
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#0F1729"
                />
              </svg>
            </button>
          </div>
        </Transition>
        <!-- text div -->
        <div class="advantageSection_textDiv">
          <h2 class="inknutAntiqua">Lets take advantage</h2>
          <h3 class="robotoCondensed">Sable cloud beneath was dished</h3>
          <p class="DMsans">
            Best for active freelancers and designers who need more projects and
            premium features code and unlock more.
          </p>
          <div class="advantageSection_btnDiv">
            <button
              class="advantageSection_btn advantage_learnBtn robotoCondensed"
            >
              Learn more
            </button>
            <button class="advantageSection_btn advantage_exploreBtn DMsans">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Desktop */
@media screen {
  .advantageContainer {
    width: 100%;
    padding: 9.25rem 0 20rem 0;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  .advantageSection_ImgDiv {
    position: relative;
    width: calc(1170px / 2);
  }

  .advantageSection_ImgDiv img {
    position: absolute;
    left: -9.5rem;
  }

  .advantageSection_ImgDiv_btn {
    width: 6.875rem;
    height: 6.875rem;
    border: none;
    border-radius: 10rem;
    background-color: var(--white);
    color: var(--orange);
    box-shadow: 0 6px 38px 0 rgba(31, 31, 31, 0.836);
    position: absolute;
    top: 60%;
    right: 53%;
  }

  .youtubeDiv {
    text-align: center;
    width: calc(1170px / 2);
  }

  .youtube {
    width: 35rem;
    height: 19.6875rem;
  }

  .closeYoutubeBtn {
    padding-top: 0.1rem;
    border: none;
    background-color: var(--greyProjectSelect);
    border-radius: 100px;
    height: 3rem;
    width: 3rem;
  }

  .closeYoutubeBtn:hover {
    opacity: 0.6;
  }

  .lady-enter-active {
    transition: opacity 0.5s;
  }

  .lady-enter-from {
    opacity: 0;
  }

  .lady-leave-from {
    display: none;
  }

  .youtube-enter-active {
    transition: transform 0.3s;
  }

  .youtube-enter-from {
    transform: scale(0.6);
  }

  .youtube-leave-from {
    display: none;
  }

  .advantageSection_ImgDiv_btn:hover {
    background-color: var(--whiteHover);
  }

  .advantageSection_ImgDiv_btn svg {
    margin: 1rem 0.625rem 0.625rem 1rem;
  }

  .advantageSection_textDiv {
    width: calc(1170px / 2);
  }

  .advantageSection_textDiv h3 {
    margin: 2rem 0;
  }

  .advantageSection_textDiv p {
    color: var(--halfBlack);
    max-width: 30rem;
  }

  .advantageSection_btn {
    margin-top: 2rem;
    width: 10.625rem;
    height: 3rem;
    border: none;
    border-radius: 3px;
  }

  .advantage_learnBtn {
    background-color: var(--orange);
    color: var(--white);
    letter-spacing: 1px;
  }

  .advantage_learnBtn:hover {
    background-color: var(--orangeHover);
  }

  .advantage_learnBtn:active {
    transform: translateY(4px);
  }

  .advantage_exploreBtn {
    margin-left: 1rem;
    background: none;
  }

  .advantage_exploreBtn:hover {
    text-decoration: underline;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .advantageContainer {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding-bottom: 10rem;
  }

  .advantageSection_ImgDiv_btn {
    top: 40%;
  }

  .advantageSection_ImgDiv {
    height: 35.5rem;
  }

  .youtube {
    width: 90vw;
    height: calc(90vw / (16 / 9));
  }

  .youtubeDiv {
    width: auto;
  }

  .advantageSection_textDiv {
    width: 60vw;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .advantageSection {
    overflow-x: clip;
  }

  .advantageContainer {
    padding: 5rem 0 5rem 0;
    flex-direction: column;
  }

  .youtube {
    width: 88vw;
    height: calc(88vw / (16 / 9));
  }

  .advantageSection_ImgDiv {
    position: relative;
    width: 100%;
    height: 26rem;
  }

  .advantageSection_ImgDiv img {
    transform: translateX(-50%);
    left: 50%;
    max-width: 140%;
  }

  .advantageSection_ImgDiv_btn {
    top: 42%;
    right: 50%;
    transform: translate(50%, -50%);
  }

  .advantageSection_textDiv {
    width: 100%;
  }

  .advantage_exploreBtn {
    width: auto;
  }
}
</style>

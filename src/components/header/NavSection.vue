<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

//#region Show/hide mobile navigation
const isShowingModal = ref(false);
const isShownNav = ref(false);
const openMobileNav = () => {
  isShownNav.value = true;
};

const closeMobileNav = () => {
  isShownNav.value = false;
};

const signUpToggleHandler = () => {
  isShowingModal.value = true;
};

const closeModalHandler = () => {
  isShowingModal.value = false;
};

const submitHandler = (e) => {
  console.log(e);
};

//#endregion
</script>

<template>
  <header class="navSection" id="header">
    <div
      class="navbar_backGround"
      v-if="isShownNav"
      @click="closeMobileNav"
    ></div>
    <div class="overlay" v-if="isShowingModal"></div>
    <div v-if="isShowingModal" class="signUpModal">
      <form @submit.prevent="submitHandler($event)">
        <input type="text" />
        <input type="email" />
        <button>Submit</button>
      </form>
      <button class="closeModal" @click="closeModalHandler">x</button>
    </div>
    <div class="container">
      <div class="navbar">
        <h1 class="robotoCondensed site_title"><a href="/">agency</a></h1>
        <button class="signUpBtn" @click="signUpToggleHandler">Sign Up</button>
        <nav class="navbar_nav DMsans">
          <div class="navbar_nav_items">
            <!-- <a href="#about">About</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Contact</a> -->
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/portfolio">Portfolio</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
          </div>
          <button class="toggleNavBtn" @click="openMobileNav">
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H30V2H0V0ZM8 13H30V15H8V13ZM30 26H16V28H30V26Z"
              />
            </svg>
          </button>
          <div class="navbar_nav_items_mobile" v-if="isShownNav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/portfolio">Portfolio</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <!-- <a href="#about">About</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Contact</a> -->
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Desktop */
@media screen {
  .navSection {
    background-color: var(--black);
    color: var(--white);
    padding: 1rem 0;
  }

  .navbar {
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .site_title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .site_title a {
    color: var(--white);
    text-decoration: none;
  }

  .signUpBtn {
    padding: 0.5rem 1rem;
    background-color: var(--orange);
    color: var(--white);
    border: none;
    border-radius: 5px;
  }

  .signUpBtn:hover {
    background-color: var(--orangeHover);
  }

  .signUpBtn:active {
    transform: translateY(3px);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.63);
    z-index: 9;
  }

  .signUpModal {
    padding: 2rem;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }

  .signUpModal form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .signUpModal form button {
    align-self: center;
    border: none;
    border-radius: 5px;
    background-color: var(--orange);
    padding: 0.5rem 1rem;
    color: var(--white);
  }

  .signUpModal form button:hover {
    background-color: var(--orangeHover);
  }

  .closeModal {
    position: absolute;
    top: 5%;
    right: 5%;
    padding: 0.2rem;
    border: none;
    background-color: transparent;
  }

  .navbar_backGround {
    opacity: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 19;
  }

  .navbar_nav {
    display: flex;
    flex-direction: row;
    gap: 3.75rem;
    align-items: center;
    position: relative;
    overflow-x: hidden;
  }

  /* .hideDesktopNav {
  transform: translateX(150%);
} */

  .navbar_nav_items {
    display: flex;
    flex-direction: row;
    gap: 3.75rem;
    align-items: center;
    transition: transform 0.7s;
  }

  .navbar_nav_items a {
    text-decoration: none;
    color: var(--white);
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
  }

  .navbar_nav_items a:hover {
    text-decoration: underline;
  }

  .router-link-exact-active {
    color: var(--orange) !important;
  }

  .navbar_nav_items_mobile {
    display: none;
  }

  .toggleNavBtn {
    background-color: var(--black);
    padding: 0.5rem;
    border: none;
    color: var(--white);
    position: relative;
    z-index: 10;
    display: none;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
}

/* Mobile */
@media screen and (max-width: 480px) {
  navbar_nav {
    overflow: visible;
  }

  .navbar_nav_items {
    display: none;
  }

  .navbar_nav_items_mobile {
    background-color: var(--white);
    padding: 0.8rem;
    width: 88vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    transform: translate(0, 100%);
    bottom: -0.5rem;
    right: 0;
    z-index: 20;
    font-weight: 500;
  }

  .navbar_nav_items_mobile a {
    text-decoration: none;
    color: var(--black);
  }

  .toggleNavBtn {
    display: block;
  }
}
</style>

<script setup>
import SignUpCard from "./SignUpCard.vue";
</script>

<template>
  <section class="signupSect" id="signup">
    <div class="signupContainer container">
      <!-- Since the "newsletter sign up" in mobile and desktop view are different, I have to duplicate this line, then render them conditionally by media query -->
      <h2 class="inknutAntiqua desktopNewsletter">newsletter sign up</h2>
      <h2 class="inknutAntiqua mobileNewsletter">news letter sign up</h2>

      <SignUpCard />
      <hr />
    </div>
  </section>
</template>

<style scoped>
/* Desktop */
@media screen {
  .signupSect {
    background-color: var(--black);
    color: var(--white);
    padding: 8rem 0;
  }

  .signupContainer {
    position: relative;
  }

  .signupContainer hr {
    background-color: var(--white);
  }

  .signupContainer h2 {
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 900;
    width: 23rem;
    padding-bottom: 6.5rem;
  }

  .desktopNewsletter {
    display: block;
  }

  .mobileNewsletter {
    display: none;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .signupSect {
    padding-bottom: 12rem;
  }

  .signupContainer h2 {
    padding-bottom: 8rem;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .signupSect {
    padding: 6.5rem 0;
  }

  .signupContainer hr {
    display: none;
  }

  .signupContainer h2 {
    width: 88vw;
    padding-bottom: 5rem;
  }

  .desktopNewsletter {
    display: none;
  }

  .mobileNewsletter {
    display: block;
  }
}
</style>

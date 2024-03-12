<script setup></script>

<template>
  <form class="signup_form">
    <label for="email" class="robotoCondensed">get in touch</label>
    <input
      class="DMsans"
      type="email"
      id="email"
      name="email"
      placeholder="Your email"
    />
    <button type="submit" class="robotoCondensed">subscibe</button>
  </form>
</template>

<style scoped>
/* Desktop */
@media screen {
  .signup_form {
    background-color: var(--orange);
    gap: 2rem;
    width: 29.375rem;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    position: absolute;
    right: 10%;
    bottom: -38%;
    z-index: 10;
    border-radius: 3px;
  }

  .signup_form input {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 3px;
  }

  .signup_form button {
    color: var(--white);
    font-weight: 700;
    padding: 0.5rem;
    border: none;
    border-radius: 3px;
    background-color: var(--orangeSubcribe);
  }

  .signup_form button:hover {
    background-color: var(--orangeHover);
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .signup_form {
    width: 50%;
    padding: 2rem;
    right: 0;
    bottom: -60%;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .signup_form {
    width: 88vw;
    position: static;
  }
}
</style>

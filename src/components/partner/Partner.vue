<script setup></script>

<template>
  <div class="partnerSect" id="partner">
    <nav class="container partnerContainer">
      <a href="https://www.atlassian.com/" target="_blank" class="partner__a">
        <img src="/assets/Atlassian.png" alt="Atlassian"
      /></a>
      <a href="https://slack.com/" target="_blank" class="partner__a">
        <img src="/assets/slack.png" alt="Slack"
      /></a>
      <a href="https://www.dropbox.com/" target="_blank" class="partner__a">
        <img src="/assets/Dropbox.png" alt="Dropbox"
      /></a>
      <a href="https://www.shopify.com/" target="_blank" class="partner__a">
        <img src="/assets/shopify.png" alt="shopify"
      /></a>
      <a href="https://www.google.com/" target="_blank" class="partner__a">
        <img src="/assets/google.png" alt="google"
      /></a>
    </nav>
    <hr />
  </div>
</template>

<style scoped>
/* Desktop */
@media screen {
  .partnerSect {
    position: relative;
  }

  .partnerContainer {
    height: 18rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .partner__a:hover {
    opacity: 0.5;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .partnerContainer {
    flex-wrap: wrap;
  }

  .partnerContainer a {
    transform: scale(0.8);
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .partnerContainer {
    padding: 5rem 0;
    height: auto;
    flex-direction: column;
    gap: 3.25rem;
  }

  .partnerContainer a {
    transform: scale(1);
  }
}
</style>

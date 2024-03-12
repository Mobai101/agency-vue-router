<script setup>
const props = defineProps({
  blog: Object,
});
</script>

<template>
  <div class="blog_card">
    <img :src="`assets/${props.blog.image}`" :alt="`${props.blog.title}`" />
    <h4 class="robotoCondensed">{{ props.blog.title }}</h4>
    <p class="robotoCondensed">{{ props.blog.description }}</p>
    <h5 class="DMsans">{{ props.blog.date }}</h5>
  </div>
</template>

<style scoped>
/* Desktop */
@media screen {
  .blog_card {
    width: 23.125rem;
    cursor: pointer;
  }

  .blog_card:hover {
    opacity: 0.7;
  }

  .blog_card img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  .blog_card p {
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 1px;
    line-height: 2rem;
    margin: 0.75rem 0;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .blog_card {
    width: 43vw;
  }

  .blog_card p {
    letter-spacing: 0px;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .blog_card {
    width: 88vw;
  }

  .blog_card img {
    width: 100%;
  }
}
</style>

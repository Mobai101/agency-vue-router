<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params.blogId);
</script>

<template>
  <section class="blogDetailSection">
    <div class="container"></div>
  </section>
</template>

<style scoped></style>

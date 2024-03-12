<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const route = useRoute();
console.log(route.params.blogId);

const blogId = route.params.blogId;
const blogDetail = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("data/blogs.json");
    const result = await response.json();
    blogDetail.value = result.find((blog) => blog.id === blogId);
    console.log(blogDetail.value);
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <section class="blogDetailSection">
    <div class="container">
      <div class="blog_detail" v-if="blogDetail">
        <img :src="`assets/${blogDetail.image}`" :alt="`${blogDetail.title}`" />
        <h4 class="robotoCondensed">{{ blogDetail.title }}</h4>
        <p class="robotoCondensed">{{ blogDetail.description }}</p>
        <h5 class="DMsans">{{ blogDetail.date }}</h5>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen {
  .blog_detail {
    padding: 4rem 0;
    text-align: center;
  }

  .blog_detail img {
    width: 50%;
  }

  .blog_detail h4 {
    font-weight: 700;
    font-size: 1.5rem;
    padding: 1rem 0;
  }
}

@media screen and (max-width: 1170px) {
  .blog_detail img {
    width: 70%;
  }
}

@media screen and (max-width: 480px) {
  .blog_detail img {
    width: 90%;
  }
}
</style>

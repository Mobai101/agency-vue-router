<script setup>
import { ref, onMounted } from "vue";
import BlogCard from "./BlogCard.vue";
import { useRouter } from "vue-router";

let blogs = ref(null);
const router = useRouter();

onMounted(async () => {
  try {
    const response = await fetch("data/blogs.json");
    const result = await response.json();
    blogs.value = result;
  } catch (error) {
    console.log(error);
  }
});

const blogClickHandler = (blogId) => {
  router.push(`/blog/${blogId}`);
};
</script>

<template>
  <section class="blogSection" id="blog">
    <div class="container">
      <div class="blog_textDiv">
        <h2 class="inknutAntiqua">Our latest blog posts</h2>
        <p class="DMsans">
          Minuteness of the parts formed a great hindrance to my speed,
          resolved, contrary to my first intention, to make the being.
          Minuteness of the parts formed a great hindrance to my speed,
          resolved, contrary to my first intention, to make the being.
        </p>
      </div>
      <div class="blog_contentDiv">
        <BlogCard
          v-for="blog in blogs"
          :blog="blog"
          :key="blog.id"
          @click="blogClickHandler(blog.id)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Desktop */
@media screen {
  .blogSection {
    margin: 6.5rem 0;
  }

  .blog_textDiv {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5.5rem;
  }

  .blog_textDiv p {
    max-width: 35.625rem;
  }

  .blog_contentDiv {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.875rem;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .blog_textDiv {
    gap: 2rem;
    align-items: center;
  }

  .blog_textDiv p {
    max-width: 25.625rem;
  }

  .blog_contentDiv {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .blog_textDiv {
    flex-direction: column;
    gap: 3.25rem;
  }

  .blog_contentDiv {
    grid-template-columns: repeat(1, 1fr);
    gap: 4.25rem;
  }
}
</style>

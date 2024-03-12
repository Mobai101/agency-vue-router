<script setup>
import { ref, onMounted, watch } from "vue";
import ProjectCard from "./ProjectCard.vue";

let allProjects = [];
const filteredProjects = ref(null);
const isHiding = ref(true);
const currentCategory = ref("All");
const allCategories = ["All", "Design", "Branding", "Development", "Products"];

// get data from json
onMounted(async () => {
  try {
    const response = await fetch("../../../data/projects.json");
    const result = await response.json();
    allProjects = result;
    filteredProjects.value = allProjects;
  } catch (error) {
    console.log(error);
  }
});

// change filtered projects when current category change, also reset isHiding value to hide item > 2
watch(currentCategory, (newCategory) => {
  isHiding.value = true;
  filteredProjects.value = allProjects.filter((project) => {
    if (newCategory === "All") {
      return true;
    }
    return project.category === newCategory;
  });
});

// change category when click category button in desktop view
const changeToCategory = (category) => {
  currentCategory.value = category;
};

// Load more button
const loadMore = () => {
  isHiding.value = false;
};
</script>

<template>
  <section class="projectSection" id="projects">
    <div class="container">
      <div class="projectsHeader">
        <h2 class="inknutAntiqua">Check our projects</h2>
        <p class="DMsans">
          Minuteness of the parts formed a great hindrance to my speed,
          resolved, contrary to my first intention, to make the being.
          Minuteness of the parts formed a great hindrance to my speed,
          resolved, contrary to my first intention, to make the being.
        </p>
        <hr />
      </div>
      <div class="projectBody">
        <aside class="projectBody_aside">
          <h4 class="robotoCondensed">portfolio</h4>
          <div class="categoryContainer">
            <button
              :class="{
                DMsans: true,
                categoryButton: true,
                activeCategory: category === currentCategory,
              }"
              v-for="category in allCategories"
              :key="category"
              @click="changeToCategory(category)"
            >
              {{ category }}
            </button>
          </div>
          <select
            name="project_categorySelector"
            id="project_categorySelector"
            class="project_categorySelector"
            v-model="currentCategory"
          >
            <option
              :selected="category === currentCategory"
              v-for="category in allCategories"
              :key="category"
            >
              {{ category }}
            </option>
          </select>
        </aside>
        <div class="projectBody_body">
          <div class="projectBody_contentContainer">
            <ProjectCard
              v-for="(project, index) in filteredProjects"
              :project="project"
              :key="project.description"
              :hidden="isHiding && index > 1"
            />
          </div>
          <!-- Load more button -->
          <button
            class="robotoCondensed projectBody_btn"
            @click="loadMore"
            v-if="isHiding && filteredProjects?.length > 2"
          >
            load more
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Desktop */
@media screen {
  .projectSection {
    overflow-x: clip;
  }

  .projectsHeader {
    padding: 6.25rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;
    align-items: center;
    position: relative;
  }

  .projectsHeader h2 {
    margin: 0;
  }

  .projectsHeader p {
    color: var(--halfBlack);
  }

  .projectBody {
    margin: 4.75rem 0;
    display: flex;
    gap: 8.125rem;
  }

  .categoryContainer {
    display: flex;
    flex-direction: column;
    width: 10.625rem;
    gap: 1rem;
    margin-top: 2.25rem;
  }

  .categoryButton {
    height: 3rem;
    width: 10.625rem;
    text-align: start;
    padding: 0;
    border: none;
    background: none;
  }

  .categoryButton:hover {
    text-decoration: underline;
  }

  .activeCategory {
    background-color: var(--black);
    color: var(--white);
    padding: 0 1rem;
    border-radius: 3px;
    animation: growPadding 0.2s ease-out;
  }

  .activeCategory:hover {
    text-decoration: none;
  }

  .project_categorySelector {
    display: none;
  }

  .projectBody_body {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .projectBody_contentContainer {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .projectBody_btn {
    margin-top: 2.25rem;
    align-self: center;
    border: none;
    background-color: var(--orange);
    color: var(--white);
    height: 3rem;
    width: 10.625rem;
    border-radius: 3px;
  }

  .projectBody_btn:hover {
    background-color: var(--orangeHover);
  }

  .projectBody_btn:active {
    transform: translateY(4px);
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .projectBody {
    gap: 3rem;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .projectsHeader {
    grid-template-columns: 1fr;
  }

  .projectBody {
    margin-top: 3rem;
    gap: 5rem;
    flex-direction: column;
  }

  .project_categorySelector {
    margin-top: 0.75rem;
    display: block;
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 3px;
    color: var(--halfBlack);
    border: 1px solid var(--greyProjectSelect);
  }

  .projectBody_aside h4 {
    font-weight: 700;
    letter-spacing: 1px;
  }

  .categoryContainer {
    display: none;
  }
}
</style>

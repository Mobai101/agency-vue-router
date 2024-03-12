<script setup>
import HeaderSection from "@/components/header/HeaderSection.vue";
import FooterSection from "@/components/footer/FooterSection.vue";
import NavSection from "@/components/header/NavSection.vue";

import { RouterView } from "vue-router";
</script>

<template>
  <NavSection />
  <RouterView />
  <FooterSection />
</template>

<style scoped></style>

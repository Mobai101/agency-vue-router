<script setup>
import HeaderSection from "./components/header/HeaderSection.vue";
import Advantage from "./components/advantage/Advantage.vue";
import Feature from "./components/feature/Feature.vue";
import Project from "./components/project/Project.vue";
import ClientSay from "./components/clientSay/ClientSay.vue";
import Partner from "./components/partner/Partner.vue";
import Blog from "./components/blog/Blog.vue";
import SignUp from "./components/signUp/SignUp.vue";
import FooterSection from "./components/footer/FooterSection.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <!-- <HeaderSection />
  <Advantage />
  <Feature />
  <Project />
  <ClientSay />
  <Partner />
  <Blog />
  <SignUp />
  <FooterSection /> -->
</template>

<style scoped></style>

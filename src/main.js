import "./main.css";
import Vue3TouchEvents from "vue3-touch-events";
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import HeaderSection from "./components/header/HeaderSection.vue";
import Project from "./components/project/Project.vue";
import SignUp from "./components/signUp/SignUp.vue";
import LayoutView from "./pages/LayoutView.vue";
import IndexPage from "./pages/IndexPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import BlogDetailPage from "./pages/BlogDetailPage.vue";

const routes = [
  {
    path: "/",
    component: LayoutView,
    children: [
      { path: "", component: IndexPage },
      { path: "/about", component: AboutPage },
      { path: "/portfolio", component: PortfolioPage },
      { path: "/contact", component: ContactPage },
      { path: "/blog/:blogId", component: BlogDetailPage },
    ],
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

const app = createApp(App);
app.use(Vue3TouchEvents);
app.use(router);

app.mount("#app");

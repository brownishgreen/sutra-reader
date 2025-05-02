import { createRouter, createWebHistory } from "vue-router";
import SutraReader from "../components/SutraReader.vue";
import AboutPage from "../components/AboutPage.vue";
import ContactPage from "../components/ContactPage.vue";

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'sutra', component: SutraReader },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/contact', name: 'contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory('/sutra-reader/'),
  routes
})

export default router;
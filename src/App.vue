<template>
  <AppHeader @navigate="handleNavigate" />
  <main>
    <SutraReader v-if="currentPage === 'sutra'" />
    <AboutPage v-else-if="currentPage === 'about'" />
    <ContactPage v-else-if="currentPage === 'contact'" />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import SutraReader from './components/SutraReader.vue'
import AppFooter from './components/AppFooter.vue'

import { ref } from 'vue'
const currentPage = ref('sutra')
const handleNavigate = (page: string) => {
  currentPage.value = page
}


</script>

<style scoped></style>
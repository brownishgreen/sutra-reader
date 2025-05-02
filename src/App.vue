<template>
  <AppHeader @navigate="handleNavigate"/>
  <RouterView />
  <AppFooter v-if="route.name === 'sutra'" :progress="0" />
  <CopyrightFooter v-else />
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import CopyrightFooter from './components/CopyrightFooter.vue'

const route = useRoute()
const router = useRouter()
const handleNavigate = (page: string) => {
  router.push(`/${page}`)
}


</script>

<style scoped></style>
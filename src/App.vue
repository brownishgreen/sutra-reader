<template>
  <AppHeader @navigate="handleNavigate" />
  <RouterView v-slot="{ Component }">
  <component
    :is="Component"
    @update:progress="progress = $event"
  />
</RouterView>

  <AppFooter v-if="route.name === 'sutra'" :progress="progress" />
  <CopyrightFooter v-else />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import CopyrightFooter from './components/CopyrightFooter.vue'

const route = useRoute()
const router = useRouter()
const handleNavigate = (page: string) => {
  router.push(`/${page}`)
}

const progress = ref(0)

</script>

<style scoped></style>
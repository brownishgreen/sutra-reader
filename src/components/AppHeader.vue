<template>
  <header class="app-header">
    <div class="header-content">
      <h1 class="site-title">金剛經 Sutra Reader</h1>
      <nav class="nav-buttons">
        <button @click="showAbout">About</button>
        <button @click="showContact">Contact</button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const showAbout = () => {
  console.log('Show About modal or section')
}

const showContact = () => {
  console.log('Show Contact modal or section')
}
</script>

<style scoped>
.app-header {
  background-color: #f8f8f8;
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.nav-buttons button {
  margin-left: 12px;
  padding: 6px 12px;
  background-color: transparent;
  border: 1px solid #888;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-buttons button:hover {
  background-color: #eee;
}
</style>

<template>
  <header class="app-header">
    <div class="header-content">
      <button class="site-title">金剛經閱讀器 Sutra Reader</button>
      <nav class="nav-buttons">
        <button @click="$emit('navigate', 'about')">About</button>
        <button @click="$emit('navigate', 'contact')">Contact</button>
        <button @click="toggleTheme" class="icon-button" tittle="toggle theme mode">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="currentColor" class="size-6 icon">
            <path
              d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          </svg>

        </button>
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

const toggleTheme = () => {
  console.log('Toggle theme mode (Light/Dark)')
}

defineEmits(['navigate'])
</script>

<style scoped lang="scss">
.app-header {
  background-color: #f8f8f8;
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 6px;
        font-size: 1.5rem;
        border: 0px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
          color: rgb(96, 124, 211);
        }

        &.icon-button {
          width: 36px;
          height: 36px;
          padding: 0;
        }
      }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .site-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
    }

    .nav-buttons {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .icon {
      width: 26px;
      height: 26px;
      color: #333;
    }
  }
}
</style>

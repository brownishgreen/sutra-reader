<template>
  <header class="app-header">
    <div class="header-content">
      <button class="site-title" @click="$emit('navigate', 'home')">金剛經閱讀器 Sutra Reader</button>
      <!--Hamburger-->
      <button class="hamburger" @click="isMenuOpen = !isMenuOpen" ref="hamburgerRef">
      ☰
      </button>
      <transition name="fade-menu">
        <nav 
          class="nav-buttons" 
          :class="{ 'mobile-nav': isMobile, 'desktop-nav': !isMobile}"
          v-show="!isMobile || isMenuOpen"
          ref="menuRef" 
          @mouseleave="isMobile && (isMenuOpen = false)"
        >
        <button @click="$emit('navigate', 'about')">About</button>
        <button @click="$emit('navigate', 'contact')">Contact</button>
        <button @click="toggleTheme" class="icon-button" tittle="toggle theme mode">
          <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="currentColor" class="size-6 icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 icon">
          <path
              d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          </svg>
        </button>
      </nav>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)
const isMobile = ref(window.innerWidth <= 768)
const isDarkMode = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768
}
const menuRef = ref<HTMLElement | null>(null)
const hamburgerRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node
  if (
    menuRef.value &&
    !menuRef.value.contains(target) &&
    hamburgerRef.value &&
    !hamburgerRef.value.contains(target)
  ) {
    isMenuOpen.value = false
  }
}


onMounted(() => {
  window.addEventListener('resize', updateIsMobile)
  document.addEventListener('click', handleClickOutside)
  updateIsMobile()
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

defineEmits(['navigate'])
</script>

<style scoped lang="scss">
.app-header {
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 0 2px rgb(190, 189, 189);
  position: sticky;
  top: 0;
  z-index: 10;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 6px;
        font-size: 1rem;
        border: 0px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.2s;
        color: var(--text-color);

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
      font-size: 1rem;
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
      color: var(--text-color);
    }

    .hamburger {
      display: none;
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    .fade-menu-enter-active,
    .fade-medu-enter-leave {
      transition: opacity .8s ease, transform .8s ease;
    }

    .fade-menu-enter-from,
    .fade-menu-leave-to {
      opacity: 0;
      transform: translateY(-10px);
    }

    .fade-menu-enter-to,
    .fade-menu-leave-from {
      opacity: 1;
      transform: translateY(0)
    }
  }

  //Mobile View
  @media (max-width:768px) {
    .header-content {
      flex-wrap: wrap;

      .hamburger{
        display:block;
      }

      .nav-buttons {
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        background-color: var(--card-bg);
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 20;

        button{
          width:100%;
          justify-content: flex-start;
          padding: 10px 12px;
        }
      }
    }
  }
}
</style>

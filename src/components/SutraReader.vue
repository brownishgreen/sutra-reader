<template>
    <div class="sutra-reader">
      <h2>金剛經誦讀</h2>
      <br>
      <div 
          v-for="item in sutraList" 
          :key="item.id" 
          class="sutra-block"
          :class="{ 'visible': visibleChapters.includes(item.id)}"
      >
        <h3 class="chapter">{{ item.chapter }}</h3>
        <p class="text">{{ item.text }}</p>
        
        <!--Explaination Tooltip-->
        <div class="note-tooltip" v-if="item.note">
          {{ item.note }}
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import sutraData from '../assets/diamond-sutra.json';

const emit = defineEmits<{
  (e: 'update:progress', value: number):void
}>()

interface SutraChapter {
  id: number
  chapter: string
  text: string
  note: string
}
const sutraList = ref<SutraChapter[]>(sutraData)
const visibleChapters = ref<number[]>([])

const updateProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const percent = Math.min(100, Math.round((scrollTop / docHeight) * 100))
  emit('update:progress', percent)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = Number(entry.target.getAttribute('data-id'))
        if (!visibleChapters.value.includes(id)) {
          visibleChapters.value.push(id)
        }
      }
    })
  }, {
    threshold: 0.1  // 進入視窗10%就觸發
  })

  const elements = document.querySelectorAll('.sutra-block')
  elements.forEach((el, index) => {
    el.setAttribute('data-id', String(index + 1))
    observer.observe(el)
  })

  window.addEventListener('scroll', updateProgress)
  updateProgress()
})
</script>

<style scoped lang="scss">
.sutra-reader {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

.sutra-block {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  background: var(--card-bg);
  box-shadow: 0 0 5px rgba(213, 212, 212, 0.716);

  opacity: 0;
  transform: translateY(20px);
  transition: all 3s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .note-tooltip {
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease,visibility 1.5s ease;
    position: absolute;
    top: 10px;
    right: 10px;
    background: #efe8cf;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 350px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    color: #555;
    z-index: 10;
    white-space: pre-line; // \n -> <br>
  }

  &:hover .note-tooltip {
    opacity: 1;
    visibility: visible;
  }
}

.chapter {
  color: #a14f5d;
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.text {
  font-size: 1rem;
  line-height: 1.8;
}

.note {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
  font-style: italic;
}
</style>
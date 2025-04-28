<template>
    <div class="sutra-reader">
      <h2>金剛經誦讀</h2>
      <br>
      <div v-for="item in sutraList" :key="item.id" class="sutra-block">
        <h3 class="chapter">{{ item.chapter }}</h3>
        <p class="text">{{ item.text }}</p>
        <p class="note">{{ item.note }}</p>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import sutraData from '../assets/diamond-sutra.json';

interface SutraChapter {
  id: number
  chapter: string
  text: string
  note: string
}
const sutraList = ref<SutraChapter[]>(sutraData)
</script>

<style scoped lang="scss">
.sutra-reader {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

.sutra-block {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  background: #fff;
}

.chapter {
  color: #a14f5d;
  margin-bottom: 12px;
  font-size: 1.5rem;
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
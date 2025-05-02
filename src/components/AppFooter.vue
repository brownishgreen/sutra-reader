<template>
  <footer>
    <div class="progress-container">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
    <div class="progress-text">誦讀進度 {{ progress }} %</div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ progress: number }>()
</script>

<style scoped lang="scss">
footer {
  background-color: var(--card-bg);
  border-top: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;


  .progress-container {
    width: 70%;
    height: 8px;
    background: #c9c6c6;
    border-radius: 4px;
    overflow: hidden;
    margin: 0 auto;

    .progress-bar {
      height: 100%;
      background: #8fe971;
      transition: width 0.2s ease;
    }
  }

  .progress-text {
    font-size: 14px;
  }
}
</style>

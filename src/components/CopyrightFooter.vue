<template>
  <footer>
    <p>&copy; 2025 yuanologue.com All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
footer {
  background-color: var(--card-bg);
  color: var(--text-color);
  border-top: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1rem;
  }
}
</style>
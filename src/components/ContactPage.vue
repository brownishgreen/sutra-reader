<template>
  <div class="page">
    <img src="/Users/jing-yuanwu/dev/sutra-reader/src/assets/images/1387 (2).jpeg" alt="">
    <h2>如有內容/釋義錯誤，懇請不吝聯絡。</h2>
    <br>
    <p>E-mail: jjjjjimyuan@gmail.com</p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;

  img {
    width: 500px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    img {
      width: 350px;
    }
  }
}
</style>

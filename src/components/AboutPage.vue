<template>
  <div class="about-page">
    <img src="../assets/images/diamond-sutra-cover.jpg" alt="Diamond Sutra Image">
    <p>這是一個關於金剛經的閱讀網站，<br/>
      提供全世界華語人士更易理解的金剛經誦讀體驗。</p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.about-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 1px solid blue;
  height: 100vh;
  margin: 0 auto;

  img {
    width: 80%;
    border-radius: 8px;
  }
  p {
    margin-top: 5%;
    text-align: center;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    img {
      width: 60%;
    }
    p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 30%;
    }

    p{
      font-size: 1.5rem;
    }
  }
}
</style>
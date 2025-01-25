<template>
  <div class="home-view">
    <h1>Welcome to Space Explorer!</h1>
    <p>Explore the universe with stunning images and data from NASA.</p>
    <PictureOfTheDay />
    <div class="watermark">© 2025 - Created by Dominik Ciura</div>
  </div>
</template>

<script>
import PictureOfTheDay from "../components/PictureOfTheDay.vue";

export default {
  name: "HomeView",
  components: {
    PictureOfTheDay,
  },
};
</script>

<style>
h1 {
  color: #2c3e50;
}

.watermark {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  pointer-events: none;
  z-index: 1000;
}
</style>

<template>
  <div>
    <h1>Missions</h1>
    <MissionGallery />
    <div class="watermark">© 2025 - Created by Dominik Ciura</div>
  </div>
</template>

<script>
import MissionGallery from "../components/MissionGallery.vue";

export default {
  name: "MissionsView", // Zmieniona nazwa na wielowyrazową
  components: {
    MissionGallery,
  },
};
</script>

<style>
h1 {
  color: #34495e;
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

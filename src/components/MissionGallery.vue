<template>
  <div>
    <h2>Gallery of NASA Missions</h2>
    <div v-if="missions.length">
      <div v-for="mission in missions" :key="mission.id" class="mission-item">
        <h3>{{ mission.title }}</h3>
        <div class="image-container">
          <img :src="mission.url" :alt="mission.title" />
        </div>
        <p>{{ mission.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading missions...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MissionGallery",
  data() {
    return {
      missions: [],
    };
  },
  created() {
    const apiKey = "fFN6BS500wLa2emr3K6qZXjE1rX2cyv2PdKSPGjE";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.missions = data.map((item) => ({
          id: item.date,
          title: item.title,
          url: item.url,
          description: item.explanation,
        }));
      })
      .catch((error) => console.error("Error fetching data:", error));
  },
};
</script>

<style>
.mission-gallery {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.mission-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  width: 300px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}

.mission-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

.mission-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.mission-card h3 {
  color: #00d1ff;
  font-size: 18px;
}

.mission-card p {
  color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
}

.image-container {
  text-align: center;
  margin-bottom: 15px;
}
</style>

<template>
  <div class="picture-of-the-day">
    <h2>Astronomy Picture of the Day</h2>
    <div v-if="picture">
      <h3>{{ picture.title }}</h3>
      <img :src="picture.url" :alt="picture.title" />
      <p>{{ picture.explanation }}</p>
      <p><strong>Date:</strong> {{ picture.date }}</p>
    </div>
    <div v-else>
      <p>Loading today's picture...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureOfTheDay",
  data() {
    return {
      picture: null,
    };
  },
  created() {
    const apiKey = "fFN6BS500wLa2emr3K6qZXjE1rX2cyv2PdKSPGjE";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.picture = {
          title: data.title,
          url: data.url,
          explanation: data.explanation,
          date: data.date,
        };
      })
      .catch((error) =>
        console.error("Error fetching Picture of the Day:", error)
      );
  },
};
</script>

<style>
.picture-of-the-day {
  padding: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}

.picture-of-the-day:hover {
  transform: scale(1.02);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

.picture-of-the-day img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

.picture-of-the-day h2 {
  font-size: 24px;
  color: #ffa500;
  margin-bottom: 15px;
}

.picture-of-the-day p {
  font-size: 16px;
  color: #ffffff;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .picture-of-the-day h2 {
    font-size: 20px;
  }

  .picture-of-the-day p {
    font-size: 14px;
  }

  .picture-of-the-day img {
    max-width: 100%;
  }
}
</style>

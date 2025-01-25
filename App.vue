<template>
  <div id="app">
    <header>
      <h1>Space Explorer 🚀</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/missions">Missions</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://www.transparenttextures.com/patterns/stardust.png");
  opacity: 0.1;
  z-index: -1;
}

header {
  background: linear-gradient(90deg, #000428, #004e92);
  padding: 15px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

header h1 {
  font-size: 36px;
  color: #ffa500;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}

nav {
  margin-top: 10px;
}

nav a {
  margin: 0 15px;
  font-size: 18px;
}
</style>

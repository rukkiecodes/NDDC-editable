<template>
  <v-app>
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

.main-text {
  font-family: "Source Sans 3", serif
}

.block-text {
  font-family: "Oswald", serif !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  /* Match your theme */
  overscroll-behavior: none;
}

html {
  background-color: #ffffff;
  --nav-bar-color: #ffffff;
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Ensure content is visible under the status bar */
.safe-area {
  padding-top: env(safe-area-inset-top);
  /* iOS notch support */
}

pre {
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: monospace;
  line-height: 1.5;
}

code {
  color: #333;
}
</style>

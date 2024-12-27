<template>
  <v-img :height="height" cover src="@/assets/NDDC.jpg" class="d-flex align-center">
    <v-sheet :height="height" class="d-flex align-center" color="rgba(0,0,0,0.4)">
      <v-container>
        <div>
          <p class="text-white text-h6">Niger Delta Development Commisson</p>
          <div class="mt-5">
            <p class="text-h2 font-weight-bold text-white mb-2">Building a Prosperous Future for</p>
            <p class="text-h2 font-weight-bold text-white">the Niger Delta</p>
          </div>

          <div class="my-5">
            <p class="text-h6 text-white">Together, we're driving impactful change, transforming lives, and empowering
            </p>
            <p class="text-h6 text-white">communities through sustainable development initiatives.</p>
          </div>

          <div class="d-flex">
            <v-btn class="text-capitalize mr-5" color="#038735" :elevation="0">Explore our work</v-btn>
            <v-btn class="text-capitalize" :elevation="0" prepend-icon="mdi-play-circle-outline" variants="outlined">
              Watch our video
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-sheet>
  </v-img>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { name } = useDisplay()

const height = computed(() => {
  switch (name.value) {
    case 'xs': return 300
    case 'sm': return 400
    case 'md': return 550
    case 'lg': return 700
    case 'xl': return 800
    case 'xxl': return 1200
  }

})
</script>
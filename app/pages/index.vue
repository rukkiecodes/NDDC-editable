<template>
  <div>
    <v-parallax :height="height" cover src="@/assets/NDDC.jpg" class="d-flex align-center">
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
    </v-parallax>

    <v-container>
      <v-row>
        <v-col cols="12" sm="3">
          <v-sheet color="#EBF9F1" class="rounded-lg pa-4">
            <v-avatar color="white">
              <v-icon color="#038735">mdi-view-grid-outline</v-icon>
            </v-avatar>

            <p class="text-h3 font-weight-bold my-5" style="color: #038735">16k+</p>
            <p class="text-body-1 text-grey-darken-3">Regional Projects Delivered</p>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="3">
          <v-sheet color="#EBF9F1" class="rounded-lg pa-4">
            <v-avatar color="white">
              <v-icon color="#038735">mdi-view-grid-outline</v-icon>
            </v-avatar>

            <p class="text-h3 font-weight-bold my-5" style="color: #038735">60%</p>
            <p class="text-body-1 text-grey-darken-3">Capital Projects</p>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="3">
          <v-sheet color="#EBF9F1" class="rounded-lg pa-4">
            <v-avatar color="white">
              <v-icon color="#038735">mdi-view-grid-outline</v-icon>
            </v-avatar>

            <p class="text-h3 font-weight-bold my-5" style="color: #038735">26%</p>
            <p class="text-body-1 text-grey-darken-3">Both Private & Domestic Land</p>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="3">
          <v-sheet color="#EBF9F1" class="rounded-lg pa-4">
            <v-avatar color="white">
              <v-icon color="#038735">mdi-view-grid-outline</v-icon>
            </v-avatar>

            <p class="text-h3 font-weight-bold my-5" style="color: #038735">3000+</p>
            <p class="text-body-1 text-grey-darken-3">Rural Projects</p>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col cols="12" sm="6" class="d-flex align-center">
          <div>
            <p class="text-h3 font-weight-bold">We're on a <span style="color: #038735;">misson</span> of big changes to
              <span style="color: #038735;">help</span> the people and
              <span style="color: #038735;">improve</span> Niger Delta
            </p>

            <p class="text-grey-darken-3 mt-5 text-body-1">Get current updates on our Projects and Programs cut accross
              the
              Nine States of the Niger Delta Region, gain deep insights and analysis of developmental trends within the
              region and the impact of our Projects and Programs on our people along developmental projections.</p>

            <v-btn
append-icon="mdi-arrow-right" class="mt-5 rounded-0" variant="outlined"
              style="border-color: #038735; text-transform: none;">
              Read more about who we are
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" sm="6">
          <v-img src="@/assets/1.png" />
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col cols="12" sm="7">
          <v-row>
            <v-col cols="12" sm="6">
              <v-sheet class="pa-4" border="md" style="border-color: #038735;" rounded="xl">
                <v-sheet class="d-flex justify-center align-center" color="#038735" width="90" height="90" rounded="xl">
                  <v-icon size="30">mdi-account-group</v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p class="text-h5 font-weight-bold">Youth</p>
                  <p class="text-h5 font-weight-bold">Empowerment</p>
                </div>

                <p class="text-grey-darken-3 my-5">Explore our website to unveil our steadfast dedication to fostering
                  sustainable development.</p>

                <v-btn
class="text-capitalize text-green-darken-4 font-weight-bold" variant="text"
                  append-icon="mdi-arrow-right">Read more</v-btn>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="6">
              <v-sheet class="pa-4" border="md" style="border-color: #038735;" rounded="xl">
                <v-sheet class="d-flex justify-center align-center" color="#038735" width="90" height="90" rounded="xl">
                  <v-icon size="30">mdi-human-female-female</v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p class="text-h5 font-weight-bold">Women</p>
                  <p class="text-h5 font-weight-bold">Empowerment</p>
                </div>

                <p class="text-grey-darken-3 my-5">Explore our website to unveil our steadfast dedication to fostering
                  sustainable development.</p>

                <v-btn
class="text-capitalize text-green-darken-4 font-weight-bold" variant="text"
                  append-icon="mdi-arrow-right">Read more</v-btn>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="6">
              <v-sheet class="pa-4" border="md" style="border-color: #038735;" rounded="xl">
                <v-sheet class="d-flex justify-center align-center" color="#038735" width="90" height="90" rounded="xl">
                  <v-icon size="30">mdi-asterisk</v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p class="text-h5 font-weight-bold">Medical</p>
                  <p class="text-h5 font-weight-bold">Outreach</p>
                </div>

                <p class="text-grey-darken-3 my-5">Explore our website to unveil our steadfast dedication to fostering
                  sustainable development.</p>

                <v-btn
class="text-capitalize text-green-darken-4 font-weight-bold" variant="text"
                  append-icon="mdi-arrow-right">Read more</v-btn>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="6">
              <v-sheet class="pa-4" border="md" style="border-color: #038735;" rounded="xl">
                <v-sheet class="d-flex justify-center align-center" color="#038735" width="90" height="90" rounded="xl">
                  <v-icon size="30">mdi-leaf-circle-outline</v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p class="text-h5 font-weight-bold">Agricultural</p>
                  <p class="text-h5 font-weight-bold">Development</p>
                </div>

                <p class="text-grey-darken-3 my-5">Explore our website to unveil our steadfast dedication to fostering
                  sustainable development.</p>

                <v-btn
class="text-capitalize text-green-darken-4 font-weight-bold" variant="text"
                  append-icon="mdi-arrow-right">Read more</v-btn>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="5">
          <v-sheet class="pa-4" border="md" style="border-color: #038735;" rounded="xl">
            <v-img class="rounded-xl pa-4" aspect-ratio="16/9" :height="440" cover src="@/assets/2.jpg">
              <v-sheet class="d-flex justify-center align-center" color="#038735" width="90" height="90" rounded="xl">
                <v-icon size="30">mdi-account-school</v-icon>
              </v-sheet>
            </v-img>

            <p class="text-h5 font-weight-bold mt-5">Agricultural</p>
            <p class="text-grey-darken-3 my-5">Explore our website to unveil our steadfast dedication to fostering
              sustainable development.</p>

            <v-btn
class="text-capitalize text-green-darken-4 font-weight-bold" variant="text"
              append-icon="mdi-arrow-right">Read more</v-btn>
          </v-sheet>
        </v-col>
      </v-row>

      <div class="mt-16">
        <p class="text-green-darken-3 font-weight-bold text-body-1">Our Programs</p>
        <p class="text-h4 font-weight-black my-3">Ongoing Programs</p>
        <v-sheet width="600">
          <p class="text-grey-darken-3 text-body-2">Get current updates on our Projects and Programs cut accross the
            Nine States of the Niger Delta Region,
            gain
            deep insights and analysis of developmental trends</p>
        </v-sheet>

        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
            <v-sheet :class="['ma-4', selectedClass]" color="grey-lighten-1" width="300" rounded="xl" @click="toggle">
              <v-img src="@/assets/2.jpg" class="d-flex align-end rounded-lg" cover height="300">
                <div class="blur_card pa-4">
                  <div class="d-flex justify-space-between mb-5">
                    <span class="text-white text-body-1">20 July, 2024</span>
                    <span class="text-white text-body-1">Health</span>
                  </div>

                  <p class="text-white text-h5 font-weight-black">NDDC Maternal Health Development Program</p>
                </div>
              </v-img>
            </v-sheet>
          </v-slide-group-item>
        </v-slide-group>
      </div>

      <div class="mt-16">
        <v-sheet width="600" class="text-center mx-auto">
          <p class="text-green-darken-3 font-weight-bold text-body-1">Our Projects</p>
          <p class="text-h4 font-weight-black my-3">View Some of Our Completer Projects in the Region</p>

          <p class="text-body-2">From bolstering infrastructure to advancing social welfare
            initiatives, we are steadfastly committed to creating opportunities and enhancing livelihood...</p>

          <v-btn
class="text-capitalize" :elevation="0" rounded="0" color="green-darken-4"
            append-icon="mdi-arrow-right">
            View all Projects
          </v-btn>
        </v-sheet>

        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
            <v-sheet :class="['ma-4', selectedClass]" color="grey-lighten-1" width="300" rounded="xl" @click="toggle">
              <v-img src="@/assets/2.jpg" class="d-flex align-end rounded-lg" cover height="300" />
            </v-sheet>
          </v-slide-group-item>
        </v-slide-group>
      </div>

      <div class="mt-16">
        <v-sheet class="d-flex justify-space-between align-center">
          <v-sheet width="500">
            <p class="text-green-darken-3 font-weight-bold text-body-1">News and Updates</p>
            <p class="text-h4 font-weight-black my-3">Featured Articles</p>

            <p class="text-grey-darken-3 text-body-2">Get current updates on our Projects and Programs cut accross the
              Nine States of the Niger Delta Region,
              gain
              deep insights and analysis of developmental trends</p>
          </v-sheet>

          <v-btn
class="text-capitalize text-green-darken-3 font-weight-bold" variant="outlined" rounded="0"
            style="border-color: #038735;">See All</v-btn>
        </v-sheet>

        <v-row class="mt-10">
          <v-col cols="12" sm="4">
            <v-sheet border="sm">
              <v-img src="@/assets/2.jpg" cover height="300" />

              <div class="pa-5">
                <p class="text-h6 font-weight-black mb-5">132KV Transmission Line and Substation in Abia State</p>
                <p class="text-grey-darken-3 text-body-2 mb-2">The NDDC's state-of-the-art 132KV transmission line and
                  substation project will transform energy...
                </p>

                <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                  style="text-transform: none;">Click here to read the full article</v-btn>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="4">
            <v-sheet border="sm">
              <v-img src="@/assets/2.jpg" cover height="300" />

              <div class="pa-5">
                <p class="text-h6 font-weight-black mb-5">132KV Transmission Line and Substation in Abia State</p>
                <p class="text-grey-darken-3 text-body-2 mb-2">The NDDC's state-of-the-art 132KV transmission line and
                  substation project will transform energy...
                </p>

                <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                  style="text-transform: none;">Click here to read the full article</v-btn>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="4">
            <v-sheet border="sm">
              <v-img src="@/assets/2.jpg" cover height="300" />

              <div class="pa-5">
                <p class="text-h6 font-weight-black mb-5">132KV Transmission Line and Substation in Abia State</p>
                <p class="text-grey-darken-3 text-body-2 mb-2">The NDDC's state-of-the-art 132KV transmission line and
                  substation project will transform energy...
                </p>

                <v-btn
class="text-green-darken-3" variant="text" append-icon="mdi-arrow-right"
                  style="text-transform: none;">Click here to read the full article</v-btn>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>

      <div class="mt-16 d-flex justify-space-between">
        <div class="left d-flex justify-start align-center">
          <v-icon class="mr-5" size="90" color="green-darken-4">mdi-email</v-icon>
          <div>
            <p class="text-h5 font-weight-thin text-green-darken-3">Stay Connected</p>
            <p class="text-h4 font-weight-bold text-green-darken-3 mt-4">Join our Newsletter to stay updated</p>
          </div>
        </div>

        <div class="right d-flex">
          <v-sheet class="pa-2 d-flex align-center" border="sm" height="40">
            <input type="text" placeholder="Enter your email address" class="contact-input">
          </v-sheet>
          <v-btn rounded="0" color="green-darken-4" height="40" :elevation="0">Subscribe</v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { name } = useDisplay();
const model = null;

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

<style>
.blur_card {
  backdrop-filter: blur(23px) saturate(200%);
  -webkit-backdrop-filter: blur(23px) saturate(200%);
  background-color: rgba(17, 25, 40, 0);
}

.contact-input {
  outline: none;
}
</style>
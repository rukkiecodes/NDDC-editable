<template>
  <v-app>
    <v-main>
      <v-app-bar
        :elevation="0"
        color="white"
      >
        <template #prepend>
          <v-img
            cover
            src="@/assets/NDDCNewLogo.jpg"
            :width="250"
          />
        </template>

        <v-btn
          class="text-capitalize mr-5"
          to="/"
          variant="text"
        >
          Home
        </v-btn>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              color="dark"
              class="text-capitalize mr-5"
              v-bind="props"
            >
              The Commission
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              to="/whoWeAre"
              value="About Us"
            >
              <v-list-item-title>About Us</v-list-item-title>
            </v-list-item>
            <v-list-item value="Mission Statement">
              <v-list-item-title>Mission Statement</v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/theBoard"
              value="The Board"
            >
              <v-list-item-title>The Board</v-list-item-title>
            </v-list-item>
            <v-list-item value="The Management Team">
              <v-list-item-title>The Management Team</v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/ourPeople"
              value="Our People"
            >
              <v-list-item-title>Our People</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              color="dark"
              class="text-capitalize mr-5"
              v-bind="props"
            >
              Our Projects
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(project, index) in projects"
              :key="index"
              :to="`projects/${project}`"
              value="Road Construction"
            >
              <v-list-item-title>Road Construction</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              color="dark"
              class="text-capitalize mr-5"
              v-bind="props"
            >
              Our Programs
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(program, index) in programs.programs"
              :key="index"
              :value="program"
              :to="`/${program}`"
            >
              <v-list-item-title>{{ program }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              color="dark"
              class="text-capitalize mr-5"
              v-bind="props"
            >
              E-Services
            </v-btn>
          </template>
          <v-list>
            <v-list-item value="Online Forms">
              <v-list-item-title>Online Forms</v-list-item-title>
            </v-list-item>
            <v-list-item value="Adverts">
              <v-list-item-title>Adverts</v-list-item-title>
            </v-list-item>
            <v-list-item value="i-Report">
              <v-list-item-title>i-Report</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              to="/media"
              color="dark"
              class="text-capitalize mr-5"
              v-bind="props"
            >
              Media
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              to="/media"
              value="News and Updates"
            >
              <v-list-item-title>News and Updates</v-list-item-title>
            </v-list-item>
            <v-list-item value="Press Releases">
              <v-list-item-title>Press Releases</v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/mediaGallery"
              value="Media Gallery"
            >
              <v-list-item-title>Media Gallery</v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/publication"
              value="Publications"
            >
              <v-list-item-title>Publications</v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/eventCalendar"
              value="Events Calendar"
            >
              <v-list-item-title>Events Calendar</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          class="text-capitalize mr-5"
          variant="text"
        >
          Contact Us
        </v-btn>

        <v-btn
          class="text-capitalize mr-5"
          color="green-darken-3"
          to="/newPost"
        >
          New Post
        </v-btn>
      </v-app-bar>

      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script>
import { db } from '@/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

export default {
  data: () => ({
    programs: null,
    projects: null
  }),

  mounted () {
    this.getRealTimeProgramsUpdate()
    this.getRealTimeProjectUpdate()
  },

  methods: {
    async getRealTimeProgramsUpdate () {
      const unsub = onSnapshot(doc(db, 'web', 'ourPrograms'), (doc) => {
        this.programs = doc.data();
      });

      return unsub
    },

    async getRealTimeProjectUpdate () {
      const unsub = onSnapshot(doc(db, 'web', 'ourProjects'), (doc) => {
        this.projects = doc.data();
      });

      return unsub
    },
  },
}
</script>

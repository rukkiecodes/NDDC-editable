<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      width="400"
      order="1"
      border="0"
    >
      <v-list-item
        link
        title="Home"
        to="/"
        prepend-icon="mdi-home"
        class="mx-5 my-5 rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
        active-class="text-green-darken-3"
      />
      
      <v-expansion-panels
        v-model="expanded"
        :elevation="0"
      >
        <v-expansion-panel
          v-for="(panel, index) in leftDrawer"
          :key="index"
        >
          <v-expansion-panel-title class="main-text text-body-2 text-sm-body-1 font-weight-bold">
            {{ panel.title }}
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item
              v-for="(item, i) in panel.routes"
              :key="i"
              :to="item.to"
              class="rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
              active-class="text-green-darken-3"
            >
              <v-list-item-title
                class="main-text text-body-2 text-sm-body-1"
                v-text="item.title"
              />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <!--  -->
      </v-expansion-panels>
    </v-navigation-drawer>

    <v-app-bar
      :elevation="0"
      color="white"
      class="px-sm-16"
      height="70"
    >
      <template #prepend>
        <v-img
          cover
          src="@/assets/NDDCNewLogo_nobg.jpg"
          :width="250"
        />
      </template>

      <div v-if="showAppBar">
        <router-link
          to="/"
          :class="{
            'text-grey-darken-3': $route.path !== '/',
            'text-green-darken-3': $route.path === '/',
            'text-decoration-none': true,
            'border-b-md border-opacity-100 border-success': $route.path === '/',
            'text-green-darken-3': true,
            'py-2': true
          }"
        >
          Home
        </router-link>
  

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <router-link
              v-bind="props"
              to="/projects"
              class="mx-4"
              :class="{
                'text-grey-darken-3': $route.path !== `/projects/${projects?.project[0]}`,
                'text-green-darken-3': $route.path === `/projects/${projects?.project[0]}`,
                'text-decoration-none': true,
                'border-b-md border-opacity-100 border-success': $route.path === `/projects/${projects?.project[0]}`,
                'text-green-darken-3': true,
                'py-2': true
              }"
            >
              Our Projects
            </router-link>
          </template>
          <v-card
            color="green-lighten-5"
            rounded="0"
            width="150"
          >
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link
                v-for="(project, index) in projects?.project"
                :key="index"
                :to="`/projects/${project}`"
                style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== `/projects/${project}`,
                  'text-green-darken-3': $route.path === `/projects/${project}`,
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === `/projects/${project}`,
                  'text-green-darken-3': true,
                  'py-4': true
                }"
              >
                {{ project }}
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <router-link
              v-bind="props"
              :to="`/programs/${programs?.programs[0]}`"
              class="mx-4"
              :class="{
                'text-grey-darken-3': $route.path !== `/programs/${programs?.programs[0]}`,
                'text-green-darken-3': $route.path === `/programs/${programs?.programs[0]}`,
                'text-decoration-none': true,
                'border-b-md border-opacity-100 border-success': $route.path === `/programs/${programs?.programs[0]}`,
                'text-green-darken-3': true,
                'py-2': true
              }"
            >
              Our Programs
            </router-link>
          </template>
          <v-card
            color="green-lighten-5"
            rounded="0"
            width="150"
          >
            <v-card-text class="d-flex flex-column justify-start align-start pa-0">
              <router-link
                v-for="(program, index) in programs.programs"
                :key="index"
                :to="`/programs/${program}`"
                style="width: 100%;"
                class="px-2 border-b-sm border-opacity-50 border-success"
                :class="{
                  'text-grey-darken-3': $route.path !== `/programs/${program}`,
                  'text-green-darken-3': $route.path === `/programs/${program}`,
                  'text-decoration-none': true,
                  'border-b-sm border-opacity-100 border-success': $route.path === `/programs/${program}`,
                  'text-green-darken-3': true,
                  'py-4': true
                }"
              >
                {{ program }}
              </router-link>
            </v-card-text>
          </v-card>
        </v-menu>

        <router-link
          to="/contact"
          class="mx-4"
          :class="{
            'text-grey-darken-3': $route.path !== '/contact',
            'text-green-darken-3': $route.path === '/contact',
            'text-decoration-none': true,
            'border-b-md border-opacity-100 border-success': $route.path === '/contact',
            'text-green-darken-3': true,
            'py-2': true
          }"
        >
          Contact Us
        </router-link>
      </div>

      <v-app-bar-nav-icon
        v-if="!showAppBar"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { db } from '@/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useDisplay } from 'vuetify';

export default {
  setup () {
    const programs = ref(null);
    const projects = ref(null);
    const drawer = ref(true);
    const { name } = useDisplay();
    const expanded = ref([0, 1, 2])

    const leftDrawer = [
      {
        title: 'Add content',
        routes: [
          { title: 'Add a Project', to: '/addProject' },
          { title: 'Add a program', to: '/addProgram' },
          { title: 'Add a new post', to: '/newPost' },
        ]
      },
      {
        title: 'I-Report',
        routes: [
          { title: 'I-Report', to: '/iReport' },
        ]
      }
    ]

    const getRealTimeProgramsUpdate = async () => {
      const unsub = onSnapshot(doc(db, 'web', 'ourPrograms'), (doc) => {
        programs.value = doc.data();
      });
      return unsub;
    };

    const getRealTimeProjectUpdate = async () => {
      const unsub = onSnapshot(doc(db, 'web', 'ourProjects'), (doc) => {
        projects.value = doc.data();
      });
      return unsub;
    };

    const showAppBar = computed(() => {
      // Compute app bar visibility based on screen size
      switch (name.value) {
        case 'xs':
        case 'sm':
        case 'md':
          return false;
        case 'lg':
        case 'xl':
        case 'xxl':
          return true;
        default:
          return false; // Fallback for unexpected values
      }
    });

    onMounted(() => {
      getRealTimeProgramsUpdate();
      getRealTimeProjectUpdate();
    });

    return {
      programs,
      projects,
      drawer,
      showAppBar,
      leftDrawer,
      expanded
    };
  },
};
</script>


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

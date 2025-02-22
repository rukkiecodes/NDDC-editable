<template>
  <div>
    <v-navigation-drawer v-model="drawer" location="left" width="400" order="1" border="0">
      <v-list-item link title="Home" to="/" prepend-icon="mdi-home"
        class="mx-5 my-5 rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
        active-class="text-green-darken-3" />

      <v-expansion-panels v-model="expanded" :elevation="0">
        <v-expansion-panel v-for="(panel, index) in leftDrawer" :key="index">
          <v-expansion-panel-title class="main-text text-body-2 text-sm-body-1 font-weight-bold">
            {{ panel.title }}
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-list-item v-for="(item, i) in panel.routes" :key="i" :to="item.to"
              class="rounded-lg main-text text-body-2 text-sm-body-1 font-weight-bold"
              active-class="text-green-darken-3">
              <v-list-item-title class="main-text text-body-2 text-sm-body-1" v-text="item.title" />
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <!--  -->
      </v-expansion-panels>
    </v-navigation-drawer>

    <v-app-bar :elevation="0" color="white" class="px-sm-16" height="70">
      <template #prepend>
        <v-img cover src="@/assets/NDDCNewLogo_nobg.jpg" :width="250" />
      </template>

      <v-app-bar-nav-icon v-if="!showAppBar" @click="drawer = !drawer" />
    </v-app-bar>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
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

      window.scrollTo(0, 1);
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
</style>

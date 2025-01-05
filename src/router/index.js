// Existing imports
import { createRouter, createWebHistory } from "vue-router";

// Static Routes
import Layout from "@/layouts/default.vue";
import Home from "@/pages/home.vue";
import Login from "@/pages/index.vue";
import Program from "@/pages/program.vue";
import AddProgram from "@/pages/addProgram.vue";
import addProjectVue from "@/pages/addProject.vue";
import projectVue from "@/pages/project.vue";
import projectsLayoutVue from "@/layouts/projectsLayout.vue";
import newPostVue from "@/pages/newPost.vue";
import mediaVue from "@/pages/media.vue";

const staticRoutes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "home",
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "index",
        component: Home,
      },
      {
        path: "addProgram",
        name: "addProgram",
        component: AddProgram,
      },
      {
        path: "media",
        name: "media",
        component: mediaVue,
      },
      {
        path: "projects",
        name: "projects",
        component: projectsLayoutVue,
        children: [
          {
            path: ":project",
            name: "project",
            component: projectVue,
          },
        ],
      },
      {
        path: "addProject",
        name: "addProject",
        component: addProjectVue,
      },
      {
        path: "newPost",
        name: "newPost",
        component: newPostVue,
      },
      {
        path: ":program",
        component: Program,
      },
    ],
  },
  // Add other static routes here
];

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
});

// Function to dynamically add a route
export function addDynamicRoute(route) {
  if (!router.hasRoute(route.name)) {
    router.addRoute(route); // Dynamically adds the route
    console.log(`Dynamic route added: ${route.name}`);
  }
}

// Navigation Guard
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem("NDDC_user") || "null");

  if (to.meta.requiresAuth && !user) {
    next("/login");
  } else if (to.path === "/login" && user) {
    next("/");
  } else {
    next();
  }
});

// Handle dynamic import errors
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;

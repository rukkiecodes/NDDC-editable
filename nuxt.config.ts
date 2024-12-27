// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '', // Private runtime config (not exposed to the client)
    public: {
      // Public runtime config (exposed to the client)
      NUXT_apiKey: process.env.NUXT_apiKey || '',
      NUXT_authDomain: process.env.NUXT_authDomain || '',
      NUXT_projectId: process.env.NUXT_projectId || '',
      NUXT_storageBucket: process.env.NUXT_storageBucket || '',
      NUXT_messagingSenderId: process.env.NUXT_messagingSenderId || '',
      NUXT_appId: process.env.NUXT_appId || '',
      NUXT_measurementId: process.env.NUXT_measurementId || '',
    },
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  ssr: true,

  // when enabling ssr option you need to disable inlineStyles and maybe devLogs
  features: {
    inlineStyles: false,
    devLogs: false,
  },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },

  css: [],
  modules: ['@nuxt/fonts', 'vuetify-nuxt-module', '@nuxt/eslint', '@pinia/nuxt'],

  vuetify: {
    moduleOptions: {
      // check https://nuxt.vuetifyjs.com/guide/server-side-rendering.html
      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: true,
        prefersColorScheme: false,

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
      },

      // /* If customizing sass global variables ($utilities, $reset, $color-pack, $body-font-family, etc) */
      // disableVuetifyStyles: true,
      styles: {
        configFile: 'assets/settings.scss',
      },
    },
  },
})
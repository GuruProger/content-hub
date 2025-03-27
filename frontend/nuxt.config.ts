import Material from "@primeuix/themes/material"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@primevue/nuxt-module", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      "Roboto Mono": {
        display: "block",
        wght: "400..900"
      }
    },
    download: false
  },

  primevue: {
    usePrimeVue: false,
    autoImport: false,
    components: {
      prefix: "Prime",
      include: "*",
      exclude: ["Form", "FormField", "Editor", "Chart"]
    },
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Material
      }
    }
  },

  components: {
    dirs: []
  },

  imports: {
    autoImport: false
  },

  devServer: {
    port: 3000
  },

  vite: {
    server: {
      watch: {
        usePolling: true
      },
      allowedHosts: true,
      strictPort: true
    }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["reka-ui/nuxt", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      "Roboto Mono": {
        display: "block",
        wght: "400..900"
      }
    },
    download: false
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

  vue: {
    propsDestructure: true
  },

  pages: {
    enabled: true
  },

  vite: {
    define: {
      "process.env.USER_BASE_URL": JSON.stringify(process.env.USER_BASE_URL)
    },
    server: {
      watch: {
        usePolling: true
      },
      allowedHosts: true,
      strictPort: true
    }
  }
})

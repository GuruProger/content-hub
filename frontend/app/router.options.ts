import type { RouterConfig } from "@nuxt/schema"
import Auth from "../pages/auth/auth.vue"
import Register from "../pages/auth/register.vue"
import Home from "../pages/home.vue"

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: _routes => [
    {
      name: "home",
      path: "/",
      component: Home
    },
    {
      name: "auth",
      path: "/auth",
      component: Auth
    },
    {
      name: "register",
      path: "/register",
      component: Register
    }
  ]
} satisfies RouterConfig

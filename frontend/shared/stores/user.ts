import { defineStore } from "pinia"
import { computed, ref } from "vue"
import type { UserSuccessResponse } from "~/app-modules/auth"
import type { Utils } from "~/shared/utils-types"

export let token = ""

export type User = Utils.Omit<UserSuccessResponse, "created_at"> | null

export const useUserStore = defineStore("user", () => {
  const user = ref<User>(null)

  function logout() {
    user.value = null
    token = ""
  }

  function login(userResponse: UserSuccessResponse, accessToken: string) {
    const { created_at: _, ...otherUser } = userResponse
    user.value = otherUser
    token = accessToken
  }

  const isLogin = computed(() => !!user.value)

  return { user, isLogin, login, logout }
})

<script setup lang="ts">
import { useRouter } from "#app"
import { computed, onMounted, onUnmounted, ref } from "vue"
import UButton from "~/shared/ui/UButton.vue"
import { useFieldValid } from "../composables/useFieldValid"
import { FIELD_RANGES } from "../config"
import { createUserFetch, isErrorResponse, type User } from "../helpers/api"
import {
  checkValidAvatar,
  checkValidBio,
  checkValidEmail,
  checkValidPassword,
  checkValidUsername,
  type FieldError
} from "../helpers/validators"
import UploadFile from "./file/UploadFile.vue"
import FormInfo from "./FormInfo.vue"
import FormInput from "./FormInput.vue"
import FormTextarea from "./FormTextarea.vue"

const userData = ref<User>({
  username: "",
  email: "",
  password: "",
  bio: "",
  avatar: null
})

const { isUserDataValid, errors } = useFormValid()

const router = useRouter()

async function onSubmit(e: Event) {
  if (!isUserDataValid.value) return
  const formData = new FormData(e.currentTarget as HTMLFormElement)
  if (!userData.value.bio) formData.delete("bio")
  if (!userData.value.avatar) formData.delete("avatar")
  const data = await createUserFetch(formData)
  if (isErrorResponse(data)) return
  router.push("/auth")
}

const { activeField, changeActiveField } = useActiveField()

function useActiveField() {
  const activeField = ref<keyof User | null>(null)

  function changeActiveField(e: Event) {
    const target = e.target as HTMLTextAreaElement | HTMLInputElement
    if (target.name in userData.value) activeField.value = target.name as keyof User
    else activeField.value = null
  }

  onMounted(() => {
    window.addEventListener("click", changeActiveField)
  })

  onUnmounted(() => {
    window.removeEventListener("click", changeActiveField)
  })

  return { activeField, changeActiveField }
}

function useFormValid() {
  const [usernameCheckResult, isUsernameValid] = useFieldValid(() => userData.value.username, checkValidUsername)
  const [emailCheckResult, isEmailValid] = useFieldValid(() => userData.value.email, checkValidEmail)
  const [passwordCheckResult, isPasswordValid] = useFieldValid(() => userData.value.password, checkValidPassword)
  const [bioCheckResult, isBioValid] = useFieldValid(() => userData.value.username, checkValidBio)
  const [fileCheckResult, isFileValid] = useFieldValid(() => userData.value.avatar, checkValidAvatar)

  const errors = computed(
    () =>
      ({
        username: isUsernameValid.value ? null : usernameCheckResult.value,
        email: isEmailValid.value ? null : emailCheckResult.value,
        password: isPasswordValid.value ? null : passwordCheckResult.value,
        bio: isBioValid.value ? null : bioCheckResult.value,
        avatar: isFileValid.value ? null : fileCheckResult.value
      } as Record<keyof User, null | FieldError>)
  )

  const isUserDataValid = computed(
    () => isUsernameValid.value && isPasswordValid.value && isEmailValid.value && isBioValid.value && isFileValid.value
  )

  return {
    errors,
    isUserDataValid
  }
}
</script>

<template>
  <form @focusin="changeActiveField" @submit.prevent="onSubmit" class="register-form">
    <UploadFile v-model="userData.avatar!" />

    <div class="register-form__inputs">
      <FormInput
        v-model="userData.username"
        name="username"
        type="text"
        placeholder="(username)"
        v-bind="FIELD_RANGES.username"
      />
      <FormInput
        v-model="userData.password"
        name="password"
        type="password"
        placeholder="(password)"
        v-bind="FIELD_RANGES.password"
      />
      <FormInput v-model="userData.email" name="email" type="email" placeholder="(email)" />
      <FormTextarea v-model="userData.bio" name="bio" placeholder="(bio)" />

      <UButton type="submit" :disabled="!isUserDataValid">Create account</UButton>
    </div>

    <FormInfo
      :active-field
      :error="activeField && errors[activeField]"
      :is-success="isUserDataValid"
      class="register-form__info"
    />
  </form>
</template>

<style scoped>
.register-form {
  margin: 0 auto;
  padding: 30px;
  display: grid;
  grid-template-columns: max-content minmax(250px, 480px) 320px;
  grid-template-rows: 1fr;
  gap: 30px;
}

.register-form__inputs {
  max-width: 480px;
  width: 100%;
  min-width: 250px;

  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
}

.register-form__info {
  align-self: end;
}
</style>

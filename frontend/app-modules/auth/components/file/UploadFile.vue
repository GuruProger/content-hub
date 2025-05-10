<script setup lang="ts">
import { ref } from "vue"
import UButton from "~/shared/ui/UButton.vue"
import type { AvatarCheckResult } from "../../helpers/validators"
import FormFile from "./FormFile.vue"

const avatar = defineModel<File | null>({
  required: true
})

const fileSrc = ref("")
function onFileUpload({
  checkResult,
  isValid,
  value: file
}: {
  checkResult: AvatarCheckResult
  isValid: boolean
  value: File | null
}) {
  if (isValid && file) fileSrc.value = URL.createObjectURL(file)
  avatar.value = file
}

function nullFile() {
  avatar.value = null
  fileSrc.value = ""
}
</script>

<template>
  <div class="upload-file">
    <AvatarRoot class="avatar">
      <AvatarImage :src="fileSrc" class="avatar__image" alt="Your Avatar" />
      <AvatarFallback class="avatar__fallback">
        <svg
          fill="none"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
          ></path>
        </svg>
      </AvatarFallback>
    </AvatarRoot>

    <div class="upload-file__buttons">
      <FormFile @upload="onFileUpload" name="avatar" />
      <UButton @click="nullFile" :disabled="!avatar" variant="red" class="upload-file__remove-button">
        Remove
        <svg
          width="24"
          height="24"
          data-slot="icon"
          fill="none"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          ></path>
        </svg>
      </UButton>
    </div>
  </div>
</template>

<style scoped>
.upload-file {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 30px;
}

.upload-file__buttons > *:not(:first-child) {
  margin-top: 20px;
}

.avatar {
  --avatar-size: 100px;
  flex: 0 0 var(--avatar-size);
  width: var(--avatar-size);
  height: var(--avatar-size);

  display: flex;
  align-items: center;
  justify-content: center;

  vertical-align: middle;
  overflow: hidden;
  user-select: none;

  border-radius: 100%;
  background-color: var(--black-primary);
}

.avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.avatar__fallback {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white-trinary);
}

.upload-file__remove-button {
  width: 100%;
}
</style>

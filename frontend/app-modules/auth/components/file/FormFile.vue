<script setup lang="ts">
import { ref } from "vue"
import { useFieldValid } from "../../composables/useFieldValid"
import { checkValidAvatar, type AvatarCheckResult } from "../../helpers/validators"

const props = defineProps<{
  name: string
}>()

const emits = defineEmits<{
  upload: [{ checkResult: AvatarCheckResult; isValid: boolean; value: File | null }]
}>()

const file = ref<File | null>(null)

function setFile(e: Event) {
  const target = e.currentTarget as HTMLInputElement
  file.value = target.files?.[0] || null
  const [fileCheckResult, isFileValid] = useFieldValid(file, checkValidAvatar)
  emits("upload", { checkResult: fileCheckResult.value, isValid: isFileValid.value, value: file.value })
}
</script>

<template>
  <div class="form-file">
    <input @change="setFile" class="form-file__input" type="file" :name="props.name" accept="image/*" />

    <div class="form-file__content">
      <slot>Upload Your File</slot>

      <svg
        class="form-file__icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.form-file {
  max-width: 320px;
  width: 100%;
  min-width: 200px;

  position: relative;

  overflow: hidden;
  border-radius: 6px;

  cursor: pointer;
  background-color: var(--white-primary);
  box-shadow: var(--white-primary) var(--button-default-shadow), var(--white-primary) var(--button-default-shadow);
  transition: background-color 0.2s, box-shadow 0.2s;
}

.form-file:hover,
.form-file:has(:focus, :hover) {
  background-color: var(--white-secondary);
  box-shadow: var(--white-secondary) var(--button-focus-shadow);
}

.form-file__input {
  width: 100%;
  display: block;

  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.form-file__input::-webkit-file-upload-button {
  visibility: hidden;
}

.form-file__content {
  padding: 8px 10px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  color: var(--green-primary);
  outline: none;
  user-select: none;
}

.form-file__icon {
  width: 20px;
  height: 20px;
}
</style>

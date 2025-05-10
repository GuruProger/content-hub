<script setup lang="ts">
import { computed, type StyleValue } from "vue"

const { resize = false, ...props } = defineProps<{
  resize?: boolean
  placeholder?: string
  name: string
}>()

const value = defineModel<string | undefined>({
  required: true
})

const style = computed<StyleValue>(() => ({
  resize: resize ? "vertical" : "none"
}))
</script>

<template>
  <textarea :style class="form-textarea" :name="props.name" :placeholder="props.placeholder" v-model="value" />
</template>

<style scoped>
.form-textarea {
  padding: 8px;
  max-width: 320px;
  width: 100%;
  min-height: 100px;
  display: block;

  color: var(--white-primary);

  background-color: var(--gray-primary);
  border: 2px solid transparent;
  border-radius: 6px;
  transition: border-color 0.2s;
}

.form-textarea::placeholder {
  color: var(--white-trinary);
}

.form-textarea:focus,
.form-textarea:hover {
  border-color: var(--white-trinary);
}
</style>

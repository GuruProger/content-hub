<script setup lang="ts">
import { useId } from "vue"

const props = defineProps<{
  name: string
  type: "email" | "password" | "text"
  placeholder?: string
}>()

const value = defineModel<string>({
  required: true
})
const id = useId()
</script>

<template>
  <label :for="id" class="form-input">
    <input
      :id
      v-model="value"
      class="form-input__field"
      :type="props.type"
      :name="props.name"
      :placeholder="props.placeholder"
    />
  </label>
</template>

<style scoped>
.form-input {
  display: block;
  overflow: hidden;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: border 0.2s;
}

.form-input:focus,
.form-input:hover,
.form-input:has(:focus, :hover) {
  border-color: var(--green-primary);
}

.form-input__field {
  padding: 5px 10px;
  width: 100%;
  height: 100%;
  color: var(--green-primary);
}
</style>

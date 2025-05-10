<script setup lang="ts">
const { disabled = false, variant = "white" } = defineProps<{
  disabled?: boolean
  variant?: "red" | "white"
}>()
</script>

<template>
  <button class="u-button" :class="[`variant--${variant}`]" :disabled>
    <slot />
  </button>
</template>

<style scoped>
.u-button.variant--white {
  --main-color: var(--white-primary);
  --focus-color: var(--white-secondary);
  color: var(--green-primary);
}

.u-button.variant--red {
  --main-color: var(--red-secondary);
  --focus-color: var(--red-primary);
  color: var(--white-primary);
}

.u-button {
  padding: 8px 10px;
  width: max-content;
  min-height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  outline: none;
  border-radius: 8px;

  background-color: var(--main-color);
  box-shadow: var(--main-color) var(--button-default-shadow), var(--main-color) var(--button-default-shadow);
  transition: background-color 0.2s, box-shadow 0.2s, color 0.2s;
}

.u-button:hover,
.u-button:focus {
  background-color: var(--focus-color);
  box-shadow: var(--focus-color) var(--button-focus-shadow);
}

.u-button[disabled] {
  box-shadow: none;
  background-color: var(--white-secondary);
  color: rgba(0, 0, 0, 0.3);
  cursor: default;
}
</style>

<script setup lang="ts">
import { computed } from "vue"
import { FIELDS_INFO } from "../config"
import type { User } from "../helpers/api"
import type { FieldError } from "../helpers/validators"

const props = defineProps<{
  activeField: keyof User | null
  error: FieldError | null
  isSuccess: boolean
}>()

const activeField = computed(
  () => props.activeField && (FIELDS_INFO[props.activeField] as { errors: Record<FieldError, string>; sample: string })
)
</script>

<template>
  <div class="form-info">
    <section class="form-info-section">
      <h4 class="form-info-section__title">
        <template v-if="props.activeField">Error ({{ props.activeField }}): </template>
        <template v-else>Error:</template>
      </h4>
      <div class="form-info-section__error">
        <template v-if="props.error">
          <svg
            class="form-info-section__error-icon"
            width="24"
            height="24"
            data-slot="icon"
            fill="none"
            stroke-width="2"
            stroke="var(--red-secondary)"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
          </svg>
          <span class="form-info-section__error-title">
            {{ activeField?.errors[props.error] }}
          </span>
        </template>
      </div>
    </section>

    <section class="form-info-section">
      <h4 class="form-info-section__title">Sample:</h4>
      <span class="form-info-section__sample">{{ activeField?.sample }}</span>
    </section>
  </div>
</template>

<style scoped>
.form-info {
  padding: 5px;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  box-shadow: var(--green-primary) 0 0 4px;
}

.form-info-section {
  --min-item-height: 44px;
}

.form-info-section:first-child {
  margin-top: auto;
}

.form-info-section__error {
  padding: 2px;
  padding-right: 4px;
  min-height: var(--min-item-height);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;

  color: var(--white-primary);
  box-shadow: 0 0 5px var(--red-secondary);
}

.form-info-section__error:empty {
  box-shadow: none;
}

.form-info-section__error-title {
  padding-bottom: 1px;
}

.form-info-section__error-icon {
  flex: 0 0 24px;
}

.form-info-section__title {
  margin-bottom: 10px;
  color: var(--green-primary);
}

.form-info-section__sample {
  display: block;
  min-height: var(--min-item-height);
  color: var(--white-primary);
}
</style>

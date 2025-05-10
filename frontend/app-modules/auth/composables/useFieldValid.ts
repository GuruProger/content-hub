import { computed, toValue, type MaybeRefOrGetter } from "vue"
import type { Success } from "../helpers/validators"

const isSuccess = (result: string): result is Success => result === "SUCCESS"

export function useFieldValid<T extends unknown, R extends string>(
  field: MaybeRefOrGetter<T>,
  validator: (value: T) => R
) {
  const resultByCheck = computed<R>(() => validator(toValue(field)))
  const isResultValid = computed(() => isSuccess(resultByCheck.value))

  return [resultByCheck, isResultValid] as const
}

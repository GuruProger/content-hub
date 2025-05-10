/**
 * function to count of some element in Array or String
 * @param search - value, that need to search
 * @param iterable - some Array or String
 * @returns count of search in iterable
 */
export const count = <T extends string | number | boolean | null | undefined>(
  search: unknown,
  iterable: T[] | string
) => {
  let res = 0
  for (let i = 0; i < iterable.length; i++) if (iterable[i] === search) res++
  return res
}

/**
 * function to check if value in out of range
 * @param value - value, that need to check
 * @param validMin - valid minimal value
 * @param validMax - valid maximum value
 * @returns the boolean of checking whether the value is out of range
 * @example const isOut = checkOutOfRange(70, 10, 40) // true
 * const isOut = checkOutOfRange(35, 10, 35) // false
 * const isOut = checkOutOfRange(10, 10, 40) // false
 */
export const checkOutOfRange = (value: number, validMin: number, validMax: number) =>
  value < validMin || value > validMax

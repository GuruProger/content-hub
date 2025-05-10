export namespace Utils {
  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
  type Exclude<T, U extends T> = T extends U ? never : T
  type Extract<T, U extends T> = T extends U ? T : never
}

import { checkOutOfRange, count } from "~/shared/utils"
import { FIELD_RANGES } from "../config"

export type Success = "SUCCESS"
type ValidatorReturns<T extends string> = T | Success

export type UsernameError = "RANGE_ERROR"
export const checkValidUsername = (username: string): ValidatorReturns<UsernameError> => {
  if (checkOutOfRange(username.length, FIELD_RANGES.username.min, FIELD_RANGES.username.max)) return "RANGE_ERROR"
  return "SUCCESS"
}

export type EmailError = "AT_ERROR" | "DOT_ERROR" | "DOT_AT_END_ERROR" | "DOT_BEFORE_AT_ERROR" | "DOT_SPACE_TO_AT_ERROR"
export const checkValidEmail = (email: string): ValidatorReturns<EmailError> => {
  if (count("@", email) !== 1) return "AT_ERROR"
  if (count(".", email) < 1) return "DOT_ERROR"

  const dotIndex = email.lastIndexOf(".")
  const atIndex = email.lastIndexOf("@")
  if (dotIndex === email.length - 1) return "DOT_AT_END_ERROR"
  if (dotIndex < atIndex) return "DOT_BEFORE_AT_ERROR"
  if (dotIndex - atIndex < 2) return "DOT_SPACE_TO_AT_ERROR"
  return "SUCCESS"
}

export type PasswordError = "RANGE_ERROR"
export const checkValidPassword = (password: string): ValidatorReturns<PasswordError> => {
  if (checkOutOfRange(password.length, FIELD_RANGES.password.min, FIELD_RANGES.password.max)) return "RANGE_ERROR"
  return "SUCCESS"
}

export type BioError = "RANGE_ERROR"
export const checkValidBio = (bio?: string): ValidatorReturns<BioError> => {
  if (!bio) return "SUCCESS"
  if (checkOutOfRange(bio.length, FIELD_RANGES.bio.min, FIELD_RANGES.bio.max)) return "RANGE_ERROR"
  return "SUCCESS"
}

export type AvatarError = "FILE_TYPE_ERROR"
export type AvatarCheckResult = ValidatorReturns<AvatarError>
const isImageFile = (file: File) => file.type.split("/")[0] === "image"
export const checkValidAvatar = (avatar?: File | null): AvatarCheckResult => {
  if (!avatar) return "SUCCESS"
  if (!isImageFile(avatar)) return "FILE_TYPE_ERROR"
  return "SUCCESS"
}

export type FieldError = UsernameError | EmailError | PasswordError | BioError | AvatarError

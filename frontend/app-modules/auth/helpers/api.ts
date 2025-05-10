type ErrorResponse<L extends string, T extends string> = {
  detail: {
    loc: L
    msg: T
  }
}

export type User = {
  username: string // (max 50 characters)
  email: string
  password: string // (8–30 characters)
  bio?: string // (max 1000 characters)
  avatar?: File | null
}

export type UserSuccessResponse = Omit<User, "avatar" | "password"> & {
  created_at: "2025-04-16T19:05:27.993045"
  id: number

  rating: number
  is_admin: boolean
  avatar: boolean
  status: string // "active"
}

export type UserErrorResponseUsernameConflict = ErrorResponse<"username", "Username already exists">
export type UserErrorResponseEmailConflict = ErrorResponse<"email", "Email already exists">
export type UserErrorResponseUnsupportedFileType = ErrorResponse<"avatar", "File must be an image">

export type UserErrorResponse =
  | UserErrorResponseUsernameConflict
  | UserErrorResponseEmailConflict
  | UserErrorResponseUnsupportedFileType

type UserResponse = UserSuccessResponse | UserErrorResponse

export const createUserFetch = async (formData: FormData): Promise<UserResponse> => {
  const response = await fetch(process.env.USER_BASE_URL!, {
    method: "POST",
    headers: { accept: "application/json", "Content-Type": "multipart/form-data" },
    body: formData
  })

  return await response.json()
}

export const isErrorResponse = (data: UserResponse): data is UserErrorResponse => "detail" in data

import type { User } from "./helpers/api"
import type { AvatarError, BioError, EmailError, FieldError, PasswordError, UsernameError } from "./helpers/validators"

type Ranges = {
  [key in "password" | "username" | "bio"]: {
    min: number
    max: number
  }
}
export const FIELD_RANGES = {
  password: {
    min: 8,
    max: 30
  } as const,
  username: {
    min: 1,
    max: 50
  } as const,
  bio: {
    min: 0,
    max: 1000
  } as const
} satisfies Ranges

// type Errors<T extends string> = Record<T, string>
type Errors<T extends string> = Record<Extract<FieldError, T>, string>
type ErrorsObj =
  | Errors<PasswordError>
  | Errors<UsernameError>
  | Errors<EmailError>
  | Errors<BioError>
  | Errors<AvatarError>
export const FIELDS_INFO = {
  password: {
    errors: {
      RANGE_ERROR: `Must contains between ${FIELD_RANGES.password.min} to ${FIELD_RANGES.password.max} character`
    },
    sample: "1234vas_$`./"
  } as const,
  username: {
    errors: {
      RANGE_ERROR: `Must contains between ${FIELD_RANGES.username.min} to ${FIELD_RANGES.username.max} character`
    },
    sample: "UltraPokemon54"
  } as const,
  bio: {
    errors: {
      RANGE_ERROR: `Must contains between ${FIELD_RANGES.bio.min} to ${FIELD_RANGES.bio.max} character`
    },
    sample: "I'm the frontend developer of this perfect project"
  } as const,
  email: {
    errors: {
      AT_ERROR: 'Email must contains "@" symbol',
      DOT_ERROR: 'Email must contains "." symbol',
      DOT_AT_END_ERROR: '"." symbol in email can\'t be on end',
      DOT_BEFORE_AT_ERROR: '"." symbol in email can\'t be before main "@" symbol',
      DOT_SPACE_TO_AT_ERROR: 'The space of "." and "@" symbols must be 2 or more'
    },
    sample: "ultrapokemon@gmail.com"
  } as const,
  avatar: {
    errors: {
      FILE_TYPE_ERROR: "Your upload file is not image. If it is incorrect: please, contact us"
    },
    sample: "Any image"
  } as const
} satisfies Record<
  keyof User,
  {
    errors: ErrorsObj
    sample: string
  }
>

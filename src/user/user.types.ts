export interface User {
  id: string
  username: string
  age: number
  hobbies: string[]
}

export enum STATUS_CODES {
  SUCCESS = 200,
  CREATED = 201,
  DELETED = 204,
  NOT_VALID = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500
}

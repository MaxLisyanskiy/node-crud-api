import { ServerResponse } from 'http'
import { STATUS_CODES, User } from './user.types'

export const isValidUUID = (id: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  return uuidRegex.test(id)
}

export const checkUserExists = (userId: string, users: User[], res: ServerResponse): boolean => {
  const userIndex = users.findIndex((u) => u.id === userId)
  if (userIndex === -1) {
    res.statusCode = STATUS_CODES.NOT_FOUND
    res.end(JSON.stringify({ message: 'User not found' }))
    return false
  }
  return true
}

export const validateUUID = (userId: string, res: ServerResponse): boolean => {
  if (!isValidUUID(userId)) {
    res.statusCode = STATUS_CODES.NOT_VALID
    res.end(JSON.stringify({ message: 'Invalid userId format' }))
    return false
  }
  return true
}

export const handleError = (res: ServerResponse, error: unknown) => {
  console.error(error)
  res.statusCode = STATUS_CODES.SERVER_ERROR
  res.end(JSON.stringify({ message: `Server Error. ${error} Please try again later!` }))
}

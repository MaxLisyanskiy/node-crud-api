import { IncomingMessage, ServerResponse } from 'http'
import { UserController } from './user.controller'
import { STATUS_CODES } from './user.types'

const userController = new UserController()

export const initializeUserRoutes = (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json')

  const urlParts = req.url?.split('/')
  const userId = urlParts && urlParts[3]

  switch (req.method) {
    case 'GET':
      if (urlParts && urlParts[2] === 'users') {
        if (userId) {
          userController.getUserById(userId, res)
        } else {
          userController.getAllUsers(res)
        }
      } else {
        handleNotFound(res)
      }
      break

    case 'POST':
      if (urlParts && urlParts[2] === 'users') {
        userController.createUser(req, res)
      } else {
        handleNotFound(res)
      }
      break

    case 'PUT':
      if (urlParts && urlParts[2] === 'users' && userId) {
        userController.updateUser(req, res, userId)
      } else {
        handleNotFound(res)
      }
      break

    case 'DELETE':
      if (urlParts && urlParts[2] === 'users' && userId) {
        userController.deleteUser(userId, res)
      } else {
        handleNotFound(res)
      }
      break

    default:
      handleNotFound(res)
      break
  }
}

const handleNotFound = (res: ServerResponse) => {
  res.statusCode = STATUS_CODES.NOT_FOUND
  res.end(JSON.stringify({ message: 'Resource not found' }))
}

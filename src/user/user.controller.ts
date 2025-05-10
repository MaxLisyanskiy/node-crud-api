import { IncomingMessage, ServerResponse } from 'http'
import { STATUS_CODES, User } from './user.types'
import { v4 as uuidv4 } from 'uuid'
import { validateUUID, checkUserExists, handleError } from './user.utils'

export class UserController {
  private users: User[] = []

  public getAllUsers(res: ServerResponse) {
    try {
      res.statusCode = STATUS_CODES.SUCCESS
      res.end(JSON.stringify(this.users))
    } catch (error) {
      handleError(res, error)
    }
  }

  public getUserById(userId: string, res: ServerResponse) {
    try {
      if (!validateUUID(userId, res)) return
      if (!checkUserExists(userId, this.users, res)) return

      const user = this.users.find((u) => u.id === userId)
      res.statusCode = STATUS_CODES.SUCCESS
      res.end(JSON.stringify(user))
    } catch (error) {
      handleError(res, error)
    }
  }

  public createUser(req: IncomingMessage, res: ServerResponse) {
    let body: string = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      try {
        const { username, age, hobbies } = JSON.parse(body)
        if (!username || !age || !Array.isArray(hobbies)) {
          res.statusCode = STATUS_CODES.NOT_VALID
          res.end(JSON.stringify({ message: 'Missing required fields' }))
          return
        }
        const newUser: User = { id: uuidv4(), username, age, hobbies }
        this.users.push(newUser)
        res.statusCode = STATUS_CODES.CREATED
        res.end(JSON.stringify(newUser))
      } catch (error) {
        handleError(res, error)
      }
    })
    req.on('error', (error) => {
      handleError(res, error)
    })
  }

  public updateUser(req: IncomingMessage, res: ServerResponse, userId: string) {
    if (!validateUUID(userId, res)) return
    if (!checkUserExists(userId, this.users, res)) return

    const userIndex = this.users.findIndex((u) => u.id === userId)
    let body: string = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      try {
        const updateData = JSON.parse(body)
        const existingUser = this.users[userIndex]

        const updatedUser: User = {
          ...existingUser,
          ...updateData
        }

        this.users[userIndex] = updatedUser
        res.statusCode = STATUS_CODES.SUCCESS
        res.end(JSON.stringify(updatedUser))
      } catch (error) {
        handleError(res, error)
      }
    })
    req.on('error', (error) => {
      handleError(res, error)
    })
  }

  public deleteUser(userId: string, res: ServerResponse) {
    try {
      if (!validateUUID(userId, res)) return
      if (!checkUserExists(userId, this.users, res)) return

      const userIndex = this.users.findIndex((u) => u.id === userId)
      this.users.splice(userIndex, 1)
      res.statusCode = STATUS_CODES.DELETED
      res.end(JSON.stringify({ message: `User: ${userId} successfully deleted` }))
    } catch (error) {
      handleError(res, error)
    }
  }
}

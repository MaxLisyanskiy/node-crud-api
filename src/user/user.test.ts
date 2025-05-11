import request from 'supertest'
import http from 'http'
import { initializeUserRoutes } from './user.routes'
import { STATUS_CODES } from './user.types'

const MOCK_USER = { username: 'Max', age: 25, hobbies: ['gym', 'soccer'] }
const USER_ENDPOINT = '/api/users'
const USER_ID_ENDPOINT = '/api/users/:id'

describe('UserController', () => {
  let server: http.Server

  beforeAll((done) => {
    server = http.createServer(initializeUserRoutes)
    server.listen(3000, done)
  })

  afterAll((done) => {
    server.close(done)
  })

  test(`GET ${USER_ENDPOINT} should return all users`, async () => {
    const response = await request(server).get(USER_ENDPOINT)
    expect(response.status).toBe(200)
    expect(response.body).toStrictEqual([])
  })

  test(`POST ${USER_ENDPOINT} should create a new user`, async () => {
    const newUser = MOCK_USER
    const response = await request(server).post(USER_ENDPOINT).send(newUser)
    expect(response.status).toBe(201)
    expect(response.body.username).toBe(newUser.username)
  })

  test(`GET ${USER_ID_ENDPOINT} should return a user by ID`, async () => {
    const newUser = MOCK_USER
    const responseWithNewUser = await request(server).post(USER_ENDPOINT).send(newUser)
    const userId = responseWithNewUser.body.id

    const response = await request(server).get(`${USER_ENDPOINT}/${userId}`)
    expect(response.status).toBe(200)
    expect(response.body.id).toBe(userId)
  })

  test(`PUT ${USER_ID_ENDPOINT} should update a user`, async () => {
    const newUser = MOCK_USER
    const responseWithNewUser = await request(server).post(USER_ENDPOINT).send(newUser)
    const userId = responseWithNewUser.body.id

    const updatedData = { username: 'Jone' }
    const { status, body } = await request(server)
      .put(`${USER_ENDPOINT}/${userId}`)
      .send(updatedData)
    expect(status).toBe(200)
    expect(body.username).toBe(updatedData.username)
  })

  test(`DELETE ${USER_ID_ENDPOINT} should delete a user`, async () => {
    const newUser = MOCK_USER
    const responseWithNewUser = await request(server).post(USER_ENDPOINT).send(newUser)
    const userId = responseWithNewUser.body.id

    const response = await request(server).delete(`${USER_ENDPOINT}/${userId}`)
    expect(response.status).toBe(STATUS_CODES.DELETED)
  })
})

import http from 'http'
import { initializeUserRoutes } from './user/user.routes'
import dotenv from 'dotenv'

dotenv.config()

export class Server {
  private server: http.Server
  private PORT: number

  constructor() {
    this.PORT = process.env.PORT ? parseInt(process.env.PORT) : 5007
    this.server = http.createServer(initializeUserRoutes)
  }

  public start() {
    this.server.listen(this.PORT, () => {
      console.log(`\n Server running on \x1b[33mhttp://localhost:${this.PORT}\x1b[0m \n`)
    })
  }
}

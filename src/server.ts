import http from 'http'

interface User {
  id: string
  username: string
  age: number
  hobbies: string[]
}

export class Server {
  private users: User[] = []
  private server: http.Server
  private PORT: number

  constructor() {
    this.PORT = process.env.PORT ? parseInt(process.env.PORT) : 5007
    this.server = http.createServer(this.requestListener.bind(this))
  }

  private requestListener(req: http.IncomingMessage, res: http.ServerResponse) {
    res.setHeader('Content-Type', 'application/json')

    // const urlParts = req.url?.split('/')

    switch (req.method) {
      case 'GET':
        break

      case 'POST':
        break

      case 'PUT':
        break

      case 'DELETE':
        break
    }
  }

  public start() {
    this.server.listen(this.PORT, () => {
      console.log(`\n Server running on http://localhost:${this.PORT} \n`)
    })
  }
}

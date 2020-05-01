const jsonServer = require('json-server')
const PORT = process.env.PORT || 8000
const db = require('./db')

const server = jsonServer.create()
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

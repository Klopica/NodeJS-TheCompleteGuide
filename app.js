const http = require('http')
const routes = require('./routes')

// Using the Node Modules System
// Move server routing logic to a new file "routes.js"

// const server = http.createServer(routes)
const server = http.createServer(routes.handler)
console.log(routes.someText)

server.listen(3000)

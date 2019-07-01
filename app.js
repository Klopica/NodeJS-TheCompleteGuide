const http = require('http')

// const rqListener = (req, res) => {
//
// }
// // rqListener is passed as reference to createServer
// // it tells the createServer function to call rqListener for every incoming
// // request
// http.createServer(rqListener)

// The other way to create server is to pass an anonymous function to createServer
// arguments
const server = http.createServer((req, res) => {
  console.log(req)
  process.exit()
})

server.listen(3000)

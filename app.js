const http = require('http')

const express = require('express')

const app = express()

// Middleware
// .use() method is used to create request handlers
// next() is a function has to be executed to allow code to continue to the next
// middleware
app.use((req, res, next) => {
  console.log('In the Middleware!')
  next() // allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
  console.log('In another Middleware!')
  res.send('<h1>Hello from Express!</h1>')
})

const server = http.createServer(app)

server.listen(3000)

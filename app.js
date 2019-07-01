const http = require('http')

const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
  console.log('This code Always Runs!')
  next()
})

app.use('/add-product', (req, res, next) => {
  console.log('In another Middleware - Products page!')
  res.send('<h1>Add Product page!</h1>')
})

app.use('/', (req, res, next) => {
  console.log('In another Middleware!')
  res.send('<h1>Hello from Express!</h1>')
})

const server = http.createServer(app)

server.listen(3000)

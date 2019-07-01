const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/', (req, res, next) => {
  console.log('This code Always Runs!')
  next()
})

// app.post allows us to filter for "post" requests
app.post('/product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

app.use('/add-product', (req, res, next) => {
  console.log('In another Middleware - Products page!')
  res.send(`
    <h1>Add Product page!</h1>
    <form action="/product" method="post">
      <input type="text" name="title">
      <button type="submit">Submit</button>
    </form>
  `)
})

app.use('/', (req, res, next) => {
  console.log('In another Middleware!')
  res.send('<h1>Hello from Express!</h1>')
})



const server = http.createServer(app)

server.listen(3000)

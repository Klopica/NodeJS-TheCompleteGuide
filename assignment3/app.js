const http = require('http')
const path = require('path')

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './', 'views', 'home.html'))
})

app.get('/users', (req, res, next) => {
  res.sendFile(path.join(__dirname, './', 'views', 'users.html'))
})


const server = http.createServer(app)

server.listen(5000)

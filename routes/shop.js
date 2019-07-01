const path = require('path')
// path.join detects the operating system you are running yor app on, and creates
// an absolute path fou you

const express = require('express')
const router = express.Router()

const rootDir = require('../util/path')

router.get('/', (req, res, next) => {
  // res.send('<h1>Hello from Express!</h1>')
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router

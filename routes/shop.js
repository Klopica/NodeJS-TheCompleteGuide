const path = require('path')
// path.join detects the operating system you are running yor app on, and creates
// an absolute path fou you

const express = require('express')
const router = express.Router()

const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/', (req, res, next) => {
  console.log(adminData.products)
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router

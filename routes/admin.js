const path = require('path')

const express = require('express')
const router = express.Router()

const rootDir = require('../util/path')

router.get('/add-product', (req, res, next) => {
  // console.log('In another Middleware - Products page!')
  // res.send(`
  //   <h1>Add Product page!</h1>
  //   <form action="/admin/add-product" method="post">
  //     <input type="text" name="title">
  //     <button type="submit">Submit</button>
  //   </form>
  // `)
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router

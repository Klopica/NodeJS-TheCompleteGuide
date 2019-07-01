const express = require('express')
const router = express.Router

router.post('/product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

router.get('/add-product', (req, res, next) => {
  console.log('In another Middleware - Products page!')
  res.send(`
    <h1>Add Product page!</h1>
    <form action="/product" method="post">
      <input type="text" name="title">
      <button type="submit">Submit</button>
    </form>
  `)
})

module.exports = router

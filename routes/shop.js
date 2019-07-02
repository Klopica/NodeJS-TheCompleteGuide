const path = require('path')
// path.join detects the operating system you are running yor app on, and creates
// an absolute path fou you

const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products')

router.get('/', productsController.getProducts)

module.exports = router

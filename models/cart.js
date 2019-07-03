const fs = require('fs')
const path = require('path')

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the existing cart
    fs.readFile(p, (err, data) => {
      let cart = {products: [], totalPrice: 0}
      if(!err) {
        cart = JSON.parse(data)
      }
      // Analyze if we already have requested product
      const existingProductIndex = cart.products.findIndex(p => p.id === id)
      const existingProduct = cart.products[existingProductIndex]

      // Add new product  / increase quantity
      let updatedProduct
      if (existingProduct) {
        updatedProduct = {...existingProduct}
        updatedProduct.qty = updatedProduct.qty + 1
        cart.products = [...cart.products]
        cart.products[existingProductIndex] = updatedProduct
      } else {
        updatedProduct = {id: id, qty: 1}
        cart.products = [...cart.products, updatedProduct]
      }
      cart.totalPrice = cart.totalPrice + productPrice
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err)
      })
    })
  }
}

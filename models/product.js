const products = []
module.exports = class Product {
  constructor (title) {
    this.title = title
  }

  save () {
    products.push(this)
  }

  // STATIC keyword makes sure that this method can be called directly on the
  // class itself, and not on instantiated object (var something = new Product())
  // This means we can call this function without keyword "new"
  // example is in /controllers/products.js
  static fetchAll () {
    return products
  }
}

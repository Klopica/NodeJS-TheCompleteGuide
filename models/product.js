const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

const getProductsFromFIle = (cb) => {
  fs.readFile(p, (err, data) => {
    if(err) {
      return cb([])
    } else {

      cb(JSON.parse(data))
    }
  })
}

module.exports = class Product {
  constructor (title) {
    this.title = title
  }

  save () {
    getProductsFromFIle(products => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err.stack || err)
      })
    })
  }

  // STATIC keyword makes sure that this method can be called directly on the
  // class itself, and not on instantiated object (var something = new Product())
  // This means we can call this function without keyword "new"
  // example is in /controllers/products.js
  static fetchAll (cb) {
    getProductsFromFIle(cb)
  }
}

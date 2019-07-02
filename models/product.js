const fs = require('fs')
const path = require('path')

module.exports = class Product {
  constructor (title) {
    this.title = title
  }

  save () {
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
    // First read this file to get existing data
    fs.readFile(p, (err, data) => {
      let products = []
      if(!err) {
        products = JSON.parse(data)
      }
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }

  // STATIC keyword makes sure that this method can be called directly on the
  // class itself, and not on instantiated object (var something = new Product())
  // This means we can call this function without keyword "new"
  // example is in /controllers/products.js
  static fetchAll (callback) {
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
    fs.readFile(p, (err, data) => {
      if(err) {
        callback([])
      }
      callback(JSON.parse(data))
    })
  }
}

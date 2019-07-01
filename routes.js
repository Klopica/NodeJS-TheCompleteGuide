const fs = require('fs')

// Understanding different error types
// Syntax Errors
// Runtime Errors
// Logical errors -> No error message, only bad code

// Finding and Fixing Syntax Errors
// If we remove a letter from "const" keyword, our application will crash and
// node will tell us on which line the application crashed



const requestHandler = (req, res) => {

  const url = req.url
  const method = req.method
  if (url === '/') {
  res.write(`
    <html>
    <head>
    <title>Web Page</title>
    </head>
    <body>
    <h1>Hello from my Node.js Server / Form</h1>
    <form action="/message" method="POST">
    <input type="text" name="message">
    <button type="submit">Send</button>
    </form>
    </body>
    </html>
    `)
    return res.end()
  }

  if(url === '/message' && method === 'POST') {

    const body = []
    // .on() allows us to listen to certain events
    req.on('data', chunk => {
      body.push(chunk)
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) => {
        if(err) {
          console.log(err)
        }
        res.statusCode = 302
        // Redirect user to home page and create a new file that will store message
        // the user entered in our input field
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }

  res.setHeader('Content-Type', 'text/html')
  res.write(`
    <html>
    <head>
    <title>Home Page</title>
    </head>
    <body>
    <h1>Hello from my Node.js Server</h1>
    </body>
    </html>
    `)
  res.end()
}

// Different ways to export the module
//
// module.exports = requestHandler
//
// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text'
// }

// module.exports.handler = requestHandler
// module.exports.someText = 'Some hard coded text'

exports.handler = requestHandler
exports.someText = 'Some hard coded text'

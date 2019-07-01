const http = require('http')
const fs = require('fs')

// Streams & Buffers
// If file is being uploaded, then streaming data makes sense
// It is not neccessary to process whole file when it's uploaded, insted we process
// parts of this stream, using buffer
// Buffer is construct which allows you to process multiple chunks before they are
// released

const server = http.createServer((req, res) => {
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
    req.on('data', (chunk) => {
      body.push(chunk)
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFileSync('message.txt', message)
    })
    // Redirect user to home page and create a new file that will store message
    // the user entered in our input field
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }

  res.setHeader('Content-Type', 'text/html')
  res.write(`
    <html>
      <head>
        <title>Web Page</title>
      </head>
      <body>
        <h1>Hello from my Node.js Server</h1>
      </body>
    </html>
    `)
  res.end()
})

server.listen(3000)

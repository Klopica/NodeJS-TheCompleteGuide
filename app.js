const http = require('http')
const fs = require('fs')

// Understanding Event Driven Code Execution
// Node will execute functions asynchronously (it means it does not run function
// immediatelly)
// When node is done with parsing and processing request is runs .end event and
// starts with sending request, when a time for this action comes.
// It does not pause the other code execution when one of listeners triggers.

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
      res.statusCode = 302
      // Redirect user to home page and create a new file that will store message
      // the user entered in our input field
      res.setHeader('Location', '/')
      return res.end()
    })

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

const http = require('http')
const fs = require('fs')

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
            <input type="text">
            <button type="submit">Send</button>
          </form>
        </body>
      </html>
      `)
      return res.end()
  }

  if(url === '/message' && method === 'POST') {
    // Redirect user to home page and create a new file that will store message
    // the user entered in our input field
    fs.writeFileSync('message.txt', 'DUMMY')
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

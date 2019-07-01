const http = require('http')
const fs = require('fs')

// Single Thread, Event Loop & Blocking Code
// NodeJS uses only one thread. How it handles multiple requests?
// PERFORMANCE:
// fs module works with files and those actions usually take more time.
// Callback we would define in fileWrite function, would be sent to worker pool,
// which does all the heavy lifting for us.
// Worker pool allows us to use different threads!
// If there are no remaining registered events, we can end nodejs program by calling
// process.exit()

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
})

server.listen(3000)

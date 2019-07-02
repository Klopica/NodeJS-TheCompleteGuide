const http = require('http')
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

// Handlebars setup
// app.engine('hbs', expressHbs({
//   layoutsDir: 'views/layouts/',
//   defaultLayout: 'main-layout',
//   extname: 'hbs'
// }))
// app.set('view engine', 'hbs')

// EJS setup
app.set('view engine', 'ejs')

// Global configuration - PUG
// app.set('view engine', 'pug')
// second param is a views folder (in some cases you might use some other folder)
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

// Handling 404 Error
app.use((req, res, next) => {
  res.status(404)
  .render('404', {
    title: 'Error 404'
  })
})

const server = http.createServer(app)

server.listen(3000)

# NodeJS-TheCompleteGuide
Udemy course

## Intro

REPL
R - Read user input
E - Evaluate user input
P - Print output
L - Loop (Wait for new input)

## JS Refresher

Objects and Arrays are REFERENCE TYPES. This means that if we create an array
with ```const``` keyword, we can still edit this array without violating the restriction
that constants must not change.

For this part of course, view commits that cover topics from section 1.
There is some interesting information about spread operators, object desctructuring
and async code & promises.

## Node.JS Basics
The Essential Knowledge you need to understand
How the Web Works and what is the role of NodeJS in it?

NodeJS code runs on web server and handles incoming requests and does something with them.
It can send response to client (data, html...)

To correctly handle a request, we need to follow rules defined by protocols. (HTTP, HTTPS)
HTTPS is protocol in which SSL encryption is enabled.

### Creating a Node.JS Server
Core Modules we can use to create NodeJS server:
  * HTTP - launch a server, send requests
  * HTTPS - Launch a SSL ecrypted server
  * fs
  * path
  * os

### NodeJS Program Life Cycle
1. Execute main script
  a. Start script
  b. Parse Code, Register Variables & Functions
  c. EVENT LOOP
    * Keeps on running as long as there are event listeners registered

### Working with Requests & Responses
When creating response in nodejs server, we need to set headers, content and send response to client.
After writing response content, it is important to call ```res.end()``` function.

## Efficient Development
### Understanding NPM scrpts
Until now, we had to stop our server and start it again every time we made a change in our code.
Now it is time to start using NPM (Node Package Manager). We will use it to install
some additional packages that will help use to write code faster and that we do
not need to worry about stuff like starting and stopping server, but can use time for working
on our business logic.

We will install nodemon for server start/stop functionality.

All of our 3rd party modules will be visible in package.json file that will be
automatically created when we run ```npm install <package>``` command

NPM can be used to initialize or pack a node js project.

We can add new scripts to package.json file, that we can run by typing ```npm run <script>```
to our terminal.

There are some scripts that are called differently and those are special scripts
You can run start script by typing ```npm start```

### Installing 3rd Party Packages
Packages that will be used in this course are: Express, body-parser, nodemon...

### Debugging
Use debugger to analyze your code


## Using Express.js
### Don't reinvent the Wheel!
We need to focus on our business logic, instead of dealing with setting up server,
so we need a tool that will do that for us. In this course we will use Express.js
to build server. Express will handle standard tasks like handling requests, Routes and such...

What is Express.js?
Using Middleware
Working with Requests and Responses
Routing
Returning HTML pages

### What is Express.js?
Server logic is complex! We would manually need to process all the things as handle buffers,
parsing data...

Use a framework for all the heavy lifting!
Vanilla Node.js
Adonis.js
Koa
Sails.js
...

Express.js is by far the most popular framework.

### Installing Express.js
```
npm install --save express
```

### Adding Middleware
It's All about Middleware!

  - Request
  - Middleware -> next() -> (req, res, next) => { ... }
  - Middleware -> res.send() -> (req, res, next) => { ... }
  - Response

### How middleware works
To be able to call more than one middleware in Express.js, we need to call ``` next() ```
function inside app.use

If there are no more middlewares in line, in that function we do not need to call next().

### Parsing Incoming Requests
```
npm install --save body-parser
```
Install Body Parser to be able to parse incoming requests

## Templating Engines
To build an application that delivers some value to our users, we want to create dynamic
content. To achieve this, we would want to use some kind of templating engine.
With templating engines it is much easier to present data from database in html.

Most popular template engines are:

  * EJS
  * Pug (Jade)
  * Handlebars

## MVC

## Advanced Routes & Models

## Node + SQL

## Using Sequelize

## Node + NoSQL (MongoDB)

## Using Mongoose

## Sessions & Cookies

## Authentication

## Sending E-mails

## Authentication Deep Dive

## User Input Validation

## Error Handling

## File Uploads & Downloads

## Pagination

## Async Requests

## Handling Payments

## REST API Basics

## Advanced REST API Features

## Using Async-Await

## Websockets & Socket.io

## GraphQL

## Deployment

## Beyond Web Servers

## Roundup & Next Steps

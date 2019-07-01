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

## Using Express.js

## Templating Engines

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

// The simplest (and useless) web server ever made

const http = require("http")

const port = process.env.PORT || 8080

http.createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" })
  response.end("Hello, world!")
}).listen(port)

console.info(`The simplest web server is listening on port ${port}...`)

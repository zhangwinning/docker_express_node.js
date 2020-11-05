const { createServer } = require('http')

const server = createServer((req, res) => {
  res.end('hello world zwn')
}).listen(3000, () => {
  console.log(`the server is listening is ${server.address().port}`)
})

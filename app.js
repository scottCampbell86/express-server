const http = require('http');
const express = require('express')

const app = express();

app.use((req, res, next) => {
  next(); // allows request to continue in middleware chain
})

app.use('/add-product', (req, res, next) => {
  res.send('<h1>Add Product Page</h1>');
})

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express</h1>');
})

const server = http.createServer(app);

server.listen(3000);
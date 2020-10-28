const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); //will parse all body properties sent by form

app.use((req, res, next) => {
  //console.log('always runs!');
  next(); // allows request to continue in middleware chain
})

app.use(adminRoutes);
app.use(shopRoutes);

app.use((err, req, res, next) => {
  if (err) res.send(err);
})

const server = http.createServer(app);

server.listen(3000);
var express = require('express');
var bodyParser = require('body-parser');

const SERVER_PORT = 8080;

const api = require('./server/routes')

var app = express();

app.use(express.static('node_modules'));
app.use(express.static('build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Set Api Routes
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
//     next()
//   })
app.use('/', api)

app.listen(process.env.PORT || `${SERVER_PORT}`, () => {
    console.log("Server started on port " + SERVER_PORT);
  });
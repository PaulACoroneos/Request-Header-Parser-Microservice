// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

var router = express.Router();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(bodyParser.json());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
router.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
router.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

router.get("/api/whoami", function (req, res) {
  res.json({ipaddress: req.headers['x-forwarded-for'] ||
  req.connection.remoteAddress ||
  req.socket.remoteAddress ||
  req.connection.socket.remoteAddress, language:req.headers["accept-language"], software:req.headers["user-agent"]});
});

app.use("/.netlify/functions/server", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);

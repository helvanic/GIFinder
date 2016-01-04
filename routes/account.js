//Dependencies
var express = require('express');
var router = express.Router();

accounts = [];

//routes
router.get('/', function(req, res){
  res.json({text : "account"});
});

//Export for require in server.js
module.exports = router;

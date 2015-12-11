//Dependencies
var express = require('express');
var app = express();

//Middlewares
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/', function(req, res){
  res.sendFile(__dirname+'/public/views/index.html');
});

//Server start-up
app.listen(3000 || process.env.PORT, function(){
  if(process.env.PORT){
    console.log("Listening on "+process.env.PORT);
  }else{
    console.log("Listening on port 3000");
  }
});


var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/',function (req, res) {
  res.render("index");
  console.log("Get request has been made!");
});

//app.listen(3000,function(){
//console.log("Server is listening");
//});
var port = process.env.PORT;
port = 3000;
app.listen(port,process.env.IP, function() { 
  console.log('Server listening wiht port : '+port ); 
});


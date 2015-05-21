var express = require("express");
var routes = require("./routes");
var app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get("/", routes.index);

app.listen(3000, function(){
  console.log("Listening on localhost:3000");
});
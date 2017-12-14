const express = require("express");
const app = express();

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  let greeting = "Hello World";
  res.render("index", { greeting: greeting });
})

function stringify(str){
  let greeting = str.toString().toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1);
  return greeting;
}

app.get('/:first', function(req, res) {
  let greeting = "Hello" + " " + stringify(req.params.first);
  res.render("index", { greeting: greeting });
})

app.get('/:first/:second', function(req, res) {
  let greeting = stringify(req.params.first) + " " + stringify(req.params.second);
  res.render("index", { greeting: greeting });
})

app.listen(6789, function() {
  console.log("Listening to port 6789");
})

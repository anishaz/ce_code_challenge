const express = require("express");
const app = express();

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  let greeting = "Hello World";
  res.render("index", { greeting: greeting });
})

app.get('/:first', function(req, res) {
  let stringFirst = req.params.first.toString();
  let greeting = "Hello" + " " + stringFirst.toLowerCase().charAt(0).toUpperCase() + stringFirst.toLowerCase().slice(1);
  res.render("index", { greeting: greeting });
})

app.get('/:first/:second', function(req, res) {
  let stringFirst = req.params.first.toString();
  let stringSecond = req.params.second.toString();
  let firstGreeting = stringFirst.toLowerCase().charAt(0).toUpperCase() + stringFirst.toLowerCase().slice(1);
  let secondGreeting = stringSecond.toLowerCase().charAt(0).toUpperCase() + stringSecond.toLowerCase().slice(1);
  let greeting = firstGreeting + " " + secondGreeting;
  res.render("index", { greeting: greeting });
})

app.listen(6789, function() {
  console.log("Listening to port 6789");
})

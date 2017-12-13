const express = require("express");
const app = express();

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  let greeting = "Hello World";
  res.render("index", { greeting: greeting });
})

app.get('/*', function(req, res) {
  let path = req.url;
  // Take path, make lowercase, look for all forward slashes, and replace with a space, then take the first letter in the string and make upperCase
  let greeting = path.toLowerCase().replace(/(\/)+/g, " ").replace(/\b[a-z]/g, function(makeUpper){return makeUpper.toUpperCase();});

  let slashCount = path.match(/(\/)+/g).length;
  if (slashCount == 1){
      greeting = ("Hello" + greeting);
  };

  res.render("index", { greeting: greeting });
})

app.listen(6789, function() {
  console.log("Listening to port 6789");
})

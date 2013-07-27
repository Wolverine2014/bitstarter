var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  readFile = fs.readFileSync(index.html);
  response.send(new Buffer(readFile, "utf-8").toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

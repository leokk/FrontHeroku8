//Install express server
const express = require('express');

const path = require('path');
var http = require("http");
setInterval(function() {
  http.get("https://questionare-ui.herokuapp.com");
  http.get("https://questionare-test.herokuapp.com");
}, 300000);
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

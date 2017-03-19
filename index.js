const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const config = require('./config');
require('./app/routes')(app, config);

app.get('/', function(req, res) {
    res.send("Hello");
})

app.listen(config.port, () => {
  console.log('We are live on ' + config.port);
});
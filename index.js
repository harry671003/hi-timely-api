const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const appInsights = require("applicationinsights");

const config = require('./config');


app.use(bodyParser.urlencoded({ extended: true }));

const logger = appInsights.getClient(config.instrumentationKey);

require('./app/routes')(app, config, logger);

app.get('/', function(req, res) {
    res.send("Hello");
});

app.listen(config.port, () => {
  console.log('We are live on ' + config.port);
});
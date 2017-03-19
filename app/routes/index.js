const botRoutes = require('./bot.routes');

module.exports = function(app, config, logger) {
  botRoutes(app, config, logger);
  // Other route groups could go here, in the future
};
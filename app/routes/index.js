const botRoutes = require('./bot.routes');

module.exports = function(app, config) {
  botRoutes(app, config);
  // Other route groups could go here, in the future
};
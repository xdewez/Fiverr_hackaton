const router = require('./server.route');

module.exports = (app) => {
  app.use('/', router);
};
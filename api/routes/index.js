module.exports = function(app) {
  var index = require('../controllers/indexController');

  app.route('/index').get(index.default);
}
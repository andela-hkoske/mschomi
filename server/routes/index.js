module.exports = function(app, express) {
  var api = express.Router();
  api = require('./user')(api);
  api = require('./role')(api);
  // api = require('./document')(api);
  return api;
};

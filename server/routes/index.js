module.exports = function(app, express) {
  var api = express.Router();
  api = require('./student')(api);
  api = require('./sponsor')(api);
  // api = require('./document')(api);
  return api;
};

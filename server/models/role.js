var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolesSchema = new Schema({
  role: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  }
});

module.exports = mongoose.model('Role', RolesSchema);

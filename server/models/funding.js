var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FundingSchema = new Schema({
  student_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title:{
    type: String
  },
  description: {
    type: String
  },
  target: {
    type: Number,
    default: 0
  },
  achieved: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Funding', FundingSchema);

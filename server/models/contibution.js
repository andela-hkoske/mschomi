var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContributionSchema = new Schema({
  funding_id: {
    type: Schema.Types.ObjectId,
    ref: 'Funding',
    required: true,
    index: {
      unique: true
    }
  },
  sponsor_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  contribution: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Contribution', ContributionSchema);

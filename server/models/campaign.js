var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CampaignSchema = new Schema({
  student_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: {
      unique: true
    }
  },
  sponsor_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Campaign', CampaignSchema);

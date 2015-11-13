var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  role: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  email: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    // required: true
    default: new Date()
  },
  ed_level: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Hey there! I'm using mschomi!",
  },
  school: {
    type: String,
    required: true
  },
  msg_title:{
    type: String,
    required: true
  },
  msg_body:{
    type: String,
    required: true
  }
});
StudentSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    next();
  }
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) {
      return next(err);
    } else {
      user.password = hash;
      next();
    }
  });
});

StudentSchema.methods.comparePassword = function(password) {
  var user = this;
  return bcrypt.compareSync(password, user.password);
};
module.exports = mongoose.model('Student', StudentSchema);
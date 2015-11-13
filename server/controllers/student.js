var Student = require('../models/student');
var config = require('../../config');
var jsonwebtoken = require('jsonwebtoken');
var secretKey = config.secretKey;
var http = require('http');
var fs = require('fs');

function createToken(user) {
  var token = jsonwebtoken.sign({
    id: user._id
  }, secretKey, {
    expiresInMinute: 1440
  });
  return token;
}

function validEmail(email) {
  return (/^\S+@\S+\.\S+$/).test(email);
}

module.exports = {
  authenticate: function(req, res, next) {
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];
    if (token) {
      jsonwebtoken.verify(token, secretKey, function(err, decoded) {
        if (err) {
          res.status(403).send({
            success: false,
            message: "Failed to authenticate user"
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.status(403).send({
        success: false,
        message: "No Token provided"
      });
    }
  },
  me: function(req, res) {
    Student.findById(req.decoded._id, function(err, user) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(user);
    });
  },
  signup: function(req, res) {
    var user = new Student({
      name: {
        first: req.body.firstname,
        last: req.body.lastname
      },
      email: req.body.email,
      username: req.body.username,
      role: req.body.role,
      password: req.body.password,
      ed_level: req.body.ed_level,
      status: req.body.status,
      school: req.body.school,
      msg_title: req.body.title,
      msg_body: req.body.msg
    });
    user.save(function(err) {
      if (err) {
        console.log(err);
        res.status(500).send({
          success: false,
          message: err.message || err
        });
        return;
      } else {
        res.json({
          success: true,
          message: 'Student has been created!',
          user: user
        });
        return;
      }
    });
  },
  getStudents: function(req, res) {
    Student.find({}, function(err, users) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(users);
    });
  },
  findStudentById: function(req, res) {
    Student.findById(req.params.id, function(err, user) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(user);
    });
  },
  findStudent: function(req, res) {
    Student.find({
      $or: [{
        name: {
          first: req.body.firstname
        }
      }, {
        name: {
          last: req.body.lastname
        }
      }, {
        email: req.body.email
      }, {
        role: req.body.role
      }, {
        username: req.body.username
      }]
    }, function(err, user) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(user);
    });
  },
  removeStudent: function(req, res) {
    Student.remove({
      _id: req.params.id
    }, function(err, ok) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.send({
        message: 'Successfully deleted user.'
      });
    });
  },
  logout: function(req, res) {
    var respond = function(result) {
      if (result) {
        res.send({
          success: true,
          message: 'Successfully logged out'
        });
      } else {
        res.status(500).send({
          success: true,
          message: 'There was a problem logging out.'
        });
      }
    };
    fs.writeFile("./server/data/token.txt", '', function(err) {
      if (err) {
        respond(false);
        return console.log(err);
      }
      respond(true);
    });
  },
  login: function(req, res) {
    var login = this;
    Student.findOne({
      username: req.body.username
    }).select('password').exec(function(err, user) {
      if (err) {
        throw err;
      }
      if (!user) {
        res.status(500).send({
          success: false,
          message: "Student doesn't exist"
        });
      } else if (user) {
        var validPassword = user.comparePassword(req.body.password);
        if (!validPassword) {
          res.status(500).send({
            success: false,
            message: "Invalid password"
          });
        } else {
          var tokenStr = createToken(user);
          res.send({
            success: true,
            message: 'Successfully logged in',
            token: tokenStr
          });
        }
      }
    });
  },
  update: function(req, res) {
    Student.findOneAndUpdate({
      _id: req.params.id
    }, {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      role: req.body.role,
      username: req.body.username,
      ed_level: req.body.ed_level,
      status: req.body.status,
      school: req.body.school,
      msg_title: req.body.title,
      msg_body: req.body.msg
    }, function(err) {
      if (err) {
        res.status(500).send(err.errmsg || err.message || err);
        return;
      } else {
        res.json({
          success: true,
          message: 'Successfully updated your profile'
        });
        return;
      }
    });
  }
};

var Funding = require('../models/funding');

module.exports = {
  create: function(req, res) {
    var funding = new Funding({
      student_id: req.body.student_id,
      title: req.body.title,
      description: req.body.description,
      target: req.body.target,
      achieved: req.body.achieved
    });
    Funding.save(function(err) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully created a fund'
        });
        return;
      }
    });
  },
  update: function(req, res) {
    Funding.findOneAndUpdate({
      _id: req.body.id,
    }, {
      title: req.body.title,
      description: req.body.description,
      target: req.body.target,
      achieved: req.body.achieved
    }, function(err) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully updated a fund'
        });
        return;
      }
    });
  },
  getFundingById: function(req, res) {
    Funding.findOne({
      _id: req.params.id
    }).exec(function(err, funding) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else if (!funding) {
        res.status(500).json({
          success: false,
          message: 'Funding not found'
        });
        return;
      } else {
        res.status(200).send(funding);
        return;
      }
    });
  },
  getFundingByStudent: function(req, res) {
    Funding.find({
      student_id: req.params.id
    }).exec(function(err, funding) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else if (!funding) {
        res.status(500).json({
          success: false,
          message: 'Funding not found'
        });
        return;
      } else {
        res.status(200).send(funding);
        return;
      }
    });
  },
  removeFunding: function(req, res) {
    Funding.remove({
      _id: req.params.id
    }, function(err, ok) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      }
      res.send({
        message: 'Successfully deleted funding.'
      });
    });
  },
  getFundings: function(req, res) {
    Funding.find({}).exec(function(err, fundings) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else if (!fundings) {
        res.status(500).json({
          success: false,
          message: 'Error accessing funds'
        });
        return;
      } else {
        res.status(200).send(fundings);
        return;
      }
    });
  }
};

var Contribution = require('../models/contribution');

module.exports = {
  create: function(req, res) {
    var funding = new Contribution({
      funding_id: req.body.student_id,
      sponsor_id: req.body.sponsor_id,
      contribution: req.body.contribution
    });
    Contribution.save(function(err) {
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
    Contribution.findOneAndUpdate({
      _id: req.body.id,
    }, {
      contribution: req.body.contribution
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
  getContributionById: function(req, res) {
    Contribution.findOne({
      _id: req.params.id
    }).exec(function(err, funding) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else if (!funding) {
        res.status(500).json({
          success: false,
          message: 'Contribution not found'
        });
        return;
      } else {
        res.status(200).send(funding);
        return;
      }
    });
  },
  getContributionBySponsor: function(req, res) {
    Contribution.find({
      sponsor_id: req.params.id
    }).exec(function(err, funding) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else if (!funding) {
        res.status(500).json({
          success: false,
          message: 'Contribution not found'
        });
        return;
      } else {
        res.status(200).send(funding);
        return;
      }
    });
  },
  getContributionByFund: function(req, res) {
    Contribution.find({
      funding_id: req.params.id
    }).exec(function(err, funding) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else if (!funding) {
        res.status(500).json({
          success: false,
          message: 'Contribution not found'
        });
        return;
      } else {
        res.status(200).send(funding);
        return;
      }
    });
  },
  removeContribution: function(req, res) {
    Contribution.remove({
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
  getContributions: function(req, res) {
    Contribution.find({}).exec(function(err, fundings) {
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

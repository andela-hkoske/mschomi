var Campaign = require('../models/campaign');

module.exports = {
  create: function(req, res) {
    var campaign = new Campaign({
      student: req.body.student_id,
      sponsor: req.body.sponsor_id,
    });
    Campaign.save(function(err) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully created a campaign'
        });
        return;
      }
    });
  },
  update: function(req, res) {
    Campaign.findOneAndUpdate({
      student: req.body.student_id,
      sponsor: req.body.sponsor_id,
    }, {
      student: req.body.student_id,
      sponsor: req.body.sponsor_id
    }, function(err) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully updated a campaign'
        });
        return;
      }
    });
  },
  getCampaignById: function(req, res) {
    Campaign.findOne({
      _id: req.params.id
    }).exec(function(err, campaign) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else if (!campaign) {
        res.status(500).json({
          success: false,
          message: 'Campaign not found'
        });
        return;
      } else {
        res.status(200).send(campaign);
        return;
      }
    });
  },
  getCampaignByStudent: function(req, res) {
    Campaign.find({
      student_id: req.params.id
    }).exec(function(err, campaign) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else if (!campaign) {
        res.status(500).json({
          success: false,
          message: 'Campaign not found'
        });
        return;
      } else {
        res.status(200).send(campaign);
        return;
      }
    });
  },
  getCampaignBySponsor: function(req, res) {
    Campaign.find({
      sponsor_id: req.params.id
    }).exec(function(err, campaign) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else if (!campaign) {
        res.status(500).json({
          success: false,
          message: 'Campaign not found'
        });
        return;
      } else {
        res.status(200).send(campaign);
        return;
      }
    });
  },
  removeCampaign: function(req, res) {
    Campaign.remove({
      _id: req.params.id
    }, function(err, ok) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      }
      res.send({
        message: 'Successfully deleted campaign.'
      });
    });
  },
  getCampaigns: function(req, res) {
    Campaign.find({}).exec(function(err, campaigns) {
      if (err) {
        res.status(500).send(err.errmsg || err);
        return;
      } else if (!campaigns) {
        res.status(500).json({
          success: false,
          message: 'Error accessing campaigns'
        });
        return;
      } else {
        res.status(200).send(campaigns);
        return;
      }
    });
  }
};

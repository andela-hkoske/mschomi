var ContributionCtrl = require('../controllers/contribution');

module.exports = function(api) {
  api.post('/contributions',ContributionCtrl.create);
  api.get('/contributions',ContributionCtrl.getContributions);
  api.post('/contributions/sponsor',ContributionCtrl.getContributionBySponsor);
  api.post('/contributions/student',ContributionCtrl.getContributionByStudent);
  api.get('/contributions/:id',ContributionCtrl.getContributionById);
  api.delete('/contributions/:id',ContributionCtrl.removeContribution);
  api.put('/contributions/:id',ContributionCtrl.update);
  return api;
};

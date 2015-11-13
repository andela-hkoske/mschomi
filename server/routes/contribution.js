var CampaignCtrl = require('../controllers/campaign');

module.exports = function(api) {
  api.post('/campaigns',CampaignCtrl.create);
  api.get('/campaigns',CampaignCtrl.getCampaigns);
  api.post('/campaigns/sponsor',CampaignCtrl.getCampaignBySponsor);
  api.post('/campaigns/student',CampaignCtrl.getCampaignByStudent);
  api.get('/campaigns/:id',CampaignCtrl.getCampaignById);
  api.delete('/campaigns/:id',CampaignCtrl.removeCampaign);
  api.put('/campaigns/:id',CampaignCtrl.update);
  return api;
};

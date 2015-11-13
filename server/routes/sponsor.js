var SponsorCtrl = require('../controllers/sponsor');

module.exports = function(api) {
  api.post('/sponsors',SponsorCtrl.signup);
  api.post('/sponsors/login',SponsorCtrl.login);
  //api.use(SponsorCtrl.authenticate);
  api.get('/sponsors/me', SponsorCtrl.me);
  api.get('/sponsors',SponsorCtrl.getSponsors);
  api.post('/sponsors/find',SponsorCtrl.findSponsor);
  api.get('/sponsors/logout',SponsorCtrl.logout);
  api.get('/sponsors/:id',SponsorCtrl.findSponsorById);
  api.delete('/sponsors/:id',SponsorCtrl.removeSponsor);
  api.put('/sponsors/:id',SponsorCtrl.update);
  return api;
};

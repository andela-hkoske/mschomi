var UserRolesCtrl = require('../controllers/role');

module.exports = function(api) {
  api.post('/roles',UserRolesCtrl.create);
  api.get('/roles',UserRolesCtrl.getAllRoles);
  api.get('/roles/:role',UserRolesCtrl.getUserRole);
  api.delete('/roles/:role',UserRolesCtrl.removeRole);
  api.put('/roles/:role',UserRolesCtrl.update);
  return api;
};

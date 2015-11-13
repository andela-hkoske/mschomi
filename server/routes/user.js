var UserCtrl = require('../controllers/user');

module.exports = function(api) {
  api.post('/users',UserCtrl.signup);
  api.post('/users/login',UserCtrl.login);
  // api.use(UserCtrl.authenticate);
  api.get('/users',UserCtrl.getUsers);
  api.post('/users/find',UserCtrl.findUser);
  api.get('/users/logout',UserCtrl.logout);
  api.get('/users/:id',UserCtrl.findUserById);
  api.delete('/users/:id',UserCtrl.removeUser);
  api.put('/users/:id',UserCtrl.update);
  return api;
};

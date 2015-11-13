var StudentCtrl = require('../controllers/student');

module.exports = function(api) {
  api.post('/students',StudentCtrl.signup);
  api.post('/students/login',StudentCtrl.login);
  //api.use(StudentCtrl.authenticate);
  api.get('/students/me', StudentCtrl.me);
  api.get('/students',StudentCtrl.getStudents);
  api.post('/students/find',StudentCtrl.findStudent);
  api.get('/students/logout',StudentCtrl.logout);
  api.get('/students/:id',StudentCtrl.findStudentById);
  api.delete('/students/:id',StudentCtrl.removeStudent);
  api.put('/students/:id',StudentCtrl.update);
  return api;
};


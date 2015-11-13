(function() {
  'use strict';

  angular
    .module('authSvc', [])
    .service('Users', ['$http', function($http) {
      this.getUserById = function(id, cb) {
        $http.get('/api/students/' + id).
        success(function(res) {
            cb(null, res);
          })
          .error(function(err) {
            cb(err);
          });
      };
    }])
    .factory('authService', ['$http', '$q', function($http, $q) {
      var url = "api/students/login";

      function signup(user) {
        return $q(function(resolve, reject) {
          $http
            .post('/api/students', user)
            .success(function(data) {
              resolve(data);
              console.log("signup", data);
            })
            .error(function(err) {
              reject(err);
            });
        });
      }

      function login(user) {
        return $q(function(resolve, reject) {
          $http
            .post(url, user)
            .success(function(res) {
              resolve(res);
            })
            .error(function(error) {
              reject(error);
            });
        });
      }

      function logout() {
        //destroy session
      }

      return {
        login: login,
        logout: logout,
        signup: signup
      };
    }]);
})();

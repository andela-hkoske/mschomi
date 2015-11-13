(function() {
  'use strict';

  angular
    .module('authCtrl', [])
    .controller('authController', ['$scope', 'authService', 'Users', function($scope, authService, Users) {
      $scope.user = {}; //get from auth

      $scope.login = function(credentials) {
        authService
          .login(credentials)
          .then(function(auth) {
            if (auth.success) {
              //call for the authenticated user here
            } else {
              // error messages
            }
          });
      };

      $scope.logout = function() {
        authService
          .login()
          .then(function(auth) {
            if (auth.success) {
              //destroy cookie
            } else {
              // error messages
            }
          });
      };

      $scope.getUser = function() {
        Users.getUserById("56460657d8909669221d695b", function(err, res) {
          if (!err) {
            console.log(res);
          } else {
            console.log("There was an error!");
          }
        });
      };

      $scope.signup = function(user) {
        console.log(user);
        authService
          .signup(user)
          .then(function(auth) {
            if (auth.success) {
              $scope.message = "you have successfully registered!";
            } else {
              $scope.message = "There was a problem registering you!";
            }
          });
      };
    }]);
})();

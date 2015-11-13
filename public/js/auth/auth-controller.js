(function () {
	'use strict';

	angular
		.module('authCtrl', [])
		.controller('authController', ['$scope', 'authService', function ($scope, authService) {
			$scope.user = {}; //get from auth

			$scope.login = function (credentials) {
				authService
					.login(credentials)
					.then(function (auth) {
						if (auth.success) {
							//call for the authenticated user here
						} else {
							// error messages
						}
					});
			};

			$scope.logout = function () {
				authService
					.login()
					.then(function (auth) {
						if (auth.success) {
							//destroy cookie
						} else {
							// error messages
						}
					});
			};

			$scope.signup = function (user) {
				console.log(user);
				authService
					.signup(user)
					.then(function (auth) {
						if (auth.success) {
              $scope.message ="you have successfully registered!";
						} else {
							$scope.message ="There was a problem registering you!";
						}
					});
			};
		}]);
})();
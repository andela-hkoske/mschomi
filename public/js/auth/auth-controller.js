(function () {
	'use strict';

	angular
		.module('auth', [])
		.controller('authController', ['$scope', function ($scope) {
			$scope.user = {}; //get from auth

			$scope.login = function (user) {
				//connect to service
			};

			$scope.logout = function () {
				//destroy session
			}
		}]);
})();
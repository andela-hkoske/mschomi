(function () {
	'use strict';

	angular
		.module('authSvc', [])
		.factory('authService', ['$http','$q', function ($http, $q) {
			function login (user) {
				//login user
			}

			function logout () {
				//destroy session
			}

			return {
				login: login,
				logout: logout
			}
		}]);
})();
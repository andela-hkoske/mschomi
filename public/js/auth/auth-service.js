(function () {
	'use strict';

	angular
		.module('authSvc', [])
		.factory('authService', ['$http','$q', function ($http, $q) {
			var url = "";
			function login (user) {
				$q(function (resolve, reject) {
					$http
						.post(url, user)
						.success(function (res) {
							resolve(res);
						})
						.error(function (error) {
							reject(error);
						})
				});
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
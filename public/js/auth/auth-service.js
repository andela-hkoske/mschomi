(function () {
	'use strict';

	angular
		.module('authSvc', [])
		.factory('authService', ['$http', '$q', function ($http, $q) {
			var url = "api/users/login";
				
			function signup (user) {
				return $q(function (resolve, reject) {
					$http
						.post('/api/users', user)
						.success(function (data) {
							resolve(data);
							console.log("signup", data);
						})
						.error(function (err) {
							reject(err);
						})
				})
			}	

			function login (user) {
				return $q(function (resolve, reject) {
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
				logout: logout,
				signup: signup
			}
		}]);
})();
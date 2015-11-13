(function () {
	'use strict';

	angular
		.module('profileSvc', [])
		.controller('profileService', ['$http', '$q', function ($http, $q) {
			
			function getProfile (id) {
				//get a certain user
			}

			return {
				getProfile: getProfile
			}
		}]);
})();
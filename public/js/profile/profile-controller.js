(function () {
	'use strict';

	angular
		.module('profileCtrl', [])
		.controller('profileController', ['$scope', function ($scope) {
			$scope.user = {}; //get from auth

			//TO DO get current profile, could be my profile or other person's profile

		}]);
})();
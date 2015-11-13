(function () {
	'use strict';

	angular
		.module('profileCtrl', [])
		.controller('profileController', ['$scope', 'profileService', function ($scope, profileService) {
			$scope.user = {}; //get from auth

			$scope.profiles = {}; //get all profiles for all girls

			$scope.currentProfile = {}; //get current clicked profile

			$scope.contribute = function (user, receiver, amount) {
				// function for receiving a funding
				// connect to a service
			}

			//TO DO get current profile, could be my profile or other person's profile

		}]);
})();
(function () {
	'use strict';

	angular
		.module('profileSvc', [])
		.controller('profileService', ['$http', '$q', function ($http, $q) {
			
			function getMyProfile () {
				//get my profile
			}	

			function saveMyProfile () {
				// save profile changes
				// during registration, we specify whether we are child or sponsor
			}

			function deleteMyProfile () {
				//soft delete a profile
			}

			function getProfiles () {
				//get all profiles - will rank
			}

			function getProfile (id) {
				//get a certain user
			}

			function upvote (id) {
				//upvote a profile
			}

			function contribute (user, receiver, amount) {
				//make a donation
			}

			function sendMessage (user, receiver, message) {
				//send message to user	
			}

			return {
				getProfile: getProfile,
				contribute: contribute
			}
		}]);
})();
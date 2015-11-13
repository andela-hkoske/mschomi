(function () {
	'use strict';

	angular
		.module('configs', ['ui.router'])
		.config('$stateProvider', '$urlRouterProvider' function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					controller: 'defaultController'
				})
				.state('profiles') {
					url: '/profiles',
					controller: 'profileController'
				}
		}]);
})();
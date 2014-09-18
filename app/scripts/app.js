'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('FishingHole', ['ionic','leaflet-directive', 'config', 'FishingHole.controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})

	.state('app.friends', {
		url: '/friends',
		views: {
			'menuContent' :{
				templateUrl: 'templates/friends.html',
				controller: 'FriendsCtrl'
			}
		}
	})

	.state('app.home', {
		url: '/home',
		views: {
			'menuContent' :{
				templateUrl: 'templates/home.html',
				controller: 'HomeCtrl'
			}
		}
	})

	.state('app.map', {
		url: '/map',
		views: {
			'menuContent' :{
				templateUrl: 'templates/map.html',
				controller: 'MapCtrl'
			}
		}
	})

	.state('app.challenges', {
		url: '/challenges',
		views: {
			'menuContent' :{
				templateUrl: 'templates/challenge.html',
			}
		}
	})

	.state('app.challenges.new', {
		url: '/new',
		views: {
			'menuContent' :{
				templateUrl: 'templates/challenge.html',
			},
			'challengeContent' : {
				templateUrl: 'templates/newChallenge.html'
			}
		}
	})

	.state('app.challenges.completed', {
		url: '/completed',
		views: {
			'menuContent' :{
				templateUrl: 'templates/challenge.html',
			},
			'challengeContent' : {
				templateUrl: 'templates/completedChallenge.html'
			}
		}
	})

	.state('app.challenges.active', {
		url: '/active',
		views: {
			'menuContent' :{
				templateUrl: 'templates/challenge.html',
			},
			'challengeContent' : {
				templateUrl: 'templates/activeChallenge.html'
			}
		}
	})

	.state('app.browse', {
		url: '/browse',
		views: {
			'menuContent' :{
				templateUrl: 'templates/browse.html'
			}
		}
	})
	.state('app.playlists', {
		url: '/playlists',
		views: {
			'menuContent' :{
				templateUrl: 'templates/playlists.html',
				controller: 'PlaylistsCtrl'
			}
		}
	})

	.state('app.single', {
		url: '/playlists/:playlistId',
		views: {
			'menuContent' :{
				templateUrl: 'templates/playlist.html',
				controller: 'PlaylistCtrl'
			}
		}
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
});


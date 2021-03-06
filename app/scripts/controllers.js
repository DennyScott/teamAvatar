'use strict';
angular.module('FishingHole.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('JourneyInfoCtrl', function($scope, $stateParams) {
	 $scope.startedJourney = false;
})

.controller('MyFishCtrl', function($scope, $stateParams) {
	  $scope.fish = [{
    name: "Pickerel",
    size: "3 lb",
    location: "Lake Winnipeg",
    image: "images/fishy.png"
  },
  {
    name: "Walleye",
    size: "3 lb",
    location: "Lake Winnipeg",
    image: "images/fishy.png"
  },
  {
    name: "Bass",
    size: "7 lb",
    location: "Lake Winnipeg",
    image: "images/fishy.png"
  },
  {
    name: "Narwhal",
    size: "10 lb",
    location: "Lake Winnipeg",
    image: "images/fishy.png"
  },
  {
    name: "Sword Fish",
    size: "3 lb",
    location: "Lake Winnipeg",
    image: "images/fishy.png"
  },
  {
    name: "Moby Dick",
    size: "1000 lb",
    location: "Lake Winnipeg",
    image: "images/fishy.png"
  }];

})


.controller('HomeCtrl', function($scope, $state ,$stateParams) {
  $scope.goToMap = function()
  {
    $state.go('app.map');
  };
})

.controller('MapCtrl', function($scope, $ionicLoading, $rootScope, $ionicActionSheet, $ionicModal) {
  // angular.extend($scope, {
  //       defaults: {
  //           tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
  //       maxZoom: 14,
  //       path: {
  //           weight: 10,
  //           color: '#800000',
  //           opacity: 1
  //       }
		// 		}

    angular.extend($scope, {
    center: {
      lat: 49.5358,
      lng: 97.0821,
      zoom: 1
    },
    maxbounds: {},
    defaults: {
      maxZoom: 16,
      minZoom: 12,
      tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
      tileLayerOptions: {
          opacity: 0.9,
          detectRetina: true,
          reuseTiles: true,
      },
      scrollWheelZoom: true
    }
    });


		 // Triggered on a button click, or some other target
 $scope.showActions = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Caught Fish' },
			 {text: 'Take Photo'},
			 {text: 'Tell a Story'},
			  { text: '<b>Share</b> This' }
     ],
     destructiveText: 'Delete',
     titleText: 'Add an Event',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

 }


		$ionicModal.fromTemplateUrl('templates/journeyInfo.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $rootScope.closeAddEvent = function() {
		$state.go('app.map')    
	};

  // Open the login modal
  $scope.addEvent = function() {
    $scope.modal.show();
  };


  
    //$ionicLoading.show({
      //content: 'Getting current location...',
      //showBackdrop: false
    //});

});

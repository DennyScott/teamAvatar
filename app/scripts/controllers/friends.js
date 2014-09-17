'use strict';

angular.module('FishingHole')

.controller('FriendsCtrl', function($scope) {
  $scope.friends = [{
    firstName: "Jon",
    lastName: "Dart",
    image: "images/jonDart.jpg"
  },
  {
    firstName: "Jonathan",
    lastName: "Dart",
    image: "images/jonDart.jpg"
  },
  {
    firstName: "John",
    lastName: "Dart",
    image: "images/jonDart.jpg"
  },
  {
    firstName: "J",
    lastName: "Dizzle",
    image: "images/jonDart.jpg"
  },
  {
    firstName: "Another Jon",
    lastName: "Dart",
    image: "images/jonDart.jpg"
  },
  {
    firstName: "Jon",
    lastName: "Dart Returns",
    image: "images/jonDart.jpg"
  }];
});

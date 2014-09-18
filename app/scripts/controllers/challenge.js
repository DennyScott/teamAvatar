'use strict';

angular.module('FishingHole')
  .controller('ChallengeCtrl', function($scope, $state, $ionicModal) {

  

  $scope.friends = [{
    firstName: "Jon",
    lastName: "Dart",
    saying: "Back off, man. I'm a scientist.",
    image: "images/jonDart.jpg"
  },
  {
    firstName: "Jonathan",
    lastName: "Dart",
    saying: "Good day, sir.",
    image: "images/jonDart.jpg"
  },
  {
    firstName: "John",
    lastName: "Dart",
    saying: "I like face hair too.",
    image: "images/jonDart.jpg"
  },
  {
    firstName: "J",
    lastName: "Dizzle",
    saying: "How do magnets work?",
    image: "images/jonDart.jpg"
  },
  {
    firstName: "Another Jon",
    lastName: "Dart",
    saying: "Aren't you a little short for a Jon?",
    image: "images/jonDart.jpg"
  },
  {
    firstName: "Jon",
    lastName: "Dart Returns",
    saying: "I'll be back.",
    image: "images/jonDart.jpg"
  }];
});
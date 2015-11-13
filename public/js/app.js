angular.module('mschomi', ['ngMaterial', 'angular-carousel'])
  .controller('WelcomeCtrl', function($scope) {
    $scope.carouselimages = ['images/photo1.jpg', 'images/photo2.jpg'];
    $scope.title = 'Hello World';
  })
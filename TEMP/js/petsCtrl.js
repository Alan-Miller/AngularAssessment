angular.module('assessment').controller('petsCtrl', function($scope, mainService) {

  mainService.getPets().then(function(response) {
    $scope.pets = response;
  });

});

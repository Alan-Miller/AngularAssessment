angular.module('assessment').controller('petBioCtrl', function($scope, mainService, $stateParams) {

  mainService.getBio($stateParams.id).then(function(response) {
    $scope.bio = response;
  });

});

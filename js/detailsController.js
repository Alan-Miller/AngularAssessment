angular.module('assessment').controller('detailsController', function($scope, service, $stateParams) {

  service.getDetails($stateParams.id).then(function(response) {
    $scope.details = response;
  });

});

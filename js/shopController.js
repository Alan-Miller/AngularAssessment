angular.module('assessment').controller('shopController', function($scope, service, $stateParams) {


  service.getProducts().then(function(response) {
    $scope.products = response;
  });


});

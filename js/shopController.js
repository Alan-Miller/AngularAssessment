angular.module('assessment').controller('shopController', function($scope, service) {

  service.getProducts().then(function(response) {
    $scope.products = response;
  });

});

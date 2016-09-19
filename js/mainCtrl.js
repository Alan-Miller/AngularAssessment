angular.module('assessment').controller('mainCtrl', function($scope, mainService, $stateParams) {

  $scope.getData = function() {
    mainService.getData().then(function(response) {
      $scope.data = response.data;
    });
  };
  $scope.getData();


  $scope.getDetails = function(id) {
    mainService.getDetails(id).then(function(response) {
      $scope.details = response.data;
    });
  };

  $scope.sayName = function(){
    alert('alan');
  }


});

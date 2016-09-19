angular.module('assessment')
.directive('product', function() {

  return {
    scope: {
      getDeets: '&',
      merch: '='
    },
    // controller: function($scope, mainService) {
    //   scope.getDetails = $scope.getDetails;
    // },
    // link: function(scope, elem, attrs) {
    //
    //   scope.getDetails = function(id) {
    //     mainService.getDetails(id).then(function(response) {
    //       scope.details = response.data;
    //     });
    //   };
    //
    // },
    templateUrl: 'views/product-tmpl.html',
    restrict: 'AE'
  };




});

angular.module('assessment')
.directive('directive', function() {
  return {
    restrict: 'AE',
    scope: {
      ware: '=',
      getDeets: '&'
    },
    templateUrl: 'views/product-tmpl.html'
  };
});

angular.module('assessment')
  .directive('directive', function() {

    return {
      restrict: 'AE',
      scope: {
        ware: '=',
        getWare: '&'
      },
      templateUrl: 'views/product-tmpl.html'
    };
});

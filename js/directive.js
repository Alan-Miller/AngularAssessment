angular.module('assessment')
.directive('directive', function() {
  return {
    restrict: 'AE',
    scope: {
      familiar: '=',
      getBio: '&'
    },
    templateUrl: './views/pet-tmpl.html'
  };
});

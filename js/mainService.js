angular.module('assessment').service('mainService', function($http) {


  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products'
    });
  };

  this.getDetails = function(id) {
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products/' + id
    });
  };


});

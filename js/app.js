angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeController'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'aboutController'
  })
  .state('blog', {
    url: '/blog',
    templateUrl: 'views/blog.html',
    controller: 'blogController'
  })
  .state('details', {
    url: '/details/:id',
    templateUrl: 'views/product-details.html',
    controller: 'detailsController'
  })
  .state('shop', {
    url: '/shop',
    templateUrl: 'views/shop.html',
    controller: 'shopController'
  });

  $urlRouterProvider.otherwise('/');


});

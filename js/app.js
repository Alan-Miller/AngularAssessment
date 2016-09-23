angular.module('assessment', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'homeController',
    templateUrl: 'views/home.html'
  }).state('about', {
    url: '/about',
    controller: 'aboutController',
    templateUrl: 'views/about.html'
  }).state('blog', {
    url: '/blog',
    controller: 'blogController',
    templateUrl: 'views/blog.html'
  }).state('details', {
    url: '/details/:id',
    controller: 'detailsController',
    templateUrl: 'views/product-details.html'
  }).state('shop', {
    url: '/shop',
    controller: 'shopController',
    templateUrl: 'views/shop.html'
  });

  $urlRouterProvider.otherwise('/');

});

angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state('home', {
       url: '/',
       templateUrl: './views/home.html',
       controller: 'homeCtrl'
     })
     .state('about', {
       url: '/about',
       templateUrl: './views/about.html',
       controller: 'aboutCtrl'
     })
     .state('blog', {
       url: '/blog',
       templateUrl: './views/blog.html',
       controller: 'blogCtrl'
     })
     .state('bio', {
       url: '/bio/:id',
       templateUrl: './views/pet-bio.html',
       controller: 'petBioCtrl'
     })
     .state('pets', {
       url: '/pets',
       templateUrl: './views/pets.html',
       controller: 'petsCtrl'
     });

   $urlRouterProvider.otherwise('/');
});

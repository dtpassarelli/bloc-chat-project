(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
         $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl as Home',
                templateUrl: '/templates/home.html'
            });
     }
 
     angular
         .module('BlocChat', ['ui.router'])
         .config(config);
 })();




var myApp = angular.module('BlocChat', 'firebase', ['ui.router']);
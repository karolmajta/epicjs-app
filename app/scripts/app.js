'use strict';

angular.module('epicjsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/meditations/', {
        templateUrl: 'views/meditations.html',
        controller: 'MeditationsCtrl'
      })
      .when('/meditations/:slug', {
        templateUrl: 'views/meditation.html',
        controller: 'MeditationCtrl'
      })
      .otherwise({
        redirectTo: '/404/'
      });
  });

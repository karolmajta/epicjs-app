'use strict';

angular.module('epicjsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'LocalStorageModule'
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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .otherwise({
        redirectTo: '/404/'
      });
  });

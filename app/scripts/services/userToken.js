'use strict';

angular.module('epicjsApp')
  .service('userToken', function UserToken($cookies, $cookieStore, $http) {

    this.isPresent = function() {
      return Boolean(($cookieStore.get('token')));
    };

    this.getValue = function() {
      return $cookieStore.get('token');
    };

    this.setValue = function(token) {
      $cookieStore.put('token', token);
      $http.defaults.headers.common['Authorization'] = 'Token ' + token.key;
    };

    this.purge = function() {
      $cookieStore.remove('token');
      delete $http.defaults.headers.common['Authorization'];
      console.log($http.defaults.headers.common);
    };

  });

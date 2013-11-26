'use strict';

angular.module('epicjsApp')
  .controller('LogoutCtrl', function ($location, userToken) {
    userToken.purge();
    $location.path('/');
  });

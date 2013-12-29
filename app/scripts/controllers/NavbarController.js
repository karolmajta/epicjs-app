'use strict';

angular.module('epicjsApp')
  .controller('NavbarController', function ($scope, userToken) {
    $scope.token = userToken;
  });

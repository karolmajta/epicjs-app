'use strict';

angular.module('epicjsApp')
  .controller('LoginCtrl', function ($scope, $location, $resource, url, userToken) {

    if (userToken.isPresent()) {
        $location.path('/');
        return;
    }

    var UserToken = $resource(url('/token'));
    var httpErrorHandlers = {
        404: function() {
                $scope.loginForm.$setValidity('credentialsMatch', true);
                $scope.loginForm.$setValidity('gotResponse', true);
                $scope.loginForm.username.$setValidity('exists', false);
            },
        403: function() {
                $scope.loginForm.$setValidity('credentialsMatch', false);
                $scope.loginForm.$setValidity('gotResponse', true);
                $scope.loginForm.username.$setValidity('exists', true);
            },
        'default': function() {
                $scope.loginForm.$setValidity('credentialsMatch', true);
                $scope.loginForm.$setValidity('gotResponse', false);
                $scope.loginForm.username.$setValidity('exists', true);
            }
    };

    $scope.credentials = {
        username: "",
        password: ""
    };

    $scope.attemptLogin = function() {
        UserToken.get($scope.credentials,
            function(token) { userToken.setValue(token); $location.path('/'); },
            function(response) {
                var handler = httpErrorHandlers[response.status];
                if (handler) {
                    handler();
                } else {
                    httpErrorHandlers['default']();
                }
            }
        );
    };

  });

'use strict';

angular.module('epicjsApp')
  .controller('MeditationCtrl', function ($scope, $resource, $routeParams, url) {
    var Meditation = $resource(url('/meditations/:slug'));
    $scope.meditation = Meditation.get({'slug': $routeParams.slug});
  });

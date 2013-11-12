'use strict';

angular.module('epicjsApp')
  .controller('MeditationsCtrl', function ($scope, $resource, url) {
    var MeditationList = $resource(url('/meditations/ '));
    $scope.meditations = MeditationList.query();
  });

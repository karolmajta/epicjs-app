'use strict';

angular.module('epicjsApp')
  .service('anonymousAnswerPersistor', function AnswerPersistor($log, $q, $timeout, localStorageService) {

    var buildKey = function(meditation, koan) {
      return _.str.join('/', meditation.slug, koan.slug);
    };

    this.persist = function(meditation, koan) {
      var persisted = $q.defer();
      $timeout(function () {
        localStorageService.add(buildKey(meditation, koan), koan.solution);
        persisted.resolve(null);
      });
      return persisted.promise;
    };

    this.getSolution = function(meditation, koan) {
      var solution = localStorageService.get(buildKey(meditation, koan));
      return solution;
    };

  });

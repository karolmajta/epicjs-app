'use strict';

angular.module('epicjsApp')
  .service('answerPersistor', function AnswerPersistor($log, $q, $timeout, localStorageService) {

    var buildKey = function(meditation, koan) {
        return _.str.join("/", meditation.slug, koan.slug);
    };

    this.persist = function(meditation, koan) {
        var persisted = $q.defer();
        $timeout(function () {
            localStorageService.add(buildKey(meditation, koan), koan.solution);
            persisted.resolve(null);
            $log.info("Response arrived...");
        });
    };

    this.getSolution = function(meditation, koan) {
        $log.info(_.str.join("/", meditation.slug, koan.slug));
        var solution = localStorageService.get(buildKey(meditation, koan));
        $log.info(solution);
        return solution;
    };

  });

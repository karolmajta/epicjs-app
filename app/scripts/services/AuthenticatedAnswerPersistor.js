'use strict';

angular.module('epicjsApp')
    .service('authenticatedAnswerPersistor', function AuthenticatedAnswerPersistor($q, $resource, url) {

      var Answer = $resource(url('/meditations/:meditation/:koan/answer'),
          {'meditation': '@meditationId', 'koan': '@koanId'},
          {'save': {'method': 'POST'}});

      this.persist = function(meditation, koan) {
        var persisted = $q.defer();
        var newAnswer = new Answer();
        console.log(koan);
        newAnswer.meditationId = meditation.slug;
        newAnswer.koanId = koan.slug;
        newAnswer.answer = koan.solution;
        newAnswer.$save({},
          function(result) { persisted.resolve(null); },
          function(response) { persisted.reject(null); }
        );
        return persisted.promise;
      };

      this.getSolution = function(meditation, koan) {
        return koan.answer;
      };
    });

'use strict';

angular.module('epicjsApp')
  .factory('url', function (API_ROOT) {
    return function(url) {
      return API_ROOT.concat(url);
    };
  });

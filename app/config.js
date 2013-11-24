'use strict';

// configure the local storage with custom app prefix...
angular.module('LocalStorageModule')
  .value('prefix', 'epicjs');

// set some contracts with the API
angular.module('epicjsApp')
    .constant('KOAN_PLACEHOLDER', '__');

// THIS IS WHAT YOU MODIFY!
angular.module('epicjsApp')
  .constant('API_ROOT', 'http://port5000.localhost');
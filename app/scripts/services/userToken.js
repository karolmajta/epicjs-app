'use strict';

angular.module('epicjsApp')
    .service('userToken', function UserToken($cookies, $cookieStore) {

        this.isPresent = function() {
            return Boolean(($cookieStore.get('token')));
        };

        this.getValue = function() {
            return $cookieStore.get('token');
        };

        this.setValue = function(token) {
            $cookieStore.put('token', token);
        };

        this.purge = function() {
            $cookieStore.remove('token');
        }

    });

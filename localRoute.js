(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    /** @ngInject */
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/local', {
                controller: 'localController',
                templateUrl: 'src/local/local.html',
                controllerAs: 'local'
            })
    }

})();
